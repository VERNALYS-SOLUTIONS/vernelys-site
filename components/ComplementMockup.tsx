/**
 * Maquette d'illustration du complément Excel Vernelys : ruban « Outils Excel -
 * Vernelys » (icônes réelles de l'add-in), grille de calcul et panneau
 * « Aperçu des PDF » ancré à droite avec ses actions Texte / Somme / Tableau.
 * Les icônes proviennent des ressources de l'add-in (public/ribbon).
 */
export default function ComplementMockup() {
  const groups = [
    {
      label: "Documents",
      tools: [
        { label: "Texte", icon: "/ribbon/texte.png" },
        { label: "Somme", icon: "/ribbon/somme.png" },
        { label: "Table", icon: "/ribbon/table.png" },
        { label: "Suppression", icon: "/ribbon/suppression.png" },
      ],
    },
    {
      label: "Raccourcis",
      tools: [
        { label: "Gestionnaire", icon: "/ribbon/gestionnaire-raccourcis.png" },
        { label: "Catalogue", icon: "/ribbon/catalogue-raccourcis.png" },
      ],
    },
    {
      label: "Audit comptable",
      tools: [{ label: "Aide Audit", icon: "/ribbon/aide-audit.png" }],
    },
    {
      label: "IA (beta)",
      tools: [{ label: "IA", icon: "/ribbon/ia.png" }],
    },
  ];

  const actions = [
    { label: "Texte", icon: "/ribbon/texte.png", active: true },
    { label: "Somme", icon: "/ribbon/somme.png" },
    { label: "Tableau", icon: "/ribbon/table.png" },
  ];

  return (
    <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-brand-100 to-brand-50 p-3 shadow-xl ring-1 ring-slate-900/5 sm:p-6">
      <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-lg">
        {/* Onglets du ruban */}
        <div className="flex items-center gap-3 border-b border-slate-200 bg-slate-50 px-4 pt-2 text-[10px] text-slate-400">
          <span>Accueil</span>
          <span className="hidden sm:inline">Insertion</span>
          <span className="hidden sm:inline">Formules</span>
          <span className="relative pb-1.5 font-semibold text-brand-700">
            Outils Excel - Vernelys
            <span className="absolute -bottom-px left-0 h-0.5 w-full rounded bg-brand-600" />
          </span>
        </div>

        {/* Barre d'outils Vernelys, groupée comme le vrai ruban (une seule ligne) */}
        <div className="flex flex-wrap items-stretch gap-y-1 border-b border-slate-100 bg-white px-1.5 py-1.5 sm:flex-nowrap sm:gap-y-0 sm:overflow-hidden">
          {groups.map((g) => (
            <div
              key={g.label}
              className="flex min-w-0 shrink flex-col border-r border-slate-100 px-1.5 last:border-r-0"
            >
              <div className="flex flex-1 items-start justify-center gap-0.5">
                {g.tools.map((t) => (
                  <div
                    key={t.label}
                    className="flex w-10 flex-col items-center gap-1 rounded-md py-1 sm:w-9"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={t.icon}
                      alt=""
                      width={16}
                      height={16}
                      className="h-4 w-4 object-contain"
                    />
                    <span className="w-full truncate text-center text-[8px] font-medium leading-tight text-slate-600 sm:text-[7px]">
                      {t.label}
                    </span>
                  </div>
                ))}
              </div>
              <span className="mt-1 truncate text-center text-[8px] uppercase tracking-wide text-slate-400 sm:text-[7px]">
                {g.label}
              </span>
            </div>
          ))}
        </div>

        {/* Corps : grille + panneau PDF */}
        <div className="flex">
          {/* Grille de calcul */}
          <div className="flex-1 p-3">
            <div className="space-y-1.5">
              {/* En-têtes de colonnes */}
              <div className="flex gap-1.5">
                <span className="h-3 w-5 rounded-sm bg-slate-200" />
                {[0, 1, 2, 3].map((c) => (
                  <span key={c} className="h-3 flex-1 rounded-sm bg-slate-200" />
                ))}
              </div>
              {[0, 1, 2, 3, 4, 5, 6].map((r) => (
                <div key={r} className="flex gap-1.5">
                  <span className="h-3 w-5 rounded-sm bg-slate-100" />
                  {[0, 1, 2, 3].map((c) => (
                    <span
                      key={c}
                      className={
                        "h-3 flex-1 rounded-sm " +
                        (c === 3 && r % 2 === 0
                          ? "bg-brand-100"
                          : r === 0
                            ? "bg-brand-50"
                            : "bg-slate-100")
                      }
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Panneau « Aperçu des PDF » */}
          <div className="w-36 shrink-0 border-l border-slate-200 bg-slate-50/70 p-2.5 sm:w-48 sm:p-3">
            <div className="text-[10px] font-semibold text-slate-700">
              Aperçu des PDF
            </div>
            <div className="mt-1.5 truncate rounded bg-white px-1.5 py-1 text-[8px] text-slate-400 ring-1 ring-slate-200">
              Etat de rapprochement bancaire.pdf
            </div>
            {/* Aperçu du document */}
            <div className="mt-2 space-y-1 rounded bg-white p-2 shadow-sm ring-1 ring-slate-200">
              <span className="mx-auto block h-1 w-2/3 rounded-full bg-slate-300" />
              {[0, 1, 2, 3, 4, 5].map((i) => (
                <span key={i} className="block h-1 w-full rounded-full bg-slate-100" />
              ))}
            </div>
            {/* Actions d'extraction */}
            <div className="mt-2 grid grid-cols-3 gap-1">
              {actions.map((a) => (
                <div
                  key={a.label}
                  className={
                    "flex flex-col items-center gap-1 rounded border py-1.5 " +
                    (a.active
                      ? "border-blue-300 bg-blue-50"
                      : "border-slate-200 bg-white")
                  }
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={a.icon}
                    alt=""
                    width={16}
                    height={16}
                    className="h-4 w-4 object-contain"
                  />
                  <span className="text-[8px] leading-none text-slate-600">
                    {a.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
