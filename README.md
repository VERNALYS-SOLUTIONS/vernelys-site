# Vernelys — Site complément Excel

Site Next.js 15 (App Router) + Tailwind CSS v4, prêt pour déploiement sur Vercel.

## Pages

- `/` — accueil
- `/docs` — documentation
- `/guides` — guides & tutos (avec route dynamique `/guides/[slug]`)
- `/download` — téléchargement du `.msi`

## Démarrer en local

```bash
npm install
npm run dev
```

Le site est servi sur `http://localhost:3000`.

## Fichier .msi

Placez votre installeur dans `public/downloads/viper-setup.msi`. Le lien de la page `/download` pointe déjà dessus. Pour changer le nom de fichier ou la version, éditez les constantes en haut de `app/download/page.tsx`.

## Complément Invité (accès protégé)

La page `/download` propose, sous les prérequis, un accès au complément Invité
destiné aux clients des cabinets. Le téléchargement est protégé par un mot de
passe **unique**, renouvelé régulièrement, vérifié côté serveur par la route
`POST /api/complement-invite`.

### Où est stocké le mot de passe

Dans une base clé-valeur Redis (Upstash), installée depuis l’onglet **Storage**
du projet Vercel. Une seule clé, `complement-invite:mdp`, dont la valeur est un
JSON `{ sel, empreinte, maj }` : le mot de passe en clair n’est stocké nulle
part, seulement son empreinte scrypt salée.

Aucune dépendance npm : la base est interrogée par appels REST directs.

Le site utilise le jeton en **lecture seule** (`KV_REST_API_READ_ONLY_TOKEN`) :
une fuite des variables du déploiement ne permettrait pas de réécrire le mot de
passe. Le jeton d’écriture (`KV_REST_API_TOKEN`) ne sert qu’au script de
rotation, lancé depuis votre poste.

Si la base n’est pas configurée ou devient injoignable, la variable
d’environnement `COMPLEMENT_INVITE_PASSWORDS` sert de repli (format
`libellé:sel:empreinte`, entrées séparées par des virgules). La base fait
toujours autorité quand elle répond.

### Installer la base (une seule fois)

1. Vercel → projet → onglet **Storage** → **Create Database** → **Upstash for
   Redis** (Marketplace) → région Europe, plan gratuit.
2. **Connect Project** : sélectionner le projet et les trois environnements.
   Vercel injecte les variables `KV_REST_API_*` (ou `UPSTASH_REDIS_REST_*`).
3. Redéployer le projet pour que les variables soient prises en compte.
4. En local : `vercel env pull .env.local` (nécessite `npm i -g vercel` et
   `vercel link`).
5. Poser le premier mot de passe : `node scripts/rotation-mdp-invite.mjs`.

### Renouveler le mot de passe

```bash
node scripts/rotation-mdp-invite.mjs
```

Le script tire un mot de passe au hasard (ou accepte le vôtre en argument),
écrit son empreinte en base et affiche le mot de passe en clair — la seule
occasion de le lire, à transmettre aux cabinets. **La prise d’effet est
immédiate, sans redéploiement**, et l’ancien mot de passe cesse aussitôt de
fonctionner.

### Activer le téléchargement

Renseigner l’URL de l’installeur dans `INVITE_DOWNLOAD_URL`
(`app/api/complement-invite/route.ts`) : le bouton, aujourd’hui inactif,
devient un vrai lien.

## Déploiement Vercel

1. Pousser le repo sur GitHub.
2. Importer le projet sur [vercel.com](https://vercel.com).
3. Aucun réglage particulier : Vercel détecte Next.js automatiquement.
