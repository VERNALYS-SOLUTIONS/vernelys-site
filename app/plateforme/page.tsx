import Link from "next/link";
import MockupFrame from "@/components/MockupFrame";
import LiveShowcase from "@/components/LiveShowcase";
import VeilleSection from "@/components/VeilleSection";
import IntegrationOrbit from "@/components/IntegrationOrbit";
import FinalCta from "@/components/FinalCta";

export const metadata = {
  title: "Plateforme",
  description:
    "Vernelys Plateforme : une plateforme collaborative pour les cabinets d'expertise comptable. IA souveraine hébergée en France et traitée en Europe, veille technologique permanente, centralisation des outils, modules assistant, transcription, agents documentaires, production juridique, administration et catalogue.",
};

export default function PlateformePage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-brand-50 via-white to-white">
        <div className="mx-auto max-w-6xl px-6 pt-20 pb-16 text-center sm:pt-28">
          <h1 className="mx-auto max-w-3xl text-balance text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            On pourrait vous en parler.
            <br />
            <span className="italic text-brand-600">On préfère vous présenter.</span>
          </h1>

          <div className="group mx-auto mt-12 max-w-5xl">
            <MockupFrame label="Vernelys Plateforme">
              <LiveShowcase />
            </MockupFrame>
          </div>
        </div>
      </section>

      {/* Personnalisation & connectivité */}
      <section className="relative overflow-hidden bg-white">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-24 lg:grid-cols-2 lg:gap-20">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-brand-600">
              Personnalisation & connectivité
            </span>
            <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              Votre cabinet, votre expertise, votre IA.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-slate-600">
              Nous connectons notre technologie à votre base de données
              documentaire afin de créer une IA spécialement entraînée pour
              votre cabinet. Cette couche intelligente ne profite qu&apos;à
              votre cabinet et n&apos;est jamais partagée.
            </p>

            <p className="mt-8 text-sm font-medium text-slate-500">
              Bases de données intégrées nativement :
            </p>
            <div className="mt-3 flex flex-wrap gap-3">
              <IntegrationBadge name="Sharepoint" logo="/logos/sharepoint.png" />
              <IntegrationBadge name="OneDrive" logo="/logos/onedrive.webp" />
              <IntegrationBadge name="Google Drive" logo="/logos/googledrive.webp" />
              <IntegrationBadge name="Excel" logo="/logos/excel.png" />
            </div>
          </div>

          <div className="order-first lg:order-last">
            <IntegrationOrbit />
          </div>
        </div>
      </section>

      {/* Veille technologique */}
      <VeilleSection />

      {/* Modules — une section par outil */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-brand-600">
            Les modules
          </span>
          <h2 className="mt-3 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Cinq outils qui parlent la même langue
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-600">
            Chaque module fonctionne seul, mais leur vraie force est de partager
            le même socle : mêmes dossiers, même sécurité, même contrôle.
          </p>
        </div>

        <div className="mt-20 space-y-24">
          <ModuleFeature
            index="01"
            eyebrow="La barre de saisie"
            title="Toutes les IA, une seule interface"
            description="Posez votre question en langage naturel, choisissez le modèle IA le plus adapté et activez la recherche web quand vous en avez besoin : Vernelys répond avec ses sources. Tout part d'ici : vos dossiers, vos agents et vos prompts sont réunis dans une seule interface."
            points={[
              "Tous les éditeurs IA du marché disponibles",
              "Question en langage naturel, réponse sourcée",
              "Recherche web activable à la demande",
              "Prompts du cabinet insérés avec la touche /",
            ]}
            demo="/showcase/V4/vernalys-partie1-avec-soustitres.html"
            poster="/showcase/poster-V4.jpg"
          />
          <ModuleFeature
            index="02"
            eyebrow="Agents métier"
            title="Mentionnez un agent"
            description="La mention @agent oriente la question vers le bon agent métier. Vernelys peut aussi suggérer lui-même le routage. Chaque agent est entraîné sur vos propres bases de connaissances, pour des réponses sourcées et fiables."
            points={[
              "Mention @agent pour cibler le bon expert métier",
              "Suggestion de routage automatique",
              "Agents entraînés sur vos propres bases de connaissances",
              "Réponse sourcée, document d'origine consultable",
            ]}
            reverse
            demo="/showcase/V1/index.html"
            poster="/showcase/poster-V1.jpg"
          />
          <ModuleFeature
            index="03"
            eyebrow="Applications & agents"
            title="Une gestion de vos agents documentaires facilitée"
            description="Depuis la bibliothèque « Applications », créez et gérez vos agents documentaires : à quelle base de connaissances chacun est rattaché, quel périmètre client ou thématique il couvre, qui peut l'utiliser. Chaque agent reste cloisonné sur son propre socle de connaissances."
            points={[
              "Création et configuration des agents en quelques clics",
              "Un socle de connaissances propre à chaque agent",
              "Périmètre par client, dossier ou thématique",
              "Droits d'accès gérés par agent",
            ]}
            demo="/showcase/V6/vernalys-applications-agents-avec-soustitres.html"
            poster="/showcase/poster-V6.jpg"
          />
          <ModuleFeature
            index="04"
            eyebrow="Transcription & comptes rendus"
            title="De la réunion au compte rendu, sans ressaisie"
            description="Enregistrez en présentiel, collez un lien Teams, Meet ou Zoom, ou importez un MP3. Vernelys transcrit et transforme la réunion en compte rendu structuré, rattaché au bon dossier client et soumis à validation. Comptes rendus et tâches sont ensuite partageables avec le reste de l'équipe."
            points={[
              "Présentiel, visioconférence ou import de fichier",
              "Comptes rendus structurés, prêts à valider",
              "Partage des comptes rendus et des tâches avec l'équipe",
              "Rattachement automatique au dossier client",
            ]}
            reverse
            demo="/showcase/V2/index-rapide.html"
            poster="/showcase/poster-V2.jpg"
          />
          <ModuleFeature
            index="05"
            eyebrow="Gestionnaire PV juridique"
            title="Vos assemblées extraites et classées automatiquement"
            description="Déposez vos procès-verbaux : Vernelys en extrait les décisions et produit un résumé synthétique par société et par exercice. Chaque élément du résumé renvoie à sa page source dans le PV d'origine."
            points={[
              "Extraction des décisions depuis vos PV",
              "Classement par société et par exercice",
              "Résumé affiché face au document source",
              "Circuit de validation et score de confiance",
            ]}
            demo="/showcase/V3/vernalys-pv-juridique.html"
            poster="/showcase/poster-V3.jpg"
          />
        </div>
      </section>

      {/* Souveraineté numérique */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="max-w-xl">
            <span className="text-xs font-semibold uppercase tracking-widest text-slate-400">
              Souveraineté numérique
            </span>
            <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              Une IA sécurisée,
              <br />
              pensée pour votre déontologie.
            </h2>
          </div>

          <div className="mt-16">
            <div className="grid grid-cols-1 gap-y-10 border-b border-slate-200 pb-10 sm:grid-cols-3 sm:gap-x-10 sm:divide-x sm:divide-slate-200 sm:border-b-0 sm:pb-0">
              <SecurityItem
                icon={
                  <svg className="h-9 w-9 text-slate-400" fill="none" viewBox="0 0 24 24" strokeWidth={1.25} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
                  </svg>
                }
                title="Données stockées en France"
                description="Vos données sont hébergées sur nos serveurs à Paris. Aucune fuite hors du territoire, aucune sous-traitance non maîtrisée."
              />
              <SecurityItem
                icon={
                  <svg className="h-9 w-9 text-slate-400" fill="none" viewBox="0 0 24 24" strokeWidth={1.25} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
                  </svg>
                }
                title="Modèles opérés en Europe"
                description="Les modèles d'IA que nous mobilisons tournent dans des infrastructures européennes. 100 % conforme au RGPD, sans transfert hors UE."
              />
              <SecurityItem
                icon={
                  <svg className="h-9 w-9 text-slate-400" fill="none" viewBox="0 0 24 24" strokeWidth={1.25} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                  </svg>
                }
                title="Secret professionnel préservé"
                description="Mode web désactivé par défaut, cloisonnement strict par cabinet et par dossier. Les données confidentielles restent confidentielles."
              />
            </div>
            <div className="mt-10 grid grid-cols-1 gap-y-10 border-t border-slate-200 pt-10 sm:grid-cols-3 sm:gap-x-10 sm:divide-x sm:divide-slate-200">
              <SecurityItem
                icon={
                  <svg className="h-9 w-9 text-slate-400" fill="none" viewBox="0 0 24 24" strokeWidth={1.25} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
                  </svg>
                }
                title="Chiffrement de bout en bout"
                description="Requêtes chiffrées en transit et au repos. Personne, pas même nous, n'accède à vos échanges avec l'IA."
              />
              <SecurityItem
                icon={
                  <svg className="h-9 w-9 text-slate-400" fill="none" viewBox="0 0 24 24" strokeWidth={1.25} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z" />
                  </svg>
                }
                title="Respect de la déontologie"
                description="Conçue avec des experts-comptables pour respecter les exigences du Conseil de l'ordre : traçabilité, confidentialité, séparation des dossiers."
              />
              <SecurityItem
                icon={
                  <svg className="h-9 w-9 text-slate-400" fill="none" viewBox="0 0 24 24" strokeWidth={1.25} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18a3.75 3.75 0 0 0 1.332-7.257 3 3 0 0 0-3.758-3.848 5.25 5.25 0 0 0-10.233 2.33A4.502 4.502 0 0 0 2.25 15Z" />
                  </svg>
                }
                title="Aucune donnée pour l'entraînement"
                description="Contrats stricts avec nos fournisseurs de modèles : vos données ne servent jamais à entraîner un modèle tiers."
              />
            </div>
          </div>
        </div>
      </section>

      <FinalCta prompt="Je veux voir la plateforme en conditions réelles" />
    </div>
  );
}

