"use client";

import { useEffect, useRef, useState } from "react";

type ShowcaseVideo = {
  /** URL de la vidéo (mp4/webm). Optionnel — placeholder affiché sinon. */
  src?: string;
  /** URL d'une animation HTML embarquée en iframe (prioritaire sur src). */
  embed?: string;
  /** Image d'aperçu affichée avant lecture. */
  poster?: string;
  /** Titre léger affiché sous la vidéo. */
  caption: string;
};

/**
 * Vitrine « carrousel de vidéos » façon Jimini — panneau central prominent,
 * deux panneaux latéraux légèrement décalés en retrait, cinq vidéos au total
 * naviguables via flèches ou pastilles.
 */
export default function VideoShowcase({
  videos,
  eyebrow,
  title,
}: {
  videos?: ShowcaseVideo[];
  eyebrow?: string;
  title?: string;
}) {
  const items: ShowcaseVideo[] =
    videos ?? [
      { caption: "Extraction PDF" },
      { caption: "Onglet Outils Excel & audit des formules" },
      { caption: "Assistant IA" },
      { caption: "Aide Audit et Révision" },
      { caption: "Raccourcis clavier & branding cabinet" },
    ];
  const n = items.length;
  const [active, setActive] = useState(0);
  const prev = () => setActive((a) => (a - 1 + n) % n);
  const next = () => setActive((a) => (a + 1) % n);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50/60 to-white py-24">
      {(eyebrow || title) && (
        <div className="mx-auto max-w-2xl px-6 text-center">
          {eyebrow ? (
            <p className="text-xs font-semibold uppercase tracking-widest text-brand-600">
              {eyebrow}
            </p>
          ) : null}
          {title ? (
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              {title}
            </h2>
          ) : null}
        </div>
      )}

      {/* ── Carrousel desktop : pleine largeur, 3 cartes visibles ── */}
      <div className="relative mt-14 hidden lg:block">
        <div className="relative mx-auto h-[calc(50vw*9/16+80px)] max-h-[680px] min-h-[440px] w-full">
            {items.map((v, i) => {
              // delta signé dans [-⌊n/2⌋ ; ⌊n/2⌋] pour un placement symétrique
              const rawDelta = ((i - active + n) % n + n) % n;
              const delta = rawDelta > n / 2 ? rawDelta - n : rawDelta;

              const isCenter = delta === 0;
              const isSide = Math.abs(delta) === 1;

              // Toutes les cartes ont la même largeur, positionnées côte à côte
              // via `left` en % du conteneur (jointives, centre + 2 latéraux).
              let style: React.CSSProperties;

              if (isCenter) {
                // Centrée, légèrement agrandie pour la prominence.
                style = {
                  left: "50%",
                  transform: "translateX(-50%) scale(1.06)",
                  opacity: 1,
                  zIndex: 30,
                };
              } else if (isSide) {
                // Adjacent au centre : le bord intérieur touche celui du centre
                // (le centre à 25%..75%, latéraux à ±25% et 75%).
                const dir = delta > 0 ? 1 : -1;
                style = {
                  left: dir === -1 ? "-25%" : "75%",
                  transform: "scale(0.94)",
                  opacity: 0.85,
                  zIndex: 20,
                };
              } else {
                // Hors champ, plus loin, invisible.
                const dir = delta > 0 ? 1 : -1;
                style = {
                  left: dir === -1 ? "-80%" : "130%",
                  transform: "scale(0.85)",
                  opacity: 0,
                  zIndex: 10,
                  pointerEvents: "none",
                };
              }

              return (
                <div
                  key={i}
                  className="absolute top-6 w-[50%] transition-all duration-500 ease-out"
                  style={style}
                  aria-hidden={!isCenter && !isSide}
                >
                  {/* seule la carte centrale (active) fait tourner l'animation */}
                  <VideoCard video={v} prominent={isCenter} active={isCenter} />
                </div>
              );
            })}
          </div>

          {/* ── Flèches nav ── */}
          <button
            type="button"
            onClick={prev}
            aria-label="Vidéo précédente"
            className="absolute left-4 top-1/2 z-40 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white text-slate-700 shadow-lg ring-1 ring-slate-200 transition hover:bg-brand-50 hover:text-brand-700"
          >
            <svg viewBox="0 0 24 24" fill="none" strokeWidth={2} stroke="currentColor" className="h-5 w-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 6l-6 6 6 6" />
            </svg>
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Vidéo suivante"
            className="absolute right-4 top-1/2 z-40 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white text-slate-700 shadow-lg ring-1 ring-slate-200 transition hover:bg-brand-50 hover:text-brand-700"
          >
            <svg viewBox="0 0 24 24" fill="none" strokeWidth={2} stroke="currentColor" className="h-5 w-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 6l6 6-6 6" />
            </svg>
          </button>
        </div>

      {/* ── Pastilles ── */}
      <div className="mx-auto mt-10 hidden max-w-7xl justify-center gap-2 px-6 lg:flex">
        {items.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setActive(i)}
            aria-label={`Aller à la vidéo ${i + 1}`}
            aria-current={i === active}
            className={
              "h-2 rounded-full transition-all " +
              (i === active
                ? "w-8 bg-brand-600"
                : "w-2 bg-slate-300 hover:bg-slate-400")
            }
          />
        ))}
      </div>

      {/* ── Mobile / tablette : empilé simple ── */}
      <div className="mx-auto mt-12 grid max-w-7xl gap-8 px-6 lg:hidden sm:grid-cols-2">
        {items.map((v, i) => (
          <div
            key={i}
            className={
              i === items.length - 1 && items.length % 2 === 1
                ? "sm:col-span-2 sm:mx-auto sm:w-2/3"
                : ""
            }
          >
            {/* sur mobile, l'animation démarre quand la carte entre à l'écran */}
            <InViewCard video={v} />
          </div>
        ))}
      </div>
    </section>
  );
}

