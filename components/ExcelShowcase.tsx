"use client";

/**
 * Vitrine multi-écrans du complément Excel — écrans en éventail avec
 * perspective, puis phrase d'accroche et grille de points forts (coches).
 */
export default function ExcelShowcase() {
  return (
    <section className="overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white py-24">
      <div className="mx-auto max-w-6xl px-6">
        {/* ── Toutes les fenêtres dans un seul écran ── */}
        <div className="mx-auto max-w-4xl">
          <div className="relative overflow-hidden rounded-2xl border-[6px] border-slate-800 bg-gradient-to-b from-slate-100 to-slate-50 shadow-2xl ring-1 ring-slate-900/5 sm:border-[10px]">
            {/* Caméra du moniteur */}
            <span className="absolute left-1/2 top-1 z-20 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-slate-700 sm:h-2 sm:w-2" />

            <div className="relative h-[340px] sm:h-[440px]">
              <FloatingScreen top="7%" left="2%" width="32%" z={10}>
                <ScreenRibbon />
              </FloatingScreen>
              <FloatingScreen top="0%" left="34%" width="32%" z={20}>
                <ScreenPdf />
              </FloatingScreen>
              <FloatingScreen top="7%" left="66%" width="32%" z={10}>
                <ScreenAudit />
              </FloatingScreen>
              <FloatingScreen top="48%" left="10%" width="38%" z={15}>
                <ScreenShortcuts />
              </FloatingScreen>
              <FloatingScreen top="48%" left="52%" width="38%" z={15}>
                <ScreenAI />
              </FloatingScreen>
            </div>
          </div>

          {/* Pied moniteur */}
          <div className="mx-auto flex flex-col items-center">
            <div className="h-6 w-16 rounded-b-lg bg-gradient-to-b from-slate-300 to-slate-400 sm:h-8 sm:w-20" />
            <div className="h-1.5 w-28 rounded-b-full bg-slate-400 sm:w-36" />
          </div>
        </div>

        {/* ── Accroche ── */}
        <div className="mx-auto mt-16 max-w-3xl text-center">
          <p className="text-xl font-bold tracking-tight text-slate-900 sm:text-2xl">
            Le complément <span className="italic text-brand-600">Vernelys</span>{" "}
            a pour mission de{" "}
            <span className="font-extrabold">
              faciliter le travail quotidien des professionnels du chiffre
            </span>{" "}
            :
          </p>
        </div>

        {/* ── Grille de points forts ── */}
        <div className="mx-auto mt-10 grid max-w-4xl gap-x-12 gap-y-4 sm:grid-cols-2">
          <CheckItem>
            Facilitation des missions d&apos;audit dans Excel
          </CheckItem>
          <CheckItem>
            Communication simplifiée avec son client et ses équipes
          </CheckItem>
          <CheckItem>
            Économie substantielle par rapport à la concurrence
          </CheckItem>
          <CheckItem>
            Hautement personnalisable : ruban, raccourcis, branding cabinet
          </CheckItem>
          <CheckItem>
            Traitement local sur la machine, données externes traitées à Paris
            sans rétention
          </CheckItem>
          <CheckItem>
            Chiffrement en transit de bout en bout
          </CheckItem>
          <CheckItem>
            Suivi collaboratif intuitif pour un meilleur travail en équipe
          </CheckItem>
          <CheckItem>
            Interface bilingue FR / EN avec bascule en un clic
          </CheckItem>
        </div>
      </div>
    </section>
  );
}

/* ── Fenêtre flottante positionnée dans l'écran ── */

function FloatingScreen({
  children,
  top,
  left,
  width,
  z = 10,
}: {
  children: React.ReactNode;
  top: string;
  left: string;
  width: string;
  z?: number;
}) {
  return (
    <div
      className="absolute overflow-hidden rounded-lg border border-slate-200 bg-white shadow-xl ring-1 ring-slate-900/5"
      style={{ top, left, width, zIndex: z }}
    >
      {children}
    </div>
  );
}

/* ── Faux écrans ── */

function ScreenTopBar({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-1.5 border-b border-slate-100 bg-slate-50 px-2.5 py-1.5">
      <span className="h-1.5 w-1.5 rounded-full bg-red-300" />
      <span className="h-1.5 w-1.5 rounded-full bg-amber-300" />
      <span className="h-1.5 w-1.5 rounded-full bg-green-300" />
      <span className="ml-2 truncate text-[8px] font-medium text-slate-400">
        {label}
      </span>
    </div>
  );
}

