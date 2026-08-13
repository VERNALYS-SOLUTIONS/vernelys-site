import AiRaceOrbit from "@/components/AiRaceOrbit";

/**
 * Section « Veille technologique » — course IA animée + 3 arguments.
 * Réutilisée sur la home et sur la page Plateforme.
 */
export default function VeilleSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white">
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(circle at 70% 30%, rgba(0,120,70,0.07) 0%, transparent 50%), radial-gradient(circle at 30% 70%, rgba(0,96,57,0.05) 0%, transparent 50%)",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-5 py-16 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
            Toujours à la pointe,<br />pas de changement d&apos;infrastructure
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600 sm:mt-5 sm:text-lg">
            Le marché de l&apos;IA évolue à une vitesse fulgurante. Nouveaux modèles,
            nouveaux acteurs, nouvelles capacités : nous surveillons tout pour vous.
          </p>
        </div>

        <div className="mt-12 grid items-center gap-10 sm:mt-16 sm:gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="order-2 lg:order-1">
            <AiRaceOrbit />
          </div>

          <div className="order-1 space-y-6 sm:space-y-8 lg:order-2">
            <div className="flex gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-50">
                <svg className="h-5 w-5 text-brand-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900">Mises à jour transparentes</h3>
                <p className="mt-1 text-sm leading-relaxed text-slate-600">
                  Quand un modèle plus performant apparaît, nous l&apos;intégrons.
                  Vous bénéficiez des avancées sans même vous en rendre compte.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-50">
                <svg className="h-5 w-5 text-brand-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900">Sécurité garantie</h3>
                <p className="mt-1 text-sm leading-relaxed text-slate-600">
                  Chaque nouveau composant est audité et validé avant déploiement.
                  Performance et conformité ne sont jamais sacrifiées l&apos;une pour l&apos;autre.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-50">
                <svg className="h-5 w-5 text-brand-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900">Zéro surcoût</h3>
                <p className="mt-1 text-sm leading-relaxed text-slate-600">
                  Pas de modules complémentaires, pas de frais cachés. L&apos;accès au
                  meilleur de la technologie est inclus dans votre abonnement,
                  aujourd&apos;hui et demain.
                </p>
              </div>
            </div>

            <p className="text-sm leading-relaxed text-slate-500">
              Dans un marché où les leaders changent chaque mois, nous faisons le tri
              pour vous. Vous restez concentré sur vos missions, nous nous occupons
              de l&apos;infrastructure.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