function IntegrationBadge({ name, logo }: { name: string; logo: string }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3.5 py-2 text-sm font-semibold text-slate-800 shadow-sm">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={logo} alt="" className="h-5 w-5 object-contain" aria-hidden="true" />
      {name}
    </span>
  );
}

function SecurityItem({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="sm:px-8 sm:first:pl-0 sm:last:pr-0">
      {icon}
      <h3 className="mt-5 text-lg font-semibold text-slate-900">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-slate-600">
        {description}
      </p>
    </div>
  );
}

function ModuleFeature({
  index,
  eyebrow,
  title,
  description,
  points,
  reverse = false,
  demo,
  poster,
}: {
  index: string;
  eyebrow: string;
  title: string;
  description: string;
  points: string[];
  reverse?: boolean;
  demo: string;
  poster: string;
}) {
  return (
    <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
      <div className={reverse ? "lg:order-2" : ""}>
        <div className="flex items-center gap-3">
          <span className="font-mono text-sm font-bold text-brand-600">
            {index}
          </span>
          <span className="h-px flex-1 bg-brand-100" />
          <span className="text-xs font-semibold uppercase tracking-widest text-brand-600">
            {eyebrow}
          </span>
        </div>
        <h3 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          {title}
        </h3>
        <p className="mt-4 text-lg leading-relaxed text-slate-600">
          {description}
        </p>
        <ul className="mt-6 space-y-3 text-sm text-slate-700">
          {points.map((point) => (
            <li key={point} className="flex gap-3">
              <span
                aria-hidden="true"
                className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-brand-50 text-xs font-bold text-brand-600"
              >
                ✓
              </span>
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className={reverse ? "lg:order-1" : ""}>
        <MockupFrame label={eyebrow}>
          <LiveShowcase src={demo} label={title} poster={poster} />
        </MockupFrame>
      </div>
    </div>
  );
}
