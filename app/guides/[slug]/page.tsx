import Link from "next/link";
import { notFound } from "next/navigation";

type Guide = {
  title: string;
  intro: string;
  steps: string[];
  tip?: string;
};

const guides: Record<string, Guide> = {
  "premiers-pas": {
    title: "Premiers pas avec Vernelys",
    intro:
      "Ce guide vous accompagne de l'installation jusqu'à la première utilisation de l'onglet Vernelys dans Excel.",
    steps: [
      "Téléchargez le fichier .msi depuis la page Téléchargement.",
      "Fermez Excel s'il est ouvert, puis double-cliquez sur le .msi et suivez l'assistant.",
      "Relancez Excel : un nouvel onglet « Outils Excel » apparaît dans le ruban.",
      "Cliquez sur Connexion (groupe Compte) et saisissez votre code entreprise.",
      "Les boutons s'activent dès que la session est ouverte. Vous êtes prêt.",
    ],
    tip: "Si l'onglet n'apparaît pas, vérifiez dans Fichier > Options > Compléments que « Vernelys » est dans la liste des compléments COM actifs.",
  },
  "outils-formules": {
    title: "Outils de formules au quotidien",
    intro:
      "Les actions du groupe « Outils principaux » sont conçues pour s'appliquer à une sélection. Voici comment les enchaîner sur un cas typique de mise au propre d'une feuille.",
    steps: [
      "Sélectionnez la plage de formules à sécuriser.",
      "Cliquez sur Si erreur pour encapsuler chaque formule en SIERREUR(…;0).",
      "Cliquez sur Arrondi à l'unité pour ajouter ARRONDI(…;0) autour des formules.",
      "Pour basculer le signe d'une colonne de charges, sélectionnez-la et cliquez sur Sign Flip.",
      "En cas d'erreur, utilisez Retour arrière (groupe Outils) pour annuler l'action sans risque.",
    ],
    tip: "Toutes ces actions sont annulables via le bouton Retour arrière du ruban, même au-delà du premier niveau (Ctrl+Z n'annule que le dernier).",
  },
  "extraction-pdf": {
    title: "Extraire du contenu d'un PDF",
    intro:
      "Le groupe « Documents » permet d'embarquer un PDF dans le classeur et d'en extraire le contenu par sélection visuelle.",
    steps: [
      "Cliquez sur Importer PDF et choisissez un ou plusieurs fichiers.",
      "Cliquez sur Aperçu pour ouvrir le volet de visualisation à droite.",
      "Sélectionnez la cellule cible dans Excel, puis cliquez sur Texte, Somme ou Table selon ce que vous voulez extraire.",
      "Tracez la zone correspondante directement sur le PDF dans le volet d'aperçu.",
      "Le contenu est inséré dans Excel et lié à la zone du PDF. Pour rompre la liaison, utilisez le bouton Suppression.",
    ],
    tip: "Enregistrez le classeur au format .xlsx ou .xlsm pour conserver les PDF embarqués. Le format .xls perd les pièces jointes.",
  },
  "raccourcis-mise-en-forme": {
    title: "Créer ses raccourcis de mise en forme",
    intro:
      "Vernelys permet de mapper une combinaison de touches sur une couleur, une bordure ou un format de cellule, sans macro.",
    steps: [
      "Ouvrez le Gestionnaire de raccourcis (groupe Raccourcis).",
      "Choisissez un type : Remplissage, Couleur de police, Format, Bordures ou Autres.",
      "Sélectionnez la couleur ou le format à appliquer.",
      "Définissez la combinaison de touches (Ctrl + modificateur + touche). La disponibilité est vérifiée en direct.",
      "Cliquez sur Créer le raccourci. Il est immédiatement actif dans Excel.",
    ],
    tip: "Le Catalogue raccourcis (bouton voisin) liste tous les raccourcis disponibles avec un filtre par catégorie (Navigation, Sélection, Édition, etc.).",
  },
  "audit-tva": {
    title: "Audit TVA depuis une CA3",
    intro:
      "Reprenez les éléments d'une déclaration CA3 en quelques secondes pour les réconcilier avec votre balance.",
    steps: [
      "Ouvrez un classeur Excel vide ou la feuille de réconciliation cible.",
      "Cliquez sur Audit TVA (groupe Audit comptable).",
      "Sélectionnez le PDF de la CA3 à analyser.",
      "Vernelys écrit dans une nouvelle feuille les lignes extraites, prêtes à être rapprochées.",
    ],
    tip: "L'extraction est faite par un service cloud. Une connexion internet et une session active sont requises.",
  },
  "assistant-ia": {
    title: "Utiliser l'assistant IA (beta)",
    intro:
      "L'assistant IA lit votre feuille active, comprend votre demande et exécute directement les actions nécessaires dans le classeur.",
    steps: [
      "Cliquez sur le bouton IA (groupe IA) pour ouvrir le volet à droite.",
      "Décrivez votre besoin en langage naturel (ex. « ajoute une colonne TVA à 20 % sur la colonne C »).",
      "L'assistant analyse votre feuille et applique automatiquement les modifications, sans étape de validation intermédiaire.",
      "Si le résultat ne convient pas, utilisez le bouton Retour arrière du ruban pour annuler.",
    ],
    tip: "Toutes les actions IA passent par le moteur Retour arrière. Vous pouvez annuler en un clic si le résultat ne convient pas.",
  },
};

export function generateStaticParams() {
  return Object.keys(guides).map((slug) => ({ slug }));
}

export default async function GuidePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const guide = guides[slug];
  if (!guide) notFound();

  return (
    <article className="mx-auto max-w-3xl px-5 py-12 sm:px-6 sm:py-16">
      <Link href="/guides" className="text-sm text-brand-600 hover:underline">
        ← Tous les guides
      </Link>
      <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">{guide.title}</h1>
      <p className="mt-4 text-base text-slate-600 sm:text-lg">{guide.intro}</p>

      <ol className="mt-10 space-y-4">
        {guide.steps.map((step, i) => (
          <li key={i} className="flex gap-4">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-600 text-sm font-semibold text-white">
              {i + 1}
            </span>
            <p className="pt-1 text-slate-700">{step}</p>
          </li>
        ))}
      </ol>

      {guide.tip && (
        <aside className="mt-10 rounded-lg border-l-4 border-brand-500 bg-brand-50 p-4 text-sm text-slate-700">
          <p className="font-semibold text-brand-700">Astuce</p>
          <p className="mt-1">{guide.tip}</p>
        </aside>
      )}

      <div className="mt-12 border-t border-slate-200 pt-8">
        <Link
          href="/guides"
          className="text-sm font-semibold text-brand-600 hover:underline"
        >
          ← Retour à la liste des guides
        </Link>
      </div>
    </article>
  );
}
