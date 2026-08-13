type MockupFrameProps = {
  /** Libellé affiché dans la barre d'adresse factice. */
  label?: string;
  children: React.ReactNode;
};

/**
 * Cadre type fenêtre applicative (chrome + barre d'adresse) qui encadre
 * une capture produit ou un espace vidéo, pour un rendu « screenshot ».
 */
export default function MockupFrame({ label, children }: MockupFrameProps) {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl shadow-slate-900/10 ring-1 ring-slate-900/5">
      <div className="flex items-center gap-2 border-b border-slate-200 bg-slate-50 px-3 py-2.5 sm:px-4 sm:py-3">
        <span className="h-3 w-3 rounded-full bg-slate-300" />
        <span className="h-3 w-3 rounded-full bg-slate-300" />
        <span className="h-3 w-3 rounded-full bg-slate-300" />
        {label ? (
          <span className="mx-auto rounded-md bg-white px-3 py-1 text-xs text-slate-400 ring-1 ring-slate-200">
            {label}
          </span>
        ) : null}
      </div>
      <div className="bg-white">{children}</div>
    </div>
  );
}
