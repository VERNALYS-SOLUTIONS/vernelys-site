#!/usr/bin/env node
// Renouvelle le mot de passe du complément Invité.
//
//   node scripts/rotation-mdp-invite.mjs                  → tire un mot de passe au hasard
//   node scripts/rotation-mdp-invite.mjs "mon-mot-de-passe" → impose un mot de passe
//
// Le nouveau mot de passe prend effet immédiatement, sans redéploiement : seule
// son empreinte scrypt salée est écrite en base, le mot de passe en clair n'est
// affiché qu'ici, à vous de le transmettre aux cabinets.
//
// Les identifiants de la base sont lus dans .env.local (récupérés une fois pour
// toutes avec `vercel env pull .env.local`). Sans base configurée, le script se
// contente d'afficher l'entrée à coller dans COMPLEMENT_INVITE_PASSWORDS.

import { randomBytes, scryptSync } from "node:crypto";
import { readFileSync } from "node:fs";

const REDIS_KEY = "complement-invite:mdp";

// Chargement minimal de .env.local : évite d'ajouter une dépendance au projet.
function chargerEnvLocal() {
  let contenu;
  try {
    contenu = readFileSync(new URL("../.env.local", import.meta.url), "utf8");
  } catch {
    return;
  }

  for (const ligne of contenu.split(/\r?\n/)) {
    const trouve = /^\s*([A-Za-z_][A-Za-z0-9_]*)\s*=\s*(.*)$/.exec(ligne);
    if (!trouve) continue;
    const [, cle, brut] = trouve;
    if (process.env[cle] !== undefined) continue;
    process.env[cle] = brut.trim().replace(/^["']|["']$/g, "");
  }
}

chargerEnvLocal();

// Alphabet sans caractères ambigus (0/O, 1/l/I) : le mot de passe est souvent
// recopié à la main depuis un mail.
const ALPHABET = "ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz23456789";

const motDePasse =
  process.argv[2] ??
  Array.from(randomBytes(20), (octet) => ALPHABET[octet % ALPHABET.length]).join("");

const sel = randomBytes(16);
const valeur = {
  sel: sel.toString("hex"),
  empreinte: scryptSync(motDePasse.normalize("NFKC"), sel, 32).toString("hex"),
  maj: new Date().toISOString(),
};

const url = process.env.KV_REST_API_URL ?? process.env.UPSTASH_REDIS_REST_URL;

// Rotation = écriture : le jeton en lecture seule ne convient pas ici.
const token =
  process.env.KV_REST_API_TOKEN ?? process.env.UPSTASH_REDIS_REST_TOKEN;

if (!url || !token) {
  console.log("");
  console.log("Base non configurée (KV_REST_API_URL / KV_REST_API_TOKEN absents).");
  console.log("Lancez `vercel env pull .env.local` après avoir créé la base,");
  console.log("ou collez l'entrée ci-dessous dans COMPLEMENT_INVITE_PASSWORDS :");
  console.log("");
  console.log(`  Repli:${valeur.sel}:${valeur.empreinte}`);
  console.log("");
  console.log(`Mot de passe correspondant : ${motDePasse}`);
  console.log("");
  process.exit(0);
}

const reponse = await fetch(url, {
  method: "POST",
  headers: {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  },
  body: JSON.stringify(["SET", REDIS_KEY, JSON.stringify(valeur)]),
});

if (!reponse.ok) {
  console.error(
    `Écriture refusée par la base (HTTP ${reponse.status}) : ${await reponse.text()}`
  );
  process.exit(1);
}

console.log("");
console.log("Mot de passe renouvelé, actif immédiatement.");
console.log("");
console.log("  Nouveau mot de passe à transmettre aux cabinets :");
console.log(`  ${motDePasse}`);
console.log("");
console.log(`  (empreinte écrite dans la clé « ${REDIS_KEY} » le ${valeur.maj})`);
console.log("");
