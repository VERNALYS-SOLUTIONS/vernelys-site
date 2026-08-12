import Link from "next/link";
import FinalCta from "@/components/FinalCta";

export const metadata = {
  title: "Documentation",
  description:
    "Référence des fonctionnalités du complément Excel Vernelys : installation, licence, outils de formules, extraction PDF, raccourcis clavier, audit TVA, assistant IA et paramètres.",
};

type Row = [string, string];

const SECTIONS: {
  id: string;
  index: string;
  title: string;
  body: React.ReactNode;
}[] = [
  {
    id: "installation",
    index: "01",
    title: "Installation & prérequis",
    body: (
      <>
        <ul className="space-y-3">
          <Bullet>Windows 10 ou 11.</Bullet>
          <Bullet>
            Microsoft Excel 2016 ou plus récent (versions Desktop, 32 ou 64
            bits).
          </Bullet>
          <Bullet>
            Une connexion internet pour l&apos;activation et les fonctionnalités
            cloud (OCR, IA).
          </Bullet>
        </ul>
        <p>
          Téléchargez le fichier <Code>.msi</Code> depuis la page{" "}
          <Link
            href="/download"
            className="font-semibold text-brand-600 hover:underline"
          >
            Téléchargement
          </Link>{" "}
          et exécutez-le. Fermez Excel pendant l&apos;installation. Au prochain
          démarrage, l&apos;onglet <strong>Outils Excel</strong> apparaît dans
          le ruban.
        </p>
      </>
    ),
  },
  {
    id: "compte",
    index: "02",
    title: "Compte & licence",
    body: (
      <>
        <p>
          La plupart des fonctionnalités requièrent une connexion à votre compte
          Vernelys. Cliquez sur <strong>Connexion</strong> dans le ruban et
          saisissez votre code entreprise pour ouvrir la session.
        </p>
        <ul className="space-y-3">
          <Bullet>
            <strong>Connexion</strong> : ouvre le volet de connexion à votre
            espace.
          </Bullet>
          <Bullet>
            <strong>Déconnexion</strong> : termine la session sur le poste.
          </Bullet>
          <Bullet>
            Une licence suspendue désactive automatiquement les boutons et
            affiche un message. Contactez votre administrateur ou le support
            Vernelys.
          </Bullet>
        </ul>
      </>
    ),
  },
  {
    id: "outils",
    index: "03",
    title: "Outils principaux",
    body: (
      <>
        <p>
          Le groupe <strong>Outils principaux</strong> rassemble les actions de
          formules et de mise en forme les plus fréquentes. Chaque action est
          annulable via le bouton <strong>Retour arrière</strong> du ruban (en
          plus de Ctrl+Z d&apos;Excel).
        </p>
        <FeatureTable
          rows={[
            ["Auto Sum", "Calcule la somme d'une plage et insère le résultat dans la cellule active."],
            ["Aa Switch", "Convertit le texte des cellules sélectionnées en majuscules ou minuscules."],
            ["Sign Flip", "Inverse le signe (+ / −) des valeurs numériques sélectionnées."],
            ["Arrondi à l'unité", "Encapsule les formules avec ARRONDI(…;0). Le sous-menu permet de retirer l'arrondi."],
            ["Si erreur", "Encapsule les formules avec SIERREUR(…;0) ou SIERREUR(…;\"\"). Sous-menu pour retirer."],
            ["Nettoyer les espaces", "Supprime les espaces superflus (début, fin, doublons) des cellules sélectionnées."],
            ["Audit formules", "Détecte dans une plage les cellules contenant des valeurs en dur plutôt que des formules."],
            ["Audit nombres magiques", "Détecte les formules contenant des littéraux numériques codés en dur (ex. =A1*1,21)."],
            ["Plus d'outils", "Affiche / masque les outils secondaires pour épurer le ruban."],
            ["Retour arrière", "Annule la dernière action Vernelys avec compteur de pile."],
          ]}
        />
      </>
    ),
  },
  {
    id: "documents",
    index: "04",
    title: "Documents PDF",
    body: (
      <>
        <p>
          Embarquez vos PDF directement dans le classeur Excel et extrayez-en le
          contenu sans changer d&apos;application. Pensez à enregistrer au
          format <Code>.xlsx</Code> ou <Code>.xlsm</Code> pour conserver les
          fichiers liés.
        </p>
        <FeatureTable
          rows={[
            ["Importer PDF", "Embarque un ou plusieurs PDF dans le classeur et les organise dans une arborescence."],
            ["Texte", "Extrait le texte d'une zone du PDF dans la cellule sélectionnée."],
            ["Somme", "Reconnaît et somme les chiffres d'une zone du PDF."],
            ["Table", "Extrait un tableau du PDF vers une plage Excel."],
            ["Suppression", "Supprime la liaison entre une cellule et la zone du PDF."],
            ["Aperçu", "Ouvre le volet d'aperçu des PDF embarqués."],
          ]}
        />
      </>
    ),
  },
  {
    id: "raccourcis",
    index: "05",
    title: "Raccourcis clavier",
    body: (
      <>
        <p>
          Créez vos propres raccourcis pour les mises en forme récurrentes
          (remplissage, police, bordures, format de cellule). Le gestionnaire
          détecte les conflits avec les raccourcis natifs d&apos;Excel.
        </p>
        <FeatureTable
          rows={[
            ["Gestionnaire de raccourcis", "Créer, modifier ou supprimer un raccourci en quelques secondes."],
            ["Catalogue raccourcis", "Liste filtrable de tous les raccourcis disponibles (natifs + personnels)."],
          ]}
        />
        <Note>
          Types de raccourcis disponibles : remplissage de cellule, couleur de
          police, format de cellule, bordures, et autres actions.
        </Note>
      </>
    ),
  },
  {
    id: "tva",
    index: "06",
    title: "Audit TVA",
    body: (
      <p>
        Le bouton <strong>Audit TVA</strong> extrait les éléments d&apos;une
        déclaration CA3 (au format PDF) vers une feuille Excel structurée, prête
        à être réconciliée avec votre comptabilité.
      </p>
    ),
  },
  {
    id: "ia",
    index: "07",
    title: "Assistant IA (beta)",
    body: (
      <>
        <p>
          Ouvre un volet Office à droite d&apos;Excel. L&apos;assistant lit
          votre feuille active, comprend votre demande et exécute directement
          les actions nécessaires (mise en forme, formules, analyses) dans le
          classeur.
        </p>
        <Note>
          Cette fonctionnalité est en beta. Les modifications sont appliquées
          automatiquement, sans étape de validation intermédiaire. Utilisez le
          bouton <strong>Retour arrière</strong> du ruban si vous souhaitez
          annuler une action.
        </Note>
      </>
    ),
  },
  {
    id: "parametres",
    index: "08",
    title: "Paramètres & langue",
    body: (
      <>
        <p>
          Le bouton <strong>Paramètres</strong> ouvre les préférences du
          complément, dont la bascule de langue FR / EN. Toute l&apos;interface
          du ruban et des fenêtres est traduite à la volée.
        </p>
        <p>
          Le bouton <strong>Aide</strong> ouvre un volet pour contacter le
          support (mail ou Teams).
        </p>
      </>
    ),
  },
];

