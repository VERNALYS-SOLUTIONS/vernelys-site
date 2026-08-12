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
      <section className="relative overflow-hidden bg-brand-600">
        <div className="absolute inset-0 opacity-30">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle at 20% 50%, rgba(255,255,255,0.15) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255,255,255,0.1) 0%, transparent 40%)",
            }}
          />
        </div>
        <div className="relative mx-auto max-w-6xl px-6 py-16 sm:py-20">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-100">
              Démonstration
            </p>
            <h1 className="mt-3 text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Découvrez Vernelys en action
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-white/80">
              Réservez un créneau avec notre équipe pour une présentation
              personnalisée adaptée aux besoins de votre cabinet.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
        <div className="grid gap-16 lg:grid-cols-5">
          {/* Left: Benefits */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold tracking-tight text-slate-900">
              Ce que vous découvrirez
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              En 30 minutes, nous vous montrons comment Vernelys s&apos;intègre
              dans votre quotidien.
            </p>

            <div className="mt-8 space-y-6">
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

            <div className="mt-10 rounded-xl border border-slate-200 bg-slate-50 p-5">
              <p className="text-sm font-medium text-slate-700">
                Vous préférez nous écrire directement ?
              </p>
              <a
                href="mailto:sales@vernelys.com"
                className="mt-1 inline-block text-sm font-semibold text-brand-600 hover:underline"
              >
                sales@vernelys.com
              </a>
            </div>
          </div>

          {/* Right: Form */}
          <div className="lg:col-span-3">
            <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
              <h2 className="text-xl font-bold text-slate-900">
                Réserver votre créneau
              </h2>
              <p className="mt-1 text-sm text-slate-500">
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
        <h3 className="text-sm font-semibold text-slate-900">{title}</h3>
        <p className="mt-1 text-sm leading-relaxed text-slate-600">
          {description}
        </p>
      </div>
    </div>
  );
}
