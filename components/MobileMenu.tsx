"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

type NavLink = { href: string; label: string };

/**
 * Menu de navigation mobile : bouton hamburger (visible sous `md`) qui ouvre un
 * panneau plein écran avec les liens + le CTA démo. Se ferme au changement de route,
 * au clic sur un lien, avec la touche Échap, et verrouille le scroll de la page.
 */
export default function MobileMenu({ links }: { links: NavLink[] }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Fermer au changement de page.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Verrouiller le scroll du body + fermeture au clavier quand le panneau est ouvert.
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
        aria-expanded={open}
        aria-controls="mobile-menu-panel"
        className="flex h-10 w-10 items-center justify-center rounded-md text-slate-700 transition hover:bg-slate-100"
      >
        <svg viewBox="0 0 24 24" fill="none" strokeWidth={2} stroke="currentColor" className="h-6 w-6">
          {open ? (
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12M18 6L6 18" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h16M4 17h16" />
          )}
        </svg>
      </button>

      {/* Panneau déroulant */}
      {open && (
        <>
          {/* Voile cliquable */}
          <button
            type="button"
            aria-label="Fermer le menu"
            onClick={() => setOpen(false)}
            className="fixed inset-0 top-[65px] z-30 bg-slate-900/20 backdrop-blur-sm"
          />
          <div
            id="mobile-menu-panel"
            className="fixed inset-x-0 top-[65px] z-40 border-b border-slate-200 bg-white shadow-lg"
          >
            <nav className="flex flex-col gap-1 px-6 py-4">
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className={
                    "rounded-lg px-3 py-3 text-base font-medium transition " +
                    (pathname === l.href
                      ? "bg-brand-50 text-brand-700"
                      : "text-slate-700 hover:bg-slate-50")
                  }
                >
                  {l.label}
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="mt-2 rounded-md bg-brand-600 px-4 py-3 text-center text-base font-semibold text-white shadow-sm transition hover:bg-brand-700"
              >
                Demander une démo
              </Link>
            </nav>
          </div>
        </>
      )}
    </div>
  );
}
