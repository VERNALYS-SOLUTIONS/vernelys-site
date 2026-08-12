import Link from "next/link";

type ProductCardProps = {
  eyebrow: string;
  title: string;
  description: string;
  highlights: string[];
  href: string;
  ctaLabel: string;
};

/**
 * Carte produit utilisée sur la page d'accueil pour présenter côte à côte
 * les deux solutions (complément Excel et plateforme).
 */
export default function ProductCard({
  eyebrow,
  title,
  description,
  highlights,
  href,
  ctaLabel,
}: ProductCardProps) {
  return (
    <div className="group relative flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-xl hover:shadow-brand-900/5">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-brand-500 to-brand-700 opacity-0 transition group-hover:opacity-100" />
      <span className="inline-flex w-fit items-center rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-brand-700">
        {eyebrow}
      </span>
      <h3 className="mt-4 text-2xl font-bold tracking-tight text-slate-900">
        {title}
      </h3>
      <p className="mt-3 text-slate-600">{description}</p>
      <ul className="mt-6 space-y-2.5 text-sm text-slate-700">
        {highlights.map((item) => (
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
      <div className="mt-8 pt-2">
        <Link
          href={href}
          className="inline-flex items-center gap-1 rounded-md bg-brand-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-700"
        >
          {ctaLabel}
          <span aria-hidden="true" className="transition group-hover:translate-x-0.5">
            →
          </span>
        </Link>
      </div>
    </div>
  );
}
