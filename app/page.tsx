import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import LiveShowcase from "@/components/LiveShowcase";
import MockupFrame from "@/components/MockupFrame";
import TrustRow from "@/components/TrustRow";
import FeatureSection from "@/components/FeatureSection";
import ComplementMockup from "@/components/ComplementMockup";
import PlateformeMockup from "@/components/PlateformeMockup";
import VeilleSection from "@/components/VeilleSection";
import CentralisationSection from "@/components/CentralisationSection";
import FinalCta from "@/components/FinalCta";

export default function HomePage() {
  return (
    <div>
      {/* Bandeau promo */}
      <section className="relative overflow-hidden bg-gradient-to-b from-white via-white to-brand-50 text-slate-900">
        {/* Aurore boréale — halos verts flous, dérive rapide */}
        <div className="pointer-events-none absolute inset-0 z-0">
          <div
            className="absolute -top-40 left-[-10%] h-[36rem] w-[36rem] rounded-full bg-brand-400/30 blur-[110px]"
            style={{ animation: "aurora-drift-a 3s ease-in-out infinite alternate" }}
          />
          <div
            className="absolute -top-56 left-[20%] h-[40rem] w-[40rem] rounded-full bg-emerald-300/25 blur-[130px]"
            style={{ animation: "aurora-drift-b 4s ease-in-out infinite alternate" }}
          />
          <div
            className="absolute -top-32 right-[-15%] h-[32rem] w-[32rem] rounded-full bg-brand-500/20 blur-[100px]"
            style={{ animation: "aurora-drift-c 2.5s ease-in-out infinite alternate" }}
          />
          <div
            className="absolute top-10 right-[10%] h-72 w-72 rounded-full bg-teal-200/30 blur-[90px]"
            style={{ animation: "aurora-drift-a 2s ease-in-out infinite alternate-reverse" }}
          />
        </div>

        <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-5 py-14 sm:gap-16 sm:px-6 sm:py-24 md:grid-cols-2 md:gap-20 md:py-32">
          {/* Colonne images — en arrière plan. Masquée sous md : sur téléphone,
              les deux captures empilées n'apportent rien et alourdissent le
              haut de page. */}
          <div
            className="relative order-2 z-0 hidden md:order-1 md:block md:h-[48rem]"
            style={{ perspective: "1200px" }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/hero-excel-sharp.png"
              srcSet="/hero-excel-1200.png 1200w, /hero-excel-sharp.png 1914w"
              sizes="(min-width: 768px) 44rem, (min-width: 640px) 36rem, 30rem"
              alt="Complément Excel Vernelys"
              className="absolute -left-4 top-0 w-[90%] max-w-[30rem] origin-top rounded-xl border border-slate-200 shadow-[0_20px_60px_rgba(0,96,57,0.18)] [transform:rotateY(8deg)_rotateX(2deg)] sm:max-w-[36rem] md:-left-40 md:-top-8 md:w-[44rem] md:max-w-none"
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/page-plateforme-sharp.png"
              srcSet="/page-plateforme-1200.png 1200w, /page-plateforme-sharp.png 2400w"
              sizes="(min-width: 768px) 44rem, (min-width: 640px) 36rem, 30rem"
              alt="Plateforme Vernelys"
              className="absolute bottom-0 left-4 w-[90%] max-w-[30rem] origin-bottom rounded-xl border border-slate-200 shadow-[0_25px_70px_rgba(0,96,57,0.22)] [transform:rotateY(-4deg)_rotateX(1deg)] sm:max-w-[36rem] md:bottom-24 md:-left-8 md:w-[44rem] md:max-w-none"
            />
          </div>

          {/* Colonne texte — au premier plan, décalé vers la droite */}
          <div className="relative z-10 order-1 md:order-2 md:-mt-32 md:pl-24 lg:pl-36">
            <h2 className="text-balance text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
              Tous vos outils
              <br />
              Un seul écran.
            </h2>
            <p className="mt-5 max-w-md text-pretty text-base leading-relaxed text-slate-600">
              Une solution à votre image et sécurisée pour faire gagner, à vous et
              vos collaborateurs, précision et efficacité. Découvrez notre
              plateforme et notre complément Excel et faites passer vos missions
              au niveau supérieur.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="rounded-full bg-brand-600 px-6 py-3 text-sm font-semibold text-white shadow-sm shadow-brand-600/20 transition hover:bg-brand-700"
              >
                Réserver une démo
              </Link>
              <Link
                href="#decouvrir"
                className="rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-800 transition hover:bg-slate-50"
              >
                En savoir plus
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Hero */}
      <section
        id="decouvrir"
        className="relative overflow-hidden scroll-mt-20 bg-gradient-to-b from-brand-50 via-white to-white"
      >
        <div className="mx-auto max-w-6xl px-5 pt-14 pb-12 text-center sm:px-6 sm:pt-28 sm:pb-16">
          <h1 className="mx-auto max-w-4xl text-balance text-4xl font-bold tracking-tight text-slate-900 sm:text-6xl lg:text-7xl">
            Deux solutions pour{" "}
            <span className="italic text-brand-600">les professionnels du chiffre</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-pretty text-base leading-relaxed text-slate-600 sm:mt-6 sm:text-lg">
            Une plateforme collaborative qui centralise vos outils métier et votre
            IA sécurisée, et un complément Excel pour la production comptable au
            quotidien. Conçues par et pour la profession.
          </p>
          <div className="mt-8 flex flex-col items-stretch gap-3 sm:mt-9 sm:flex-row sm:flex-wrap sm:items-center sm:justify-center sm:gap-4">
            <Link
              href="/plateforme"
              className="inline-flex w-full items-center justify-center rounded-md bg-brand-600 px-6 py-3.5 sm:w-auto sm:min-w-[17rem] text-sm font-semibold text-white shadow-lg shadow-brand-600/20 transition hover:bg-brand-700"
            >
              Découvrir la plateforme
            </Link>
            <Link
              href="/complement-excel"
              className="inline-flex w-full items-center justify-center rounded-md bg-brand-600 px-6 py-3.5 sm:w-auto sm:min-w-[17rem] text-sm font-semibold text-white shadow-lg shadow-brand-600/20 transition hover:bg-brand-700"
            >
              Découvrir le complément Excel
            </Link>
          </div>
          <div className="mt-8 sm:mt-10">
            <TrustRow />
          </div>

          <div className="group mx-auto mt-12 max-w-5xl sm:mt-16">
            <MockupFrame label="vernelys.app">
              <LiveShowcase
                src="/showcase/recap/index.html"
                label="Vernelys : la plateforme et le complément Excel"
                poster="/showcase/recap-poster.jpg"
              />
            </MockupFrame>
          </div>
        </div>
      </section>

      <CentralisationSection />

      <VeilleSection />

      {/* Section plateforme — illustration pleine largeur + texte en dessous */}
      <section className="mx-auto max-w-6xl px-5 py-14 sm:px-6 sm:py-20">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-brand-600">
            Plateforme
          </span>
          <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            Une plateforme collaborative et souveraine
          </h2>
        </div>

        {/* Déborde du conteneur en xl pour offrir 1152px d'affichage pixel-perfect au carrousel */}
        <div className="mt-10 sm:mt-12 xl:-mx-16">
          <PlateformeMockup />
        </div>

        <div className="mt-12 grid gap-8 sm:mt-14 sm:grid-cols-3 sm:gap-10">
          <div>
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white shadow-sm">
              <svg className="h-5 w-5 text-brand-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25a2.25 2.25 0 0 1-2.25-2.25v-2.25Z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-slate-900">
              Centralisez vos outils.
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              Réunissez dossiers, échéances et documents dans un espace unique.
              Chaque collaborateur retrouve ses outils et ses missions au
              même endroit, sans jongler entre les applications.
            </p>
          </div>
          <div>
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white shadow-sm">
              <svg className="h-5 w-5 text-brand-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-slate-900">
              Une IA sécurisée.
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              IA souveraine avec données hébergées en France : posez vos
              questions, transcrivez vos réunions et interrogez les agents
              basés sur vos données.
            </p>
          </div>
          <div>
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white shadow-sm">
              <svg className="h-5 w-5 text-brand-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.098 19.902a3.75 3.75 0 0 0 5.304 0l6.401-6.402M6.75 21A3.75 3.75 0 0 1 3 17.25V4.125C3 3.504 3.504 3 4.125 3h5.25c.621 0 1.125.504 1.125 1.125v4.072M6.75 21a3.75 3.75 0 0 0 3.75-3.75V8.197M6.75 21h13.125c.621 0 1.125-.504 1.125-1.125v-5.25c0-.621-.504-1.125-1.125-1.125h-4.072M10.5 8.197l2.88-2.88c.438-.439 1.15-.439 1.59 0l3.712 3.713c.44.44.44 1.152 0 1.59l-2.879 2.88M6.75 17.25h.008v.008H6.75v-.008Z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-slate-900">
              À vos couleurs.
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              La plateforme s&apos;affiche à votre image pour favoriser
              l&apos;adoption par vos équipes et projeter une image
              professionnelle et cohérente.
            </p>
          </div>
        </div>
      </section>

      {/* Section complément — illustration à gauche, texte à droite */}
      <FeatureSection
        eyebrow="Complément Excel"
        title="Un accompagnement dans toutes vos tâches sans quitter Excel"
        illustration={<ComplementMockup />}
        illustrationSide="left"
        items={[
          {
            title: "Extraction et ergonomie",
            lead: "Récupérez vos données PDF et travaillez dans un Excel optimisé.",
            description:
              "Extrayez textes, sommes et tableaux depuis vos PDF en un clic. Mises en forme, formules et raccourcis personnalisés vous font gagner du temps sans changer vos habitudes.",
          },
          {
            title: "Suivi collaboratif",
            lead: "Suivez les modifications de vos fichiers de travail en direct.",
            description:
              "Chaque action est tracée au niveau du collaborateur. La revue par les responsables est facilitée avec commentaires, validation ou refus. Votre travail d'équipe prend une autre dimension.",
          },
          {
            title: "Travaillez plus vite",
            lead: "Raccourcis personnalisés et assistant IA à portée de clavier.",
            description:
              "Un onglet dédié dans le ruban regroupe vos outils du quotidien, en français comme en anglais, pour une plus grande efficacité au quotidien.",
          },
        ]}
      />

      {/* Choix produit */}
      <section className="mx-auto max-w-6xl px-5 py-14 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Choisissez votre point d&apos;entrée
          </h2>
          <p className="mt-4 text-base text-slate-600 sm:text-lg">
            Nos deux solutions fonctionnent seules ou ensemble. À vous de choisir
            celle qui répond à votre besoin immédiat.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:mt-14 sm:gap-8 lg:grid-cols-2">
          <ProductCard
            eyebrow="Plateforme"
            title="Vernelys Plateforme"
            description="Une plateforme collaborative qui centralise vos outils métier et une IA sécurisée : assistant, transcription de réunions, agents documentaires et pilotage de votre application."
            highlights={[
              "IA souveraine, données hébergées en France",
              "Transcription de réunions et comptes-rendus",
              "Agents documentaires sur vos dossiers",
              "PV juridiques automatisés",
            ]}
            href="/plateforme"
            ctaLabel="En savoir plus"
          />
          <ProductCard
            eyebrow="Complément Excel"
            title="Vernelys pour Excel"
            description="Un onglet dédié dans le ruban Excel qui regroupe les outils utilisés au quotidien en entreprise : formules, extraction PDF, agent IA, raccourcis et assistant IA."
            highlights={[
              "Extraction de données depuis vos PDF",
              "Agent IA et outils de productivité",
              "Raccourcis clavier personnalisés",
              "Interface FR / EN",
            ]}
            href="/complement-excel"
            ctaLabel="En savoir plus"
          />
        </div>
      </section>

      {/* Section socle commun — light, illustrations orbitales, carte d'accent */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-6 sm:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-balance text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl md:text-5xl lg:text-[3.25rem] lg:leading-[1.1]">
              Sérieux, souverain,
              <br />
              pensé pour votre métier.
            </h2>
          </div>

          <div className="mt-10 grid gap-4 sm:mt-14 sm:gap-5 md:grid-cols-3">
            <SocleCard
              illustration={<RingsIllustration />}
              title="Conçu par la profession"
              description="Fondateurs et investisseurs issus de l'expertise comptable. Nous connaissons le métier, son jargon et ses contraintes."
            />
            <SocleCard
              illustration={<FanIllustration />}
              title="Souveraineté & RGPD"
              description="Données hébergées en France, chiffrées en transit et au repos. Un cadre de confiance pour traiter des données confidentielles."
            />
            <SocleCard
              illustration={<TorusIllustration />}
              title="Productivité & innovation"
              description="Des outils pensés pour automatiser les tâches répétitives et libérer du temps pour le conseil à forte valeur ajoutée."
              accent
            />
          </div>

          <div className="mt-12 flex justify-center">
            <Link
              href="/plateforme"
              className="inline-flex items-center gap-2 rounded-full bg-brand-600 px-6 py-3 text-sm font-semibold text-white shadow-sm shadow-brand-600/20 transition hover:bg-brand-700"
            >
              En savoir plus sur la plateforme
              <svg
                className="h-4 w-4"
                viewBox="0 0 20 20"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.75"
                aria-hidden="true"
              >
                <path
                  d="M4 10h12M11 5l5 5-5 5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      <FinalCta />
    </div>
  );
}

function SocleCard({
  illustration,
  title,
  description,
  accent = false,
}: {
  illustration: React.ReactNode;
  title: string;
  description: string;
  accent?: boolean;
}) {
  return (
    <div
      className={
        accent
          ? "rounded-3xl bg-brand-600 p-6 text-white shadow-lg shadow-brand-600/25 sm:p-8"
          : "rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md sm:p-8"
      }
    >
      <div className={accent ? "text-white/90" : "text-brand-600"}>
        {illustration}
      </div>
      <h3
        className={
          "mt-6 text-xl font-semibold sm:mt-8 sm:text-2xl " +
          (accent ? "text-white" : "text-slate-900")
        }
      >
        {title}
      </h3>
      <p
        className={
          "mt-4 text-sm leading-relaxed " +
          (accent ? "text-white/85" : "text-slate-600")
        }
      >
        {description}
      </p>
    </div>
  );
}

function RingsIllustration() {
  return (
    <svg viewBox="0 0 100 100" className="h-16 w-16" aria-hidden="true">
      {Array.from({ length: 18 }).map((_, i) => (
        <circle
          key={i}
          cx="50"
          cy="50"
          r={3 + i * 2.6}
          fill="none"
          stroke="currentColor"
          strokeWidth="0.6"
          opacity={1 - i * 0.03}
        />
      ))}
    </svg>
  );
}

function FanIllustration() {
  const lines = [];
  for (let i = 0; i < 72; i++) {
    const angle = (i * 5 * Math.PI) / 180;
    const r1 = 14;
    const r2 = 46;
    lines.push(
      <line
        key={i}
        x1={50 + r1 * Math.cos(angle)}
        y1={50 + r1 * Math.sin(angle)}
        x2={50 + r2 * Math.cos(angle)}
        y2={50 + r2 * Math.sin(angle)}
        stroke="currentColor"
        strokeWidth="0.55"
      />
    );
  }
  return (
    <svg viewBox="0 0 100 100" className="h-16 w-16" aria-hidden="true">
      {lines}
      <circle cx="50" cy="50" r="10" fill="none" stroke="currentColor" strokeWidth="1" />
    </svg>
  );
}

function TorusIllustration() {
  const lines = [];
  for (let i = 0; i < 96; i++) {
    const angle = (i * 3.75 * Math.PI) / 180;
    const cosA = Math.cos(angle);
    const sinA = Math.sin(angle);
    const rxOuter = 40;
    const ryOuter = 14;
    const rxInner = 22;
    const ryInner = 7.5;
    lines.push(
      <line
        key={i}
        x1={50 + rxInner * cosA}
        y1={52 + ryInner * sinA}
        x2={50 + rxOuter * cosA}
        y2={52 + ryOuter * sinA}
        stroke="currentColor"
        strokeWidth="0.5"
      />
    );
  }
  return (
    <svg viewBox="0 0 100 100" className="h-16 w-16" aria-hidden="true">
      {lines}
    </svg>
  );
}
