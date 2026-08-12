import Link from "next/link";

export default function DocsPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <p className="text-sm font-semibold uppercase tracking-widest text-brand-600">
        Documentation
      </p>
      <h1 className="mt-2 text-4xl font-bold tracking-tight">
        Vernelys : référence des fonctionnalités
      </h1>
      <p className="mt-4 text-lg text-slate-600">
        Toutes les commandes du ruban « Outils Excel » du complément Vernelys,
        regroupées par section.
      </p>

      <nav className="mt-10 rounded-lg border border-slate-200 bg-slate-50 p-5 text-sm">
        <p className="font-semibold text-slate-700">Sommaire</p>
        <ul className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
          <li>
            <a href="#installation" className="text-brand-600 hover:underline">
              1. Installation & prérequis
            </a>
          </li>
          <li>
            <a href="#compte" className="text-brand-600 hover:underline">
              2. Compte & licence
            </a>
          </li>
          <li>
            <a href="#outils" className="text-brand-600 hover:underline">
              3. Outils principaux
            </a>
          </li>
          <li>
            <a href="#documents" className="text-brand-600 hover:underline">
              4. Documents PDF
            </a>
          </li>
          <li>
            <a href="#raccourcis" className="text-brand-600 hover:underline">
              5. Raccourcis clavier
            </a>
          </li>
          <li>
            <a href="#tva" className="text-brand-600 hover:underline">
              6. Audit TVA
            </a>
          </li>
          <li>
            <a href="#ia" className="text-brand-600 hover:underline">
              7. Assistant IA (beta)
            </a>
          </li>
          <li>
            <a href="#parametres" className="text-brand-600 hover:underline">
              8. Paramètres & langue
            </a>
          </li>
        </ul>
      </nav>

      <div className="mt-14 space-y-14">
        <Section id="installation" title="1. Installation & prérequis">
          <ul className="list-disc space-y-2 pl-5">
            <li>Windows 10 ou 11.</li>
            <li>
              Microsoft Excel 2016 ou plus récent (versions Desktop, 32 ou 64
              bits).
            </li>
            <li>Une connexion internet pour l&apos;activation et les fonctionnalités cloud (OCR, IA).</li>
          </ul>
          <p>
            Téléchargez le fichier <code>.msi</code> depuis la page{" "}
            <Link href="/download" className="text-brand-600 hover:underline">
              Téléchargement
            </Link>
            {" "}et exécutez-le. Fermez Excel pendant l&apos;installation. Au
            prochain démarrage, l&apos;onglet{" "}
            <strong>Outils Excel</strong>
            {" "}apparaît dans le ruban.
          </p>
        </Section>

        <Section id="compte" title="2. Compte & licence">
          <p>
            La plupart des fonctionnalités requièrent une connexion à votre
            compte Vernelys. Cliquez sur{" "}
            <strong>Connexion</strong>
            {" "}dans le ruban et saisissez votre code entreprise pour ouvrir la
            session.
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              <strong>Connexion</strong> : ouvre le volet de connexion à votre
              espace.
            </li>
            <li>
              <strong>Déconnexion</strong> : termine la session sur le poste.
            </li>
            <li>
              Une licence suspendue désactive automatiquement les boutons et
              affiche un message. Contactez votre administrateur ou
              le support Vernelys.
            </li>
          </ul>
        </Section>

        <Section id="outils" title="3. Outils principaux">
          <p>
            Le groupe{" "}
            <strong>Outils principaux</strong>
            {" "}rassemble les actions de formules et de mise en forme les plus
            fréquentes. Chaque action est annulable via le bouton{" "}
            <strong>Retour arrière</strong>
            {" "}du ruban (en plus de Ctrl+Z d&apos;Excel).
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
        </Section>

        <Section id="documents" title="4. Documents PDF">
          <p>
            Embarquez vos PDF directement dans le classeur Excel et extrayez-en
            le contenu sans changer d&apos;application. Pensez à enregistrer au
            format <code>.xlsx</code> ou <code>.xlsm</code> pour conserver les
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
        </Section>

        <Section id="raccourcis" title="5. Raccourcis clavier">
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
          <p className="text-sm text-slate-500">
            Types de raccourcis disponibles : remplissage de cellule, couleur
            de police, format de cellule, bordures, et autres actions.
          </p>
        </Section>

        <Section id="tva" title="6. Audit TVA">
          <p>
            Le bouton{" "}
            <strong>Audit TVA</strong>
            {" "}extrait les éléments d&apos;une déclaration CA3 (au format PDF)
            vers une feuille Excel structurée, prête à être réconciliée avec
            votre comptabilité.
          </p>
        </Section>

        <Section id="ia" title="7. Assistant IA (beta)">
          <p>
            Ouvre un volet Office à droite d&apos;Excel. L&apos;assistant lit
            votre feuille active, comprend votre demande et exécute
            directement les actions nécessaires (mise en forme, formules,
            analyses) dans le classeur.
          </p>
          <p className="text-sm text-slate-500">
            Cette fonctionnalité est en beta. Les modifications sont appliquées
            automatiquement, sans étape de validation intermédiaire. Utilisez
            le bouton <strong>Retour arrière</strong> du ruban si vous
            souhaitez annuler une action.
          </p>
        </Section>

        <Section id="parametres" title="8. Paramètres & langue">
          <p>
            Le bouton{" "}
            <strong>Paramètres</strong>
            {" "}ouvre les préférences du complément, dont la bascule de langue
            FR / EN. Toute l&apos;interface du ruban et des fenêtres est
            traduite à la volée.
          </p>
          <p>
            Le bouton{" "}
            <strong>Aide</strong>
            {" "}ouvre un volet pour contacter le support (mail ou Teams).
          </p>
        </Section>
      </div>
    </div>
  );
}

function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24">
      <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
        {title}
      </h2>
      <div className="mt-4 space-y-4 text-slate-700">{children}</div>
    </section>
  );
}

function FeatureTable({ rows }: { rows: [string, string][] }) {
  return (
    <div className="overflow-hidden rounded-lg border border-slate-200">
      <table className="w-full text-sm">
        <tbody className="divide-y divide-slate-200">
          {rows.map(([name, desc]) => (
            <tr key={name} className="bg-white">
              <td className="w-1/3 px-4 py-3 font-semibold text-slate-800">
                {name}
              </td>
              <td className="px-4 py-3 text-slate-600">{desc}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
