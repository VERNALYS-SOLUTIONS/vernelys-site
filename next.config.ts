import type { NextConfig } from "next";

// ---------------------------------------------------------------------------
// Content Security Policy
// ---------------------------------------------------------------------------
// Le site est 100 % statique (aucune API, aucun appel réseau sortant côté
// navigateur). Toutes les ressources sont servies depuis l'origine :
//  - polices Inter : auto-hébergées par next/font (aucun appel à Google Fonts) ;
//  - iframes de démonstration : fichiers locaux dans /public/animations ;
//  - vidéos et images : fichiers locaux dans /public.
//
// 'unsafe-inline' reste nécessaire pour script-src : Next.js App Router injecte
// le payload RSC via des <script> inline, et le JSON-LD de layout.tsx est lui
// aussi inline. Une politique par nonce imposerait un rendu dynamique sur
// chaque page (perte du rendu statique) sans couvrir les fichiers HTML
// statiques de /public/animations. Le risque résiduel est faible : aucune
// donnée utilisateur n'est réinjectée dans le HTML.
// En développement, Next.js/Turbopack compile et recharge le code via eval() :
// 'unsafe-eval' n'est autorisé que dans ce mode, jamais en production.
const isDev = process.env.NODE_ENV === "development";

const CSP = [
  "default-src 'self'",
  "base-uri 'self'",
  "object-src 'none'",
  "form-action 'self'",
  "frame-ancestors 'self'",
  "frame-src 'self'",
  `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ""}`,
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob:",
  "media-src 'self' blob:",
  "font-src 'self' data:",
  // En dev, le rechargement à chaud passe par un WebSocket local.
  `connect-src 'self'${isDev ? " ws: wss:" : ""}`,
  "manifest-src 'self'",
  "worker-src 'self' blob:",
  "upgrade-insecure-requests",
].join("; ");

const SECURITY_HEADERS = [
  { key: "Content-Security-Policy", value: CSP },
  // HSTS : 2 ans, sous-domaines inclus, éligible à la liste de préchargement.
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  // Anti-clickjacking (doublon historique de frame-ancestors pour les vieux UA).
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "X-DNS-Prefetch-Control", value: "off" },
  { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
  { key: "Cross-Origin-Resource-Policy", value: "same-origin" },
  // Aucune fonctionnalité sensible du navigateur n'est utilisée par le site.
  {
    key: "Permissions-Policy",
    value: [
      "accelerometer=()",
      "autoplay=(self)",
      "camera=()",
      "display-capture=()",
      "encrypted-media=()",
      "fullscreen=(self)",
      "geolocation=()",
      "gyroscope=()",
      "magnetometer=()",
      "microphone=()",
      "midi=()",
      "payment=()",
      "usb=()",
      "interest-cohort=()",
    ].join(", "),
  },
];

const nextConfig: NextConfig = {
  // N'expose pas la stack technique via l'en-tête X-Powered-By.
  poweredByHeader: false,
  reactStrictMode: true,

  async headers() {
    return [
      {
        source: "/:path*",
        headers: SECURITY_HEADERS,
      },
      // Conditions générales de service : page diffusée uniquement par URL
      // directe, absente de la navigation et du sitemap. L'en-tête complète la
      // balise meta « noindex » des pages /cgs — elle couvre aussi les robots
      // qui ne rendent pas le HTML. Volontairement absente de robots.txt :
      // une règle Disallow y publierait l'URL que l'on garde discrète.
      {
        source: "/cgs/:path*",
        headers: [
          { key: "X-Robots-Tag", value: "noindex, nofollow, noarchive" },
        ],
      },
    ];
  },

  async rewrites() {
    return [
      // Diffusion du complément Excel Vernelys : URL publique stable sur vernelys.com,
      // proxifiée vers le Vercel Blob store PUBLIC « vernalys-addin-releases2 ». L'add-in
      // interroge /download/excel-addin/<canal>/manifest.json (et y télécharge VernalysInstaller.msi) ;
      // la release uploade sous excel-addin/<canal>/... Les blobs DOIVENT être en accès public
      // (store public) pour que ce proxy non authentifié les serve.
      //
      // Sécurité : la destination est un hôte constant (pas de composant contrôlé
      // par l'appelant dans le nom de domaine), le proxy ne peut donc pas servir
      // de tremplin SSRF. Les canaux acceptés sont explicitement listés pour
      // éviter que le proxy n'expose l'intégralité du store.
      {
        source: "/download/excel-addin/:channel(stable|beta|dev)/:path*",
        destination:
          "https://tp6hymfqz1dnyr6d.public.blob.vercel-storage.com/excel-addin/:channel/:path*",
      },
    ];
  },
};

export default nextConfig;
