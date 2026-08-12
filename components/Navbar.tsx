import Link from "next/link";
import MobileMenu from "@/components/MobileMenu";

const links = [
  { href: "/plateforme", label: "Plateforme" },
  { href: "/complement-excel", label: "Complément Excel" },
  { href: "/docs", label: "Documentation" },
  { href: "/download", label: "Téléchargement" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/70 bg-white/80 backdrop-blur">
      <nav className="flex w-full items-center justify-between px-6 py-4 sm:px-10">
        <Link href="/" className="flex items-center gap-2.5">
          <svg
            width="32"
            height="32"
            viewBox="0 0 64 64"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            className="shrink-0"
          >
            <rect width="64" height="64" rx="14" fill="#006039" />
            <path
              d="M18 18 L32 46 L46 18"
              fill="none"
              stroke="#ffffff"
              strokeWidth="6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="text-lg font-semibold tracking-tight text-slate-900">
            VERNELYS
          </span>
        </Link>
        <div className="flex items-center gap-4 sm:gap-6">
          <ul className="hidden items-center gap-6 text-sm font-medium text-slate-700 md:flex">
            {links.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="transition hover:text-brand-600">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          {/* Accès à l'application — volontairement inerte tant que la
              plateforme n'est pas ouverte aux clients. */}
          <button
            type="button"
            disabled
            aria-disabled="true"
            title="Bientôt disponible"
            className="hidden items-center gap-2 rounded-md border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-500 transition disabled:cursor-not-allowed md:inline-flex"
          >
            <svg
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.75}
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
              />
            </svg>
            Accès Plateforme
          </button>
          <Link
            href="/contact"
            className="hidden rounded-md bg-brand-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-700 md:inline-flex"
          >
            Demander une démo
          </Link>
          <MobileMenu links={links} />
        </div>
      </nav>
    </header>
  );
}
