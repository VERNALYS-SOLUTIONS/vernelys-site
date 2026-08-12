"use client";

/**
 * Orbite d'intégrations — logo Vernelys au centre, connecteurs autour.
 * L'anneau tourne lentement en continu ; chaque logo contre-tourne pour
 * rester droit. Utilisé sur la page Plateforme.
 */

type Integration = {
  name: string;
  angle: number; // degrés, 0 = à droite, 90 = en bas
  logo: string;
};

const INTEGRATIONS: Integration[] = [
  { name: "Sharepoint",   angle: -90, logo: "/logos/sharepoint.png" },   // haut
  { name: "Google Drive", angle: -30, logo: "/logos/googledrive.webp" }, // haut-droit
  { name: "Teams",        angle: 30,  logo: "/logos/teams.webp" },       // bas-droit
  { name: "Excel",        angle: 90,  logo: "/logos/excel.png" },        // bas
  { name: "Meet",         angle: 150, logo: "/logos/meet.webp" },        // bas-gauche
  { name: "OneDrive",     angle: 210, logo: "/logos/onedrive.webp" },    // haut-gauche
];

export default function IntegrationOrbit() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[26rem]">
      {/* Orbites pointillées */}
      <div className="absolute inset-[5%] rounded-full border-2 border-dashed border-slate-200/80" />
      <div className="absolute inset-[24%] rounded-full border-2 border-dashed border-slate-200/60" />

      {/* Halo central subtil */}
      <div className="absolute inset-0 m-auto h-40 w-40 rounded-full bg-brand-500/10 blur-3xl" />

      {/* Centre — logo Vernelys */}
      <div className="absolute inset-0 z-10 m-auto flex h-24 w-24 items-center justify-center rounded-3xl bg-brand-600 shadow-xl shadow-brand-600/30 sm:h-28 sm:w-28">
        <svg viewBox="0 0 64 64" className="h-14 w-14 sm:h-16 sm:w-16" aria-hidden="true">
          <path
            d="M18 18 L32 46 L46 18"
            fill="none"
            stroke="#ffffff"
            strokeWidth="6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {/* Anneau rotatif — tourne en continu autour du centre */}
      <div
        className="absolute inset-[5%]"
        style={{ animation: "orbit-spin 45s linear infinite" }}
      >
        {INTEGRATIONS.map((it) => {
          const rad = (it.angle * Math.PI) / 180;
          const left = 50 + 50 * Math.cos(rad);
          const top = 50 + 50 * Math.sin(rad);
          return (
            <div
              key={it.name}
              className="absolute -translate-x-1/2 -translate-y-1/2"
              style={{ left: `${left}%`, top: `${top}%` }}
            >
              {/* Contre-rotation — garde le logo droit */}
              <div style={{ animation: "orbit-spin 45s linear infinite reverse" }}>
                <div
                  className="flex h-12 w-12 items-center justify-center rounded-2xl border border-slate-100 bg-white p-2 shadow-lg sm:h-14 sm:w-14"
                  title={it.name}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={it.logo} alt={it.name} className="h-full w-full object-contain" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
