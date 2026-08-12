/**
 * Vitrine de l'aspect collaboratif — mockup de classeur partagé (avatars
 * cabinet + client, annotations ancrées) + fil d'activité, puis trois points
 * forts. Même langage visuel que FeatureTabs / VideoShowcase.
 */
export default function CollaborationShowcase() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-brand-50/30 to-white py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-brand-600">
            Collaboration
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Une collaboration facilitée, jusqu&apos;à vos clients
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600">
            Partagez le classeur avec votre client, centralisez ses retours
            cellule par cellule et gardez un historique clair des échanges
            pour accélérer la revue de vos dossiers.
          </p>
        </div>

        {/* ── Mockup classeur partagé ── */}
        <div className="mt-14 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl shadow-slate-900/5">
          <div className="grid lg:grid-cols-3">
            {/* Feuille de calcul */}
            <div className="border-b border-slate-100 lg:col-span-2 lg:border-b-0 lg:border-r">
              <div className="flex items-center gap-1.5 border-b border-slate-100 bg-slate-50 px-4 py-3">
                <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
                <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
                <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
                <span className="ml-2 truncate text-xs font-medium text-slate-400">
                  Bilan_2026.xlsx : classeur partagé
                </span>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-500">
                    Cabinet &amp; client sur le même dossier
                  </span>
                  <div className="flex items-center -space-x-2">
                    <Avatar initials="MD" color="bg-brand-600" />
                    <Avatar initials="JL" color="bg-amber-500" />
                    <Avatar initials="AS" color="bg-sky-500" />
                    <Avatar initials="CL" color="bg-teal-600" />
                  </div>
                </div>

                {/* Grille de cellules avec annotations cabinet / client */}
                <div className="mt-6 grid grid-cols-6 gap-1.5">
                  {Array.from({ length: 30 }).map((_, i) => {
                    if (i === 8) {
                      return (
                        <div key={i} className="relative">
                          <span className="absolute -top-5 left-0 whitespace-nowrap rounded-t-md bg-brand-600 px-1.5 py-0.5 text-[9px] font-semibold text-white">
                            À valider
                          </span>
                          <span className="block h-6 rounded-sm bg-brand-50 ring-2 ring-brand-500" />
                        </div>
                      );
                    }
                    if (i === 21) {
                      return (
                        <div key={i} className="relative">
                          <span className="absolute -top-5 left-0 whitespace-nowrap rounded-t-md bg-teal-600 px-1.5 py-0.5 text-[9px] font-semibold text-white">
                            Client
                          </span>
                          <span className="block h-6 rounded-sm bg-teal-50 ring-2 ring-teal-500" />
                        </div>
                      );
                    }
                    return (
                      <span
                        key={i}
                        className={
                          "block h-6 rounded-sm " +
                          (i % 7 === 0 ? "bg-slate-100" : "bg-slate-50")
                        }
                      />
                    );
                  })}
                </div>

                {/* Commentaire ancré à une cellule */}
                <div className="mt-7 flex items-start gap-3 rounded-xl border border-slate-100 bg-slate-50 p-3.5">
                  <Avatar initials="AS" color="bg-sky-500" small />
                  <div>
                    <p className="text-xs font-semibold text-slate-700">
                      Alyssa{" "}
                      <span className="font-normal text-slate-400">
                        · cellule C12
                      </span>
                    </p>
                    <p className="mt-1 text-xs leading-relaxed text-slate-600">
                      Peux-tu vérifier ce total avant l&apos;envoi au client ?
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Fil d'activité */}
            <div className="bg-slate-50/60 p-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-slate-400">
                Activité récente
              </p>
              <ul className="mt-4 space-y-4">
                <ActivityItem
                  color="bg-brand-600"
                  text="Marc a modifié la cellule C12"
                  time="aujourd'hui, 10:42"
                />
                <ActivityItem
                  color="bg-teal-600"
                  text="Le client a laissé un commentaire"
                  time="aujourd'hui, 09:15"
                />
                <ActivityItem
                  color="bg-sky-500"
                  text="Alyssa a validé la feuille « TVA »"
                  time="hier, 18:20"
                />
                <ActivityItem
                  color="bg-slate-400"
                  text="Classeur partagé avec le client"
                  time="hier, 14:05"
                />
              </ul>
            </div>
          </div>
        </div>

        {/* ── Trois points forts ── */}
        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          <HighlightPoint
            icon={<UsersIcon />}
            title="Collaboration client boostée"
            description="Partagez le classeur avec votre client et centralisez ses retours directement dans Excel, sans échange de fichiers par e-mail."
          />
          <HighlightPoint
            icon={<CommentIcon />}
            title="Commentaires par cellule"
            description="Chacun annote directement là où se trouve la donnée, pour une revue plus rapide et sans ambiguïté."
          />
          <HighlightPoint
            icon={<HistoryIcon />}
            title="Revue du travail facilitée"
            description="Historique des modifications et validations : retrouvez en un clin d'œil qui a traité quoi, et à quel moment."
          />
        </div>
      </div>
    </section>
  );
}

/* ── Sous-composants ── */

function Avatar({
  initials,
  color,
  small = false,
}: {
  initials: string;
  color: string;
  small?: boolean;
}) {
  return (
    <span
      className={
        "flex items-center justify-center rounded-full font-semibold text-white ring-2 ring-white " +
        color +
        (small ? " h-7 w-7 text-[10px]" : " h-8 w-8 text-[11px]")
      }
    >
      {initials}
    </span>
  );
}

function ActivityItem({
  color,
  text,
  time,
}: {
  color: string;
  text: string;
  time: string;
}) {
  return (
    <li className="flex gap-2.5">
      <span className={"mt-1.5 h-2 w-2 flex-none rounded-full " + color} />
      <div>
        <p className="text-xs leading-relaxed text-slate-700">{text}</p>
        <p className="mt-0.5 text-[11px] text-slate-400">{time}</p>
      </div>
    </li>
  );
}

function HighlightPoint({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-50 text-brand-600">
        {icon}
      </span>
      <h3 className="mt-4 text-base font-semibold text-slate-900">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-slate-600">
        {description}
      </p>
    </div>
  );
}

function UsersIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth={2} stroke="currentColor" className="h-5 w-5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.5 19.5c.7-3 3-4.5 5.5-4.5s4.8 1.5 5.5 4.5" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M16 5.5a2.5 2.5 0 0 1 0 5" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M21.5 18.5c-.5-2.2-2-3.6-4-4" />
    </svg>
  );
}

function CommentIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth={2} stroke="currentColor" className="h-5 w-5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 5.5A2.5 2.5 0 0 1 6.5 3h11A2.5 2.5 0 0 1 20 5.5v8A2.5 2.5 0 0 1 17.5 16H10l-4.5 4v-4H6.5A2.5 2.5 0 0 1 4 13.5v-8Z" />
    </svg>
  );
}

function HistoryIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth={2} stroke="currentColor" className="h-5 w-5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h5" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.6 15a8 8 0 1 0 1.5-8.5L4 9" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 2" />
    </svg>
  );
}
