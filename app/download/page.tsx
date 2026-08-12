import DownloadButton from "./DownloadButton";

const LATEST_VERSION = "1.0.4";
const SETUP_FILENAME = "VernalysInstaller.msi";

export const metadata = {
  title: "Téléchargement",
  description:
    "Téléchargez la dernière version du complément Excel Vernelys (VERNALYS SOLUTIONS).",
};

export default function DownloadPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <p className="text-sm font-semibold uppercase tracking-widest text-brand-600">
        Téléchargement
      </p>
      <h1 className="mt-2 text-4xl font-bold tracking-tight">
        Installer Vernelys sur votre poste
      </h1>
      <p className="mt-4 text-lg text-slate-600">
        Vernelys est un complément COM pour Microsoft Excel sur Windows,
        distribué via un installeur signé. L&apos;installation se fait{" "}
        <strong>sans droits administrateur</strong>.
      </p>

      <div className="mt-10 rounded-xl border border-slate-200 bg-white p-8 shadow-sm">
        <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-xl font-semibold">
              Vernelys pour Excel · Windows
            </h2>
            <p className="mt-1 text-sm text-slate-500">
              Version {LATEST_VERSION} · installeur signé (.msi)
            </p>
          </div>
          <DownloadButton className="cursor-pointer rounded-md bg-brand-600 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-brand-700">
            Télécharger l&apos;installeur
          </DownloadButton>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          <div>
            <h3 className="text-sm font-semibold text-slate-800">Prérequis</h3>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-600">
              <li>Windows 10 ou 11</li>
              <li>Excel 2016 ou plus récent (Desktop)</li>
              <li>Connexion internet pour l&apos;activation</li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-slate-800">
              Étapes d&apos;installation
            </h3>
            <ol className="mt-2 list-decimal space-y-1 pl-5 text-sm text-slate-600">
              <li>Fermer Excel s&apos;il est ouvert.</li>
              <li>
                Double-cliquer sur <code>{SETUP_FILENAME}</code>.
              </li>
              <li>
                Laisser l&apos;installeur poser les prérequis puis le
                complément (aucune élévation demandée).
              </li>
              <li>Relancer Excel et se connecter.</li>
            </ol>
          </div>
        </div>
      </div>

      <div className="mt-10 rounded-lg border border-amber-200 bg-amber-50 p-5 text-sm text-amber-900">
        <p className="font-semibold">Activation requise</p>
        <p className="mt-1">
          Après l&apos;installation, ouvrez l&apos;onglet « Outils Excel » dans
          Excel et cliquez sur <strong>Connexion</strong>. Renseignez votre
          code entreprise pour activer le complément. Sans connexion, les
          boutons restent désactivés.
        </p>
      </div>
    </div>
  );
}