function ScreenRibbon() {
  return (
    <>
      <ScreenTopBar label="Outils Excel Vernelys" />
      <div className="p-2.5">
        <div className="flex items-center gap-1 border-b border-slate-100 pb-1.5">
          {["/ribbon/texte.png", "/ribbon/somme.png", "/ribbon/table.png", "/ribbon/suppression.png"].map((src) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img key={src} src={src} alt="" width={14} height={14} className="h-3.5 w-3.5 object-contain" />
          ))}
        </div>
        <div className="mt-1.5 space-y-1">
          {[0, 1, 2, 3].map((r) => (
            <div key={r} className="flex gap-1">
              {[0, 1, 2, 3].map((c) => (
                <span key={c} className={"h-2 flex-1 rounded-sm " + (c === 2 && r % 2 === 0 ? "bg-brand-100" : "bg-slate-100")} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

function ScreenPdf() {
  return (
    <>
      <ScreenTopBar label="Extraction PDF" />
      <div className="flex p-2.5">
        <div className="flex-1 space-y-1">
          {[0, 1, 2, 3, 4].map((i) => (
            <span key={i} className="block h-1.5 rounded-full bg-slate-100" style={{ width: `${60 + (i % 3) * 12}%` }} />
          ))}
        </div>
        <div className="ml-2 w-12 rounded border border-slate-200 bg-white p-1 sm:w-16">
          <span className="block h-1 w-full rounded-full bg-slate-200" />
          {[0, 1, 2].map((i) => (
            <span key={i} className="mt-0.5 block h-1 w-full rounded-full bg-slate-100" />
          ))}
          <div className="mt-1 h-3 w-full rounded-sm bg-brand-50 ring-1 ring-brand-200" />
        </div>
      </div>
    </>
  );
}

function ScreenAudit() {
  return (
    <>
      <ScreenTopBar label="Audit TVA : CA3" />
      <div className="p-2.5">
        <div className="flex items-center gap-1.5">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/ribbon/aide-audit.png" alt="" width={14} height={14} className="h-3.5 w-3.5 object-contain" />
          <span className="text-[7px] font-semibold text-slate-500">Aide Audit</span>
        </div>
        <div className="mt-2 space-y-1">
          {["TVA collectée", "TVA déductible", "Crédit TVA"].map((l) => (
            <div key={l} className="flex items-center justify-between">
              <span className="text-[7px] text-slate-500">{l}</span>
              <span className="h-1.5 w-8 rounded-full bg-brand-100" />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

function ScreenShortcuts() {
  return (
    <>
      <ScreenTopBar label="Gestionnaire de raccourcis" />
      <div className="p-3">
        <div className="flex items-center gap-2">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/ribbon/gestionnaire-raccourcis.png" alt="" width={16} height={16} className="h-4 w-4 object-contain" />
          <span className="text-[9px] font-semibold text-slate-600">Raccourcis clavier</span>
        </div>
        <div className="mt-2 space-y-1.5">
          {[
            { keys: "Ctrl + M", action: "Remplissage vert" },
            { keys: "Ctrl + J", action: "Bordure épaisse" },
            { keys: "Ctrl + K", action: "Format milliers" },
          ].map((s) => (
            <div key={s.keys} className="flex items-center justify-between rounded border border-slate-100 px-2 py-1">
              <span className="rounded bg-slate-100 px-1 py-0.5 text-[7px] font-mono font-medium text-slate-600">
                {s.keys}
              </span>
              <span className="text-[7px] text-slate-400">{s.action}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

function ScreenAI() {
  return (
    <>
      <ScreenTopBar label="Assistant IA" />
      <div className="p-3">
        <div className="flex items-center gap-2">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/ribbon/ia.png" alt="" width={16} height={16} className="h-4 w-4 object-contain" />
          <span className="text-[9px] font-semibold text-slate-600">Assistant</span>
        </div>
        <div className="mt-2 space-y-1.5">
          <div className="rounded-lg bg-brand-50 px-2 py-1.5">
            <span className="text-[8px] text-brand-700">Analyser les écarts de la colonne D</span>
          </div>
          <div className="rounded-lg bg-slate-100 px-2 py-1.5">
            <span className="text-[8px] text-slate-500">3 écarts identifiés, corrections suggérées…</span>
          </div>
          <div className="flex gap-1">
            <span className="flex-1 rounded border border-slate-200 bg-white px-1.5 py-1 text-[7px] text-slate-400">
              Comment puis-je vous aider ?
            </span>
            <span className="rounded bg-brand-600 px-1.5 py-1 text-[7px] font-semibold text-white">→</span>
          </div>
        </div>
      </div>
    </>
  );
}

/* ── Check item ── */

function CheckItem({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex gap-3">
      <svg
        className="mt-0.5 h-5 w-5 flex-none text-brand-500"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2.5}
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
      </svg>
      <span className="text-sm leading-relaxed text-slate-700">{children}</span>
    </div>
  );
}