/** Carte mobile : n'active l'animation que lorsqu'elle est visible à l'écran. */
function InViewCard({ video }: { video: ShowcaseVideo }) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => setInView(e.isIntersecting && e.intersectionRatio >= 0.5),
      { threshold: [0, 0.5, 1] },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div ref={ref}>
      <VideoCard video={video} active={inView} />
    </div>
  );
}

function VideoCard({
  video,
  prominent = false,
  active = false,
}: {
  video: ShowcaseVideo;
  prominent?: boolean;
  /** Quand vrai, l'animation HTML tourne (iframe montée par-dessus le poster). */
  active?: boolean;
}) {
  const showEmbed = active && !!video.embed;
  return (
    <figure className="group">
      <div
        className={
          "relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 ring-1 ring-slate-900/5 " +
          (prominent
            ? "shadow-2xl shadow-slate-900/20"
            : "shadow-xl shadow-slate-900/10")
        }
      >
        {/* Base fixe : poster (ou vidéo mp4, ou placeholder) */}
        {video.poster ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={video.poster}
            alt=""
            className="aspect-video w-full object-cover"
            loading="lazy"
          />
        ) : video.src ? (
          <video
            className="aspect-video w-full object-cover"
            src={video.src}
            poster={video.poster}
            muted
            loop
            playsInline
            autoPlay
            preload="metadata"
          />
        ) : (
          <VideoMock />
        )}

        {/* Animation vivante : montée uniquement quand la carte est active */}
        {showEmbed && (
          <iframe
            key={video.embed}
            className="pointer-events-none absolute inset-0 h-full w-full border-0"
            src={video.embed}
            title={video.caption}
            tabIndex={-1}
          />
        )}
      </div>
      <figcaption className="mt-4 text-center text-sm font-medium text-slate-500">
        {video.caption}
      </figcaption>
    </figure>
  );
}

function VideoMock() {
  return (
    <div className="relative aspect-video w-full bg-[radial-gradient(circle_at_center,theme(colors.brand.50),theme(colors.slate.100))]">
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-600 text-white shadow-lg shadow-brand-600/30 transition group-hover:scale-105">
          <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="h-7 w-7">
            <path d="M6.3 2.84a1 1 0 0 0-1.55.83v12.66a1 1 0 0 0 1.55.83l9.52-6.33a1 1 0 0 0 0-1.66L6.3 2.84Z" />
          </svg>
        </span>
      </div>
    </div>
  );
}
