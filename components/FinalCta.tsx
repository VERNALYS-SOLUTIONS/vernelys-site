import Link from "next/link";

/**
 * Section CTA finale — titre + logo Vernelys en watermark + faux chat + bouton Démo.
 * Utilisée sur la home, la page Plateforme et la page Complément Excel.
 */
export default function FinalCta({
  title = "Rejoignez les professionnels du chiffre de demain.",
  prompt = "Je veux intégrer l'IA à mon cabinet",
  ctaLabel = "Démo",
  ctaHref = "/contact",
}: {
  title?: string;
  prompt?: string;
  ctaLabel?: string;
  ctaHref?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-brand-50/40 to-white">
      <div className="relative mx-auto max-w-5xl px-5 py-16 text-center sm:px-6 sm:py-28 md:py-32">
        {/* Logo Vernelys en watermark — recouvre titre + chat */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <svg
            viewBox="0 0 64 64"
            className="h-[22rem] w-[22rem] opacity-20 sm:h-[32rem] sm:w-[32rem]"
            aria-hidden="true"
          >
            <path
              d="M14 16 L32 50 L50 16"
              fill="none"
              stroke="#006039"
              strokeWidth="6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <h2 className="relative mx-auto max-w-3xl text-balance text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
          {title}
        </h2>

        <div className="relative mt-10 sm:mt-16">
          {/* Chat input mockup */}
          <div className="relative mx-auto max-w-2xl rounded-2xl border border-slate-200 bg-white p-4 shadow-2xl shadow-brand-900/10 sm:p-5">
            {/* Barre d'outils */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-sm font-medium text-slate-700"
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 6h18M6 12h12M9 18h6" />
                </svg>
                Outils
                <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m6 9 6 6 6-6" />
                </svg>
              </button>
              <button
                type="button"
                aria-label="Joindre un fichier"
                className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600"
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m18.375 12.739-7.693 7.693a4.5 4.5 0 0 1-6.364-6.364l10.94-10.94A3 3 0 1 1 19.5 7.372L8.552 18.32m.009-.01-.01.01m5.699-9.941-7.81 7.81a1.5 1.5 0 0 0 2.112 2.13" />
                </svg>
              </button>
              <button
                type="button"
                aria-label="Base documentaire"
                className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600"
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </button>
            </div>

            {/* Prompt + bouton Démo */}
            <div className="mt-5 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
              <p className="text-left text-slate-800 sm:text-lg">{prompt}</p>
              <Link
                href={ctaHref}
                className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-brand-600/30 transition hover:bg-brand-700"
              >
                {ctaLabel}
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
