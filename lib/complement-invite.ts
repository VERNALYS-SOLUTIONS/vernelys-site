import { randomBytes, scryptSync, timingSafeEqual } from "node:crypto";

// ---------------------------------------------------------------------------
// Mot de passe du complément « Invité »
// ---------------------------------------------------------------------------
// Le complément Invité n'est pas diffusé publiquement : son téléchargement est
// protégé par un mot de passe unique, renouvelé régulièrement, remis aux
// cabinets qui le transmettent à leurs clients.
//
// Source de vérité : une base clé-valeur Redis (Upstash), installée depuis
// l'onglet Storage du projet Vercel. Elle contient une seule clé, dont la
// valeur est un JSON `{ sel, empreinte, maj }` : jamais le mot de passe en
// clair, uniquement son empreinte scrypt salée. La rotation se fait avec
// `node scripts/rotation-mdp-invite.mjs`, sans redéploiement.
//
// Repli : si la base n'est pas configurée (développement local, base non
// encore créée) ou momentanément injoignable, la variable d'environnement
// `COMPLEMENT_INVITE_PASSWORDS` prend le relais. Le format y reste
// `libellé:sel:empreinte`, plusieurs entrées séparées par des virgules.
//
// Ce module n'est importé que côté serveur : ni les empreintes ni les jetons
// d'accès à la base ne parviennent au navigateur.
// ---------------------------------------------------------------------------

const KEY_LENGTH = 32;

/** Clé Redis hébergeant l'empreinte du mot de passe en cours. */
export const REDIS_KEY = "complement-invite:mdp";

/** Délai au-delà duquel on cesse d'attendre la base et on bascule sur le repli. */
const REDIS_TIMEOUT_MS = 3000;

// Garde-fou du repli : chaque vérification calcule un scrypt par entrée
// (opération volontairement coûteuse). Au-delà, la requête deviendrait
// elle-même un vecteur de déni de service.
const MAX_ENTRIES = 50;

type StoredPassword = { sel: string; empreinte: string; maj?: string };

/** Calcule l'empreinte scrypt d'un mot de passe pour un sel donné. */
export function derive(password: string, salt: Buffer): Buffer {
  return scryptSync(password.normalize("NFKC"), salt, KEY_LENGTH);
}

/** Fabrique la valeur à stocker en base à partir d'un mot de passe en clair. */
export function buildStoredPassword(password: string): StoredPassword {
  const salt = randomBytes(16);
  return {
    sel: salt.toString("hex"),
    empreinte: derive(password, salt).toString("hex"),
    maj: new Date().toISOString(),
  };
}

// ---------------------------------------------------------------------------
// Accès à la base
// ---------------------------------------------------------------------------

// L'intégration Vercel injecte les identifiants sous deux familles de noms
// selon l'ancienneté du magasin (`KV_REST_API_*` ou `UPSTASH_REDIS_REST_*`) :
// les deux sont acceptées.
//
// Le site ne fait que lire : on privilégie le jeton en lecture seule, qui ne
// permet pas de réécrire le mot de passe. Le jeton d'écriture n'est utilisé que
// par le script de rotation, lancé depuis votre poste.
function redisCredentials(): { url: string; token: string } | null {
  const url =
    process.env.KV_REST_API_URL ?? process.env.UPSTASH_REDIS_REST_URL ?? "";
  const token =
    process.env.KV_REST_API_READ_ONLY_TOKEN ??
    process.env.KV_REST_API_TOKEN ??
    process.env.UPSTASH_REDIS_REST_TOKEN ??
    "";
  return url && token ? { url, token } : null;
}

async function redisGet(key: string): Promise<string | null> {
  const credentials = redisCredentials();
  if (!credentials) return null;

  const response = await fetch(credentials.url, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${credentials.token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(["GET", key]),
    cache: "no-store",
    signal: AbortSignal.timeout(REDIS_TIMEOUT_MS),
  });

  if (!response.ok) throw new Error(`Redis a répondu ${response.status}`);

  const payload = (await response.json()) as { result?: string | null };
  return payload.result ?? null;
}

/** Lit l'empreinte en base ; `null` si la base est absente, vide ou en erreur. */
async function readStoredPassword(): Promise<StoredPassword | null> {
  if (!redisCredentials()) return null;

  try {
    const raw = await redisGet(REDIS_KEY);
    if (!raw) return null;

    const parsed = JSON.parse(raw) as StoredPassword;
    return parsed?.sel && parsed?.empreinte ? parsed : null;
  } catch (error) {
    // Base injoignable : on bascule sur le repli plutôt que de bloquer l'accès.
    console.error("Complément Invité — lecture de la base impossible :", error);
    return null;
  }
}

// ---------------------------------------------------------------------------
// Repli par variable d'environnement
// ---------------------------------------------------------------------------

type FallbackEntry = { label: string; salt: Buffer; hash: Buffer };

function parseFallbackEntries(): FallbackEntry[] {
  const raw = process.env.COMPLEMENT_INVITE_PASSWORDS;
  if (!raw) return [];

  return raw
    .split(/[\n,;]+/)
    .map((entry) => entry.trim())
    .filter(Boolean)
    .slice(0, MAX_ENTRIES)
    .flatMap((entry) => {
      const [label, saltHex, hashHex] = entry.split(":");
      if (!label || !saltHex || !hashHex) return [];

      const salt = Buffer.from(saltHex, "hex");
      const hash = Buffer.from(hashHex, "hex");
      if (salt.length === 0 || hash.length !== KEY_LENGTH) return [];

      return [{ label, salt, hash }];
    });
}

// ---------------------------------------------------------------------------
// API publique du module
// ---------------------------------------------------------------------------

/** `true` si un mot de passe est disponible, en base ou via le repli. */
export async function isInviteAccessConfigured(): Promise<boolean> {
  if (await readStoredPassword()) return true;
  return parseFallbackEntries().length > 0;
}

/**
 * Vérifie le mot de passe saisi. La comparaison est à temps constant, et le
 * repli teste toutes ses entrées sans sortie anticipée : ni la validité, ni le
 * nombre d'entrées ne fuient par le temps de réponse.
 */
export async function verifyInvitePassword(password: string): Promise<boolean> {
  const stored = await readStoredPassword();

  if (stored) {
    const salt = Buffer.from(stored.sel, "hex");
    const expected = Buffer.from(stored.empreinte, "hex");
    if (expected.length !== KEY_LENGTH) return false;
    return timingSafeEqual(derive(password, salt), expected);
  }

  let matched = false;
  for (const entry of parseFallbackEntries()) {
    if (timingSafeEqual(derive(password, entry.salt), entry.hash)) matched = true;
  }
  return matched;
}
