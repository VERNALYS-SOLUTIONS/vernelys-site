import Link from "next/link";
import DownloadButton from "./DownloadButton";
import ComplementMockup from "@/components/ComplementMockup";
import FinalCta from "@/components/FinalCta";

const LATEST_VERSION = "1.0.4";
const SETUP_FILENAME = "VernalysInstaller.msi";

export const metadata = {
  title: "Téléchargement",
  description:
    "Téléchargez la dernière version du complément Excel Vernelys (VERNALYS SOLUTIONS).",
};

const STEPS = [
  {
    index: "01",
    title: "Fermer Excel",
    description:
      "Quittez Excel s'il est ouvert pour que l'installeur puisse enregistrer le complément.",
  },
  {
    index: "02",
    title: "Lancer l'installeur",
    description: `Double-cliquez sur ${SETUP_FILENAME} téléchargé depuis cette page.`,
  },
  {
    index: "03",
    title: "Laisser faire",
    description:
      "L'installeur pose les prérequis puis le complément. Aucune élévation de privilèges n'est demandée.",
  },
  {
    index: "04",
    title: "Relancer Excel",
    description:
      "L'onglet « Outils Excel » apparaît dans le ruban. Connectez-vous pour activer vos outils.",
  },
];

const PREREQUIS = [
  "Windows 10 ou Windows 11",
  "Excel 2016 ou plus récent (version Desktop)",
  "Connexion internet pour l'activation",
  "Aucun droit administrateur nécessaire",
];

export default function DownloadPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-brand-50 via-white to-white">
        <div className="mx-auto max-w-6xl px-6 pt-20 pb-16 text-center sm:pt-28">
          <span className="text-sm font-semibold uppercase tracking-widest text-brand-600">
            Téléchargement
          </span>
          <h1 className="mx-auto mt-3 max-w-3xl text-balance text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Vernelys s&apos;installe dans Excel,{" "}
            <span className="italic text-brand-600">en quelques minutes.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-slate-600">
            Un complément COM pour Microsoft Excel sur Windows, distribué via un
            installeur signé. L&apos;installation se fait{" "}
            <strong className="font-semibold text-slate-800">
              sans droits administrateur
            </strong>{" "}
            et sans changer vos habitudes de travail.
          </p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <DownloadButton className="inline-flex cursor-pointer items-center gap-2 rounded-full bg-brand-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand-600/20 transition hover:bg-brand-700">
              <svg
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
                />
              </svg>
              Télécharger l&apos;installeur
            </DownloadButton>
            <Link
              href="/guides"
              className="rounded-full border border-slate-300 px-6 py-3.5 text-sm font-semibold text-slate-800 transition hover:bg-slate-50"
            >
              Consulter les guides
            </Link>
          </div>

          <p className="mt-5 text-sm text-slate-500">
            Version {LATEST_VERSION} · installeur signé (.msi) · Windows 10 & 11
          </p>

          <div className="mx-auto mt-16 max-w-3xl">
            <ComplementMockup />
          </div>
        </div>
      </section>

      {/* Étapes d'installation */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-brand-600">
            Installation
          </span>
          <h2 className="mt-3 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Quatre étapes, aucune complication
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-600">
            Pas de service informatique à mobiliser, pas de configuration à
            préparer : le complément se pose sur le poste de chaque
            collaborateur.
          </p>
        </div>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step) => (
            <div
              key={step.index}
              className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:shadow-md"
            >
              <div className="flex items-center gap-3">
                <span className="font-mono text-sm font-bold text-brand-600">
                  {step.index}
                </span>
                <span className="h-px flex-1 bg-brand-100" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-slate-900">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Prérequis & activation */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Prérequis */}
            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
              <span className="text-xs font-semibold uppercase tracking-widest text-brand-600">
                Prérequis
              </span>
              <h3 className="mt-4 text-2xl font-bold tracking-tight text-slate-900">
                Ce qu&apos;il faut sur le poste
              </h3>
              <ul className="mt-6 space-y-3 text-sm text-slate-700">
                {PREREQUIS.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span
                      aria-hidden="true"
                      className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-brand-50 text-xs font-bold text-brand-600"
                    >
                      ✓
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Activation */}
            <div className="rounded-3xl bg-brand-600 p-8 text-white shadow-lg shadow-brand-600/25 sm:p-10">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/15">
                <svg
                  className="h-5 w-5 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 5.25a3 3 0 0 1 3 3m3 0a6 6 0 0 1-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1 1 21.75 8.25Z"
                  />
                </svg>
              </div>
              <span className="mt-6 block text-xs font-semibold uppercase tracking-widest text-white/70">
                Après l&apos;installation
              </span>
              <h3 className="mt-3 text-2xl font-bold tracking-tight">
                Activation requise
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-white/85">
                Ouvrez l&apos;onglet « Outils Excel » dans Excel puis cliquez
                sur <strong className="font-semibold">Connexion</strong>.
                Renseignez le code entreprise de votre cabinet pour activer le
                complément. Sans connexion, les boutons du ruban restent
                désactivés.
              </p>
              <p className="mt-6 text-sm text-white/70">
                Pas encore de code entreprise ?{" "}
                <Link
                  href="/contact"
                  className="font-semibold text-white underline underline-offset-4 hover:text-white/90"
                >
                  Contactez-nous
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      <FinalCta prompt="Je veux déployer le complément Excel dans mon cabinet" />
    </div>
  );
}
