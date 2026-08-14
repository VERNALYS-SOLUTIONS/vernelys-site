import CgsDocument from "./CgsDocument";
import { CGS_CURRENT } from "./versions";

// Page volontairement hors du site : aucun lien depuis la navigation, le pied
// de page ou le sitemap. Elle est marquée « noindex » ici et par l'en-tête
// X-Robots-Tag (next.config.ts). Elle n'est PAS listée dans robots.txt : une
// règle Disallow y publierait justement l'URL que l'on souhaite garder discrète.
export const metadata = {
  title: "Conditions Générales de Service",
  description:
    "Conditions générales de service de VERNALYS SOLUTIONS : Solution Vernelys, Compléments Office et services associés, pour les clients professionnels.",
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false },
  },
};

export default function CgsPage() {
  return <CgsDocument version={CGS_CURRENT} />;
}
