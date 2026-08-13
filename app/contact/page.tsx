import type { Metadata } from "next";
import DemoForm from "./DemoForm";

export const metadata: Metadata = {
  title: "Demander une démo",
  description:
    "Réservez une démonstration personnalisée de Vernelys. Découvrez notre complément Excel et notre plateforme collaborative pour experts-comptables.",
};

export default function ContactPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-brand-50 via-white to-white">
        <div className="mx-auto max-w-6xl px-5 pt-14 pb-12 text-center sm:px-6 sm:pt-28 sm:pb-16">
          <span className="text-sm font-semibold uppercase tracking-widest text-brand-600">
            Démonstration
          </span>
          <h1 className="mx-auto mt-3 max-w-3xl text-balance text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
            Découvrez Vernelys{" "}
            <span className="italic text-brand-600">en action.</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-pretty text-base leading-relaxed text-slate-600 sm:mt-6 sm:text-lg">
            Réservez un créneau avec notre équipe pour une présentation
            personnalisée, adaptée aux besoins et aux outils de votre cabinet.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-2 sm:mt-9 sm:gap-3">
            <HeroBadge label="30 minutes" />
            <HeroBadge label="Sans engagement" />
            <HeroBadge label="À distance ou sur site" />
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="mx-auto max-w-6xl px-5 pb-16 sm:px-6 sm:pb-24">
        <div className="grid gap-10 sm:gap-12 lg:grid-cols-5 lg:gap-16">
          {/* Left: Benefits */}
          <div className="lg:col-span-2">
            <span className="text-xs font-semibold uppercase tracking-widest text-brand-600">
              Le déroulé
            </span>
            <h2 className="mt-4 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              Ce que vous découvrirez
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              En 30 minutes, nous vous montrons comment Vernelys s&apos;intègre
              dans votre quotidien.
            </p>

            <div className="mt-10 space-y-6">
              <BenefitItem
                icon={
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25a2.25 2.25 0 0 1-2.25-2.25v-2.25Z"
                  />
                }
                title="Présentation sur mesure"
                description="Nous adaptons la démo aux spécificités de votre cabinet : taille, outils actuels, besoins prioritaires."
              />
              <BenefitItem
                icon={
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                }
                title="30 minutes, pas plus"
                description="Un format court et efficace pour aller à l'essentiel sans perturber votre journée."
              />
              <BenefitItem
                icon={
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"
                  />
                }
                title="Sans engagement"
                description="Aucun engagement, aucune carte bancaire. Vous décidez ensuite en toute liberté."
              />
              <BenefitItem
                icon={
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
                  />
                }
                title="Questions bienvenues"
                description="Posez toutes vos questions techniques, tarifaires ou organisationnelles pendant la démo."
              />
            </div>

            <div className="mt-10 rounded-3xl border border-slate-200 bg-slate-50 p-6">
              <p className="text-sm font-semibold text-slate-800">
                Vous préférez nous écrire directement ?
              </p>
              <a
                href="mailto:sales@vernelys.com"
                className="mt-2 inline-flex items-center gap-2 text-sm font-semibold text-brand-600 hover:underline"
              >
                sales@vernelys.com
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
                    d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* Right: Form */}
          <div className="lg:col-span-3">
            <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-xl shadow-brand-900/5 sm:p-10">
              <h2 className="text-2xl font-bold tracking-tight text-slate-900">
                Réserver votre créneau
              </h2>
              <p className="mt-2 text-sm text-slate-500">
                Remplissez le formulaire et nous vous recontacterons sous 24 h.
              </p>
              <DemoForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function HeroBadge({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm">
      <svg
        className="h-4 w-4 text-brand-600"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2.5}
        stroke="currentColor"
        aria-hidden="true"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
      </svg>
      {label}
    </span>
  );
}

function BenefitItem({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="flex gap-4">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-white shadow-sm">
        <svg
          className="h-5 w-5 text-brand-600"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
        >
          {icon}
        </svg>
      </div>
      <div>
        <h3 className="text-base font-semibold text-slate-900">{title}</h3>
        <p className="mt-1 text-sm leading-relaxed text-slate-600">
          {description}
        </p>
      </div>
    </div>
  );
}
