"use client";

import { useState, useEffect, useCallback } from "react";

// Variantes pré-redimensionnées offline (Lanczos + accentuation) alignées sur deux
// largeurs affichées : 1152px (viewport ≥ xl) et 1024px, chacune déclinée en
// DPR 1 / 1.25 / 1.5 / 2 pour un ratio pixel 1:1 exact, au lieu d'un downscale
// navigateur flou du master 2400px.
const slides = [
  {
    base: "/hero-plateforme",
    alt: "Vernelys Plateforme Accueil",
    label: "Accueil",
  },
  {
    base: "/screen-agents",
    alt: "Agents documentaires",
    label: "Agents IA",
  },
  {
    base: "/screen-transcription",
    alt: "Transcription & CR de réunion",
    label: "Transcription",
  },
  {
    base: "/screen-pv-juridique",
    alt: "PV Juridique Gestionnaire",
    label: "PV Juridique",
  },
  {
    base: "/screen-profils",
    alt: "Profils & droits",
    label: "Profils & droits",
  },
];

const cardsBySlide: Record<number, { icon: string; iconClass: string; title: string; text: string; position: string; delay: string }[]> = {
  0: [
    { icon: "🧠", iconClass: "bg-brand-600 text-white", title: "IA souveraine", text: "Données hébergées en France, chiffrées en transit et au repos.", position: "-left-3 top-[12%] sm:-left-28", delay: "0.2s" },
    { icon: "🎨", iconClass: "bg-brand-100 text-brand-700", title: "Marque blanche", text: "Aux couleurs de votre entreprise pour favoriser l'adoption.", position: "-right-3 top-[15%] sm:-right-28", delay: "0.5s" },
    { icon: "💬", iconClass: "bg-brand-600 text-white", title: "Chat intelligent", text: "Posez vos questions en langage naturel, l'IA répond avec vos données.", position: "-left-3 bottom-[20%] sm:-left-28", delay: "0.8s" },
  ],
  1: [
    { icon: "🔒", iconClass: "bg-slate-800 text-white", title: "RGPD & conforme", text: "Cadre de confiance pour traiter des données confidentielles.", position: "-left-3 top-[12%] sm:-left-28", delay: "0.2s" },
    { icon: "📂", iconClass: "bg-brand-100 text-brand-700", title: "Agents par dossier", text: "Un agent dédié par client, alimenté par vos propres documents.", position: "-right-3 top-[15%] sm:-right-28", delay: "0.5s" },
    { icon: "📚", iconClass: "bg-brand-600 text-white", title: "Base documentaire", text: "Vos documents indexés et interrogeables par les agents IA.", position: "-left-3 bottom-[20%] sm:-left-28", delay: "0.8s" },
  ],
  2: [
    { icon: "🎤", iconClass: "bg-brand-600 text-white", title: "Transcription", text: "Vos réunions transcrites et résumées automatiquement.", position: "-left-3 top-[12%] sm:-left-28", delay: "0.2s" },
    { icon: "📝", iconClass: "bg-brand-100 text-brand-700", title: "Compte-rendu auto", text: "Un CR structuré généré à la fin de chaque réunion.", position: "-right-3 top-[15%] sm:-right-28", delay: "0.5s" },
    { icon: "📅", iconClass: "bg-slate-800 text-white", title: "Agenda intégré", text: "Planifiez et suivez vos réunions depuis la plateforme.", position: "-left-3 bottom-[20%] sm:-left-28", delay: "0.8s" },
  ],
  3: [
    { icon: "⚖️", iconClass: "bg-brand-600 text-white", title: "Résumé IA", text: "Synthèse automatique de chaque procès-verbal.", position: "-left-3 top-[12%] sm:-left-28", delay: "0.2s" },
    { icon: "📋", iconClass: "bg-brand-100 text-brand-700", title: "Suivi des PV", text: "Historique complet par exercice et par société.", position: "-right-3 top-[15%] sm:-right-28", delay: "0.5s" },
    { icon: "✅", iconClass: "bg-slate-800 text-white", title: "Validation", text: "Circuit de validation avec traçabilité complète.", position: "-left-3 bottom-[20%] sm:-left-28", delay: "0.8s" },
  ],
  4: [
    { icon: "👥", iconClass: "bg-brand-600 text-white", title: "Rôles & profils", text: "Définissez des profils avec des droits d'accès granulaires.", position: "-left-3 top-[12%] sm:-left-28", delay: "0.2s" },
    { icon: "🛡️", iconClass: "bg-slate-800 text-white", title: "Contrôle d'accès", text: "Chaque ressource est protégée selon le profil utilisateur.", position: "-right-3 top-[15%] sm:-right-28", delay: "0.5s" },
    { icon: "👤", iconClass: "bg-brand-100 text-brand-700", title: "Gestion d'équipe", text: "Ajoutez, importez et gérez vos collaborateurs en quelques clics.", position: "-left-3 bottom-[20%] sm:-left-28", delay: "0.8s" },
  ],
};

