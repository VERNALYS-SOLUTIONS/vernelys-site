import Link from "next/link";

export const metadata = {
  title: "À propos",
  description:
    "VERNALYS SOLUTIONS édite Vernelys, le complément Excel conçu pour les cabinets d'expertise comptable. Découvrez notre mission, notre produit et nos engagements.",
};

export default function AProposPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-12 sm:px-6 sm:py-16">
      <p className="text-sm font-semibold uppercase tracking-widest text-brand-600">
        À propos
      </p>
      <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
        VERNALYS SOLUTIONS, éditeur de Vernelys
      </h1>
      <p className="mt-4 text-base text-slate-600 sm:text-lg">
        VERNALYS SOLUTIONS conçoit et édite Vernelys, un complément Excel pensé
        avec et pour les équipes de production comptable. Notre objectif est
        simple : faire gagner du temps aux cabinets sur les tâches Excel
        répétitives, sans jamais compromettre la fiabilité de leurs données.
      </p>

      <div className="mt-12 space-y-10">
        <section>
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
            Notre mission
          </h2>
          <p className="mt-3 text-slate-700">
            Les cabinets d&apos;expertise comptable passent un temps
            considérable sur des opérations Excel manuelles : extraction de
            données depuis des PDF, vérifications de cohérence, mise en forme,
            audit de déclarations. Vernelys regroupe ces besoins dans un
            unique onglet du ruban Excel, pour réduire le temps passé sur la
            saisie et limiter le risque d&apos;erreur.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
            Le produit
          </h2>
          <p className="mt-3 text-slate-700">
            Vernelys est un complément COM pour Microsoft Excel (Windows),
            distribué sous forme d&apos;un installeur{" "}
            <strong>signé numériquement</strong>, installable sans droits
            administrateur. Il propose des outils de productivité, l&apos;
            extraction de données PDF, un module d&apos;audit TVA, un
            gestionnaire de raccourcis clavier et un assistant IA optionnel.
            L&apos;interface est disponible en français et en anglais.
          </p>
          <p className="mt-3 text-slate-700">
            Le détail des fonctionnalités est disponible dans notre{" "}
            <Link href="/docs" className="text-brand-600 hover:underline">
              documentation
            </Link>{" "}
            et nos{" "}
            <Link href="/guides" className="text-brand-600 hover:underline">
              guides d&apos;utilisation
            </Link>
            .
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
            Sécurité & confiance
          </h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-700">
            <li>
              L&apos;installeur Vernelys est signé numériquement par son
              éditeur, ce qui permet de vérifier son authenticité avant
              installation.
            </li>
            <li>
              Le site est servi exclusivement en HTTPS (HSTS) et hébergé chez
              Vercel Inc., avec une politique de sécurité du contenu (CSP)
              stricte et des en-têtes de sécurité renforcés.
            </li>
            <li>
              Ce site ne dépose aucun cookie et n&apos;embarque aucun traceur ni
              outil de mesure d&apos;audience : aucune requête n&apos;est
              adressée à un service tiers pendant votre navigation.
            </li>
            <li>
              Le traitement des données personnelles est détaillé dans notre
              page{" "}
              <Link
                href="/confidentialite"
                className="text-brand-600 hover:underline"
              >
                Confidentialité & mentions légales
              </Link>
              .
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
            Nous contacter
          </h2>
          <p className="mt-3 text-slate-700">
            Pour toute question sur Vernelys, une demande de licence ou un
            besoin de support, notre équipe est joignable via la page{" "}
            <Link href="/contact" className="text-brand-600 hover:underline">
              Contact
            </Link>
            .
          </p>
        </section>
      </div>
    </div>
  );
}
