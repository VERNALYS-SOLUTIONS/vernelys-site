import Link from "next/link";

/**
 * Section « Arrêtez d'empiler » — 5 outils remplacés + total barré.
 * Réutilisée sur la home et sur la page Plateforme.
 */
export default function CentralisationSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-slate-50">
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 50%, rgba(99,102,241,0.06) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(16,185,129,0.05) 0%, transparent 50%)",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-6 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Arrêtez d&apos;empiler, gagnez en visibilité
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-600">
            Nous rassemblons dans une interface unique l&apos;équivalent de{" "}
            <span className="font-semibold text-slate-900">5 outils différents et couteux</span>.
            Vos données circulent librement, sans copier-coller, sans friction,
            dans un environnement respectueux du secret professionnel.
          </p>
        </div>

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          <ReplacedToolCard name="Fireflies" price="25 €" logo="/logos/fireflies.webp" />
          <ReplacedToolCard name="Claude" price="17,20 €" logo="/logos/claude.png" />
          <ReplacedToolCard name="Gemini" price="17,19 €" logo="/logos/gemini.png" />
          <ReplacedToolCard name="Datasnipper" price="68,33 €" logo="/logos/datasnipper.png" />
          <ReplacedToolCard name="Dust" price="30 €" logo="/logos/dust.png" />
        </div>

        <div className="mt-10 flex flex-col items-center gap-3">
          <div className="flex items-baseline gap-3">
            <span className="text-sm font-medium text-slate-500">Total séparé :</span>
            <span className="text-2xl font-bold text-red-500">
              <span className="line-through decoration-red-400/60">157,72 €</span>
              <span className="text-base font-normal">/mois/utilisateurs</span>
            </span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="h-5 w-5 text-emerald-500" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
            <span className="text-lg font-semibold text-emerald-600">
              Tout est inclus, une seule facture, un seul espace.
            </span>
          </div>
          <Link
            href="/contact"
            className="mt-6 inline-flex items-center justify-center rounded-md bg-brand-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand-600/20 transition hover:bg-brand-700"
          >
            Demander une démo
          </Link>
        </div>
      </div>
    </section>
  );
}

function ReplacedToolCard({ name, price, logo }: { name: string; price: string; logo: string }) {
  return (
    <div className="group relative flex flex-col items-center gap-3 rounded-2xl border border-slate-200 bg-white px-5 py-6 shadow-sm transition hover:border-brand-300 hover:shadow-md">
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-50">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={logo} alt={name} className="h-8 w-8 object-contain" />
      </div>
      <span className="text-sm font-semibold text-slate-900">{name}</span>
      <span className="rounded-full bg-red-50 px-3 py-0.5 text-xs font-bold text-red-600">
        {price}/mois
      </span>
    </div>
  );
}