export default function PlateformeMockup() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => {
    setActive((i) => (i + 1) % slides.length);
  }, []);

  const prev = useCallback(() => {
    setActive((i) => (i - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(next, 4000);
    return () => clearInterval(id);
  }, [paused, next]);

  return (
    <div
      className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-100 to-brand-50 p-3 shadow-xl ring-1 ring-slate-900/5 sm:overflow-visible sm:p-8"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Cadre navigateur — contenu + 2px de bordure : 1024px (base) ou 1152px (xl),
          pour un affichage pixel-perfect des variantes pré-redimensionnées */}
      <div className="relative mx-auto max-w-[1026px] xl:max-w-[1154px]">
        <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-lg">
          <div className="flex items-center gap-2 border-b border-slate-200 bg-slate-50 px-3 py-2">
            <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
            <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
            <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
            <span className="mx-auto rounded-md bg-white px-3 py-0.5 text-[10px] text-slate-400 ring-1 ring-slate-200">
              vernelys.app
            </span>
          </div>

          {/* Slides */}
          <div className="relative">
            {slides.map((slide, i) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                key={slide.base}
                src={`${slide.base}-1024.png`}
                srcSet={`${slide.base}-1024.png 1024w, ${slide.base}-1152.png 1152w, ${slide.base}-1280.png 1280w, ${slide.base}-1440.png 1440w, ${slide.base}-1536.png 1536w, ${slide.base}-1728.png 1728w, ${slide.base}-2048.png 2048w, ${slide.base}-2304.png 2304w`}
                sizes="(min-width: 1280px) 1152px, (min-width: 1139px) 1024px, (min-width: 640px) calc(100vw - 7rem), calc(100vw - 5.5rem)"
                alt={slide.alt}
                className={
                  "w-full transition-opacity duration-700 " +
                  (i === active
                    ? "relative opacity-100"
                    : "absolute inset-0 opacity-0")
                }
              />
            ))}
          </div>
        </div>

        {/* Flèches — en dehors du cadre de l'image */}
        <button
          onClick={prev}
          className="absolute left-2 top-1/2 z-20 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-md transition hover:bg-slate-50 sm:-left-6 sm:-translate-x-1/2"
          aria-label="Précédent"
        >
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
          </svg>
        </button>
        <button
          onClick={next}
          className="absolute right-2 top-1/2 z-20 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-md transition hover:bg-slate-50 sm:-right-6 sm:translate-x-1/2"
          aria-label="Suivant"
        >
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
          </svg>
        </button>
      </div>

      {/* Indicateurs (dots + labels) */}
      <div className="mt-4 flex flex-wrap items-center justify-center gap-1.5 sm:gap-3">
        {slides.map((slide, i) => (
          <button
            key={slide.base}
            onClick={() => setActive(i)}
            className={
              "rounded-full px-2.5 py-1.5 text-[11px] font-medium transition sm:px-3 sm:py-1 " +
              (i === active
                ? "bg-brand-600 text-white shadow-sm"
                : "bg-white text-slate-500 ring-1 ring-slate-200 hover:bg-slate-50")
            }
          >
            {slide.label}
          </button>
        ))}
      </div>

      {/* Cartes flottantes — apparition successive par slide */}
      {(cardsBySlide[active] || []).map((card) => (
        <div
          key={`${active}-${card.title}`}
          className={`absolute ${card.position} z-20 hidden w-44 rounded-xl border border-slate-200 bg-white p-3 shadow-2xl sm:block sm:w-52`}
          style={{
            opacity: 0,
            animationName: "floatIn",
            animationDuration: "0.5s",
            animationTimingFunction: "ease-out",
            animationFillMode: "forwards",
            animationDelay: card.delay,
          }}
        >
          <div className="flex items-center gap-2">
            <span
              className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-lg text-[10px] font-bold ${card.iconClass}`}
            >
              {card.icon}
            </span>
            <span className="text-xs font-semibold text-slate-900">
              {card.title}
            </span>
          </div>
          <p className="mt-1.5 text-[10px] leading-snug text-slate-500">
            {card.text}
          </p>
        </div>
      ))}

      <style jsx>{`
        @keyframes floatIn {
          from {
            opacity: 0;
            transform: translateY(16px) scale(0.9);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
      `}</style>
    </div>
  );
}
