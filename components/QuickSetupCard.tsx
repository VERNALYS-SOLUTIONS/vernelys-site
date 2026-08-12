import Link from "next/link";
import ComplementMockup from "@/components/ComplementMockup";

/**
 * Carte de mise en avant « installation simple » — mockup à gauche dans un
 * cadre à fond dégradé, argumentaire et badge de disponibilité à droite.
 * Inspirée des cartes produit type « Jimini pour Outlook ».
 */
export default function QuickSetupCard() {
  return (
    <div className="grid overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm sm:grid-cols-2">
      <div className="relative flex items-center overflow-hidden bg-gradient-to-br from-brand-600 to-brand-400 p-6 sm:p-10">
        <div className="w-full scale-105 sm:translate-x-6 sm:scale-110">
          <ComplementMockup />
        </div>
      </div>

      <div className="flex flex-col justify-center gap-4 p-8 sm:p-12">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/logos/excel.png"
          alt=""
          width={40}
          height={40}
          className="h-10 w-10 rounded-xl shadow-sm ring-1 ring-slate-900/5"
        />
        <h3 className="text-2xl font-bold tracking-tight text-slate-900">
          Vernelys s&apos;installe directement dans Excel
        </h3>
        <p className="text-base leading-relaxed text-slate-600">
          Une fois installé, le ruban « Outils
          Excel » apparaît en quelques minutes, sans changer vos habitudes de
          travail ni celles de votre cabinet.
        </p>
        <div>
          <Link
            href="/download"
            className="inline-flex items-center rounded-md bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-brand-600/20 transition hover:bg-brand-700"
          >
            Télécharger Vernelys
          </Link>
        </div>
      </div>
    </div>
  );
}