export default function DocsPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-brand-50 via-white to-white">
        <div className="mx-auto max-w-6xl px-6 pt-20 pb-16 text-center sm:pt-28">
          <span className="text-sm font-semibold uppercase tracking-widest text-brand-600">
            Documentation
          </span>
          <h1 className="mx-auto mt-3 max-w-3xl text-balance text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Chaque commande du ruban,{" "}
            <span className="italic text-brand-600">expliquée.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-slate-600">
            La référence complète de l&apos;onglet « Outils Excel » du
            complément Vernelys : installation, licence, outils de production,
            extraction PDF, raccourcis et assistant IA.
          </p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/guides"
              className="rounded-full bg-brand-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand-600/20 transition hover:bg-brand-700"
            >
              Voir les guides pas à pas
            </Link>
            <Link
              href="/download"
              className="rounded-full border border-slate-300 px-6 py-3.5 text-sm font-semibold text-slate-800 transition hover:bg-slate-50"
            >
              Télécharger le complément
            </Link>
          </div>
        </div>
      </section>

      {/* Sommaire + contenu */}
      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Sommaire */}
          <aside className="lg:col-span-3">
            <div className="lg:sticky lg:top-24">
              <p className="text-xs font-semibold uppercase tracking-widest text-slate-400">
                Sommaire
              </p>
              <ul className="mt-4 border-l border-slate-200">
                {SECTIONS.map((s) => (
                  <li key={s.id}>
                    <a
                      href={`#${s.id}`}
                      className="-ml-px flex gap-3 border-l-2 border-transparent py-2 pl-4 text-sm text-slate-600 transition hover:border-brand-600 hover:text-brand-700"
                    >
                      <span className="font-mono text-xs text-slate-400">
                        {s.index}
                      </span>
                      {s.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          {/* Contenu */}
          <div className="space-y-16 lg:col-span-9">
            {SECTIONS.map((s) => (
              <section key={s.id} id={s.id} className="scroll-mt-24">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-sm font-bold text-brand-600">
                    {s.index}
                  </span>
                  <span className="h-px flex-1 bg-brand-100" />
                </div>
                <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900">
                  {s.title}
                </h2>
                <div className="mt-5 space-y-5 text-base leading-relaxed text-slate-600">
                  {s.body}
                </div>
              </section>
            ))}

            {/* Support */}
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 sm:p-10">
              <h2 className="text-2xl font-bold tracking-tight text-slate-900">
                Une question qui n&apos;est pas couverte ici ?
              </h2>
              <p className="mt-3 text-base leading-relaxed text-slate-600">
                Les guides pas à pas détaillent chaque fonctionnalité en images.
                Notre équipe reste joignable si vous ne trouvez pas votre
                réponse.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-4">
                <Link
                  href="/guides"
                  className="rounded-full bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm shadow-brand-600/20 transition hover:bg-brand-700"
                >
                  Consulter les guides
                </Link>
                <a
                  href="mailto:contact@vernelys.com"
                  className="text-sm font-semibold text-brand-600 hover:underline"
                >
                  contact@vernelys.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FinalCta prompt="Je veux former mes équipes au complément Excel" />
    </div>
  );
}

function Bullet({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex gap-3">
      <span
        aria-hidden="true"
        className="mt-1 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-brand-50 text-xs font-bold text-brand-600"
      >
        ✓
      </span>
      <span>{children}</span>
    </li>
  );
}

function Code({ children }: { children: React.ReactNode }) {
  return (
    <code className="rounded-md bg-slate-100 px-1.5 py-0.5 font-mono text-sm text-slate-800">
      {children}
    </code>
  );
}

function Note({ children }: { children: React.ReactNode }) {
  return (
    <p className="rounded-2xl border border-slate-200 bg-slate-50 p-5 text-sm leading-relaxed text-slate-600">
      {children}
    </p>
  );
}

function FeatureTable({ rows }: { rows: Row[] }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      <table className="w-full text-left text-sm">
        <thead>
          <tr className="border-b border-slate-200 bg-slate-50">
            <th className="w-1/3 px-5 py-3 text-xs font-semibold uppercase tracking-widest text-slate-500">
              Commande
            </th>
            <th className="px-5 py-3 text-xs font-semibold uppercase tracking-widest text-slate-500">
              Description
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100">
          {rows.map(([name, desc]) => (
            <tr key={name}>
              <td className="px-5 py-4 align-top font-semibold text-slate-900">
                {name}
              </td>
              <td className="px-5 py-4 align-top leading-relaxed text-slate-600">
                {desc}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
