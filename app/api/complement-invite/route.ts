import { NextResponse } from "next/server";
import {
  isInviteAccessConfigured,
  verifyInvitePassword,
} from "@/lib/complement-invite";

// La vérification lit une variable d'environnement et doit s'exécuter à chaque
// appel : aucune mise en cache, aucun pré-rendu.
export const dynamic = "force-dynamic";
export const runtime = "nodejs";

// URL de l'installeur du complément Invité. Tant qu'elle vaut `null`, le mot de
// passe est bien vérifié mais le bouton de téléchargement reste inactif côté
// client (« bientôt disponible »). Il suffira de renseigner l'URL ici pour
// activer le téléchargement.
const INVITE_DOWNLOAD_URL: string | null = null;

// Limitation de débit, au mieux : la mémoire est propre à chaque instance
// serverless, elle ne survit pas à un redémarrage. Suffisant pour casser une
// attaque par force brute automatisée, ce n'est pas une protection absolue.
const MAX_ATTEMPTS = 5;
const WINDOW_MS = 10 * 60 * 1000;
const attempts = new Map<string, { count: number; resetAt: number }>();

function rateLimit(ip: string): boolean {
  const now = Date.now();

  // Purge opportuniste des fenêtres expirées : évite que la Map ne grossisse
  // indéfiniment sur une instance de longue durée.
  for (const [key, value] of attempts) {
    if (value.resetAt <= now) attempts.delete(key);
  }

  const current = attempts.get(ip);
  if (!current) {
    attempts.set(ip, { count: 1, resetAt: now + WINDOW_MS });
    return true;
  }

  current.count += 1;
  return current.count <= MAX_ATTEMPTS;
}

function clientIp(request: Request): string {
  const forwarded = request.headers.get("x-forwarded-for");
  return forwarded?.split(",")[0]?.trim() || "inconnu";
}

export async function POST(request: Request) {
  if (!(await isInviteAccessConfigured())) {
    return NextResponse.json(
      {
        error:
          "L'accès au complément Invité n'est pas encore configuré. Contactez-nous.",
      },
      { status: 503 }
    );
  }

  if (!rateLimit(clientIp(request))) {
    return NextResponse.json(
      {
        error:
          "Trop de tentatives. Réessayez dans une dizaine de minutes ou contactez-nous.",
      },
      { status: 429 }
    );
  }

  let password: unknown;
  try {
    const body = await request.json();
    password = (body as { password?: unknown })?.password;
  } catch {
    return NextResponse.json({ error: "Requête invalide." }, { status: 400 });
  }

  // Borne de longueur : au-delà, c'est une tentative d'abus du coût de scrypt.
  if (typeof password !== "string" || password.length === 0 || password.length > 200) {
    return NextResponse.json(
      { error: "Renseignez le mot de passe fourni par votre cabinet." },
      { status: 400 }
    );
  }

  if (!(await verifyInvitePassword(password))) {
    return NextResponse.json(
      { error: "Mot de passe incorrect." },
      { status: 401 }
    );
  }

  return NextResponse.json({ ok: true, downloadUrl: INVITE_DOWNLOAD_URL });
}
