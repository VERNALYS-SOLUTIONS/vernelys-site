import Link from "next/link";
import { SITE_VERSION } from "@/lib/version";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 py-6 text-sm text-slate-500 sm:flex-row">
        <p>
          © {new Date().getFullYear()} Vernelys. Tous droits réservés.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link href="/complement-excel" className="hover:text-brand-600">
            Complément Excel
          </Link>
          <Link href="/plateforme" className="hover:text-brand-600">
            Plateforme
          </Link>
          <Link href="/a-propos" className="hover:text-brand-600">
            À propos
          </Link>
          <Link href="/confidentialite" className="hover:text-brand-600">
            Mentions légales & confidentialité
          </Link>
          <Link href="/contact" className="hover:text-brand-600">
            Contact
          </Link>
          <span className="rounded bg-slate-200 px-2 py-0.5 font-mono text-xs text-slate-600">
            v{SITE_VERSION}
          </span>
        </div>
      </div>
    </footer>
  );
}
