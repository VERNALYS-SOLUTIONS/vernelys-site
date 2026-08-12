import Link from "next/link";

const guides = [
  {
    slug: "premiers-pas",
    title: "Premiers pas avec Vernelys",
    description:
      "Installer le complément, se connecter à son compte et trouver l'onglet dans le ruban.",
  },
  {
    slug: "outils-formules",
    title: "Outils de formules au quotidien",
    description:
      "Auto Sum, SIERREUR, arrondi, inversion de signe : les actions qui font gagner du temps sur chaque dossier.",
  },
  {
    slug: "extraction-pdf",
    title: "Extraire du contenu d'un PDF",
    description:
      "Importer un PDF dans le classeur et récupérer un texte, une somme ou un tableau dans Excel.",
  },
  {
    slug: "raccourcis-mise-en-forme",
    title: "Créer ses raccourcis de mise en forme",
    description:
      "Définir un raccourci de remplissage, police ou bordure et gérer les conflits avec Excel.",
  },
  {
    slug: "audit-tva",
    title: "Audit TVA depuis une CA3",
    description:
      "Extraire automatiquement les lignes d'une déclaration CA3 vers une feuille Excel structurée.",
  },
  {
    slug: "assistant-ia",
    title: "Utiliser l'assistant IA (beta)",
    description:
      "Faire analyser sa feuille active par l'assistant IA et accepter ses propositions d'action.",
  },
];

export default function GuidesPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <p className="text-sm font-semibold uppercase tracking-widest text-brand-600">
        Guides & tutos
      </p>
      <h1 className="mt-2 text-4xl font-bold tracking-tight">
        Apprendre Vernelys pas à pas
      </h1>
      <p className="mt-4 text-lg text-slate-600">
        Des parcours courts et concrets pour tirer parti du complément sur des
        cas réels de production comptable.
      </p>

      <ul className="mt-10 space-y-4">
        {guides.map((g) => (
          <li key={g.slug}>
            <Link
              href={`/guides/${g.slug}`}
              className="block rounded-lg border border-slate-200 bg-white p-5 transition hover:border-brand-500 hover:shadow-sm"
            >
              <h2 className="text-lg font-semibold text-slate-900">
                {g.title}
              </h2>
              <p className="mt-1 text-sm text-slate-600">{g.description}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
