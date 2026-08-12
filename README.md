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

## Déploiement Vercel

1. Pousser le repo sur GitHub.
2. Importer le projet sur [vercel.com](https://vercel.com).
3. Aucun réglage particulier : Vercel détecte Next.js automatiquement.
