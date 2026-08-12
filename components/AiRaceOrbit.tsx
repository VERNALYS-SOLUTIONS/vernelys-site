"use client";

/**
 * Course IA — une pastille par ligne.
 * Les rails pointillés défilent vers l'arrière (droite → gauche) pour donner
 * l'impression que tout le peloton avance. Chaque pastille oscille entre deux
 * positions de sa ligne (durées/amplitudes différentes) : les unes doublent
 * les autres puis se font redoubler, sans jamais atteindre le bout.
 */
const RUNNERS = [
  { name: "OpenAI",    logo: "/logos/openai.png",   color: "#10a37f", x0: 12, x1: 68, dur: 7 },
  { name: "Mistral",   logo: "/logos/mistral.png",  color: "#f54e00", x0: 4,  x1: 58, dur: 9.5 },
  { name: "Gemini",    logo: "/logos/gemini.png",   color: "#4285f4", x0: 18, x1: 72, dur: 8 },
  { name: "Claude",    logo: "/logos/claude.png",   color: "#d4a27f", x0: 8,  x1: 64, dur: 6.5 },
  { name: "Meta",      logo: "/logos/meta.webp",    color: "#0082fb", x0: 2,  x1: 52, dur: 10.5 },
  { name: "DeepSeek",  logo: "/logos/deepseek.png", color: "#4d6bfe", x0: 15, x1: 70, dur: 7.5 },
  { name: "xAI",       logo: "/logos/xai.png",      color: "#1d1d1f", x0: 6,  x1: 60, dur: 11 },
];

export default function AiRaceOrbit() {
  return (
    <div className="flex flex-col gap-3.5">
      {RUNNERS.map((r, i) => (
        <div key={r.name} className="relative h-9 overflow-hidden sm:h-10">
          {/* Rail pointillé défilant vers l'arrière */}
          <div
            className="pointer-events-none absolute inset-x-0 top-1/2 h-px -translate-y-1/2"
            style={{
              backgroundImage:
                "repeating-linear-gradient(to right, #cbd5e1 0 6px, transparent 6px 14px)",
              animationName: "rail-scroll",
              animationDuration: "0.15s",
              animationTimingFunction: "linear",
              animationIterationCount: "infinite",
            }}
          />

          {/* Pastille — oscille entre x0 et x1, jamais au bout */}
          <div
            className="absolute top-1/2 -translate-y-1/2"
            style={{
              left: `${r.x0}%`,
              animationName: "race-drift",
              animationDuration: `${r.dur}s`,
              animationTimingFunction: "ease-in-out",
              animationIterationCount: "infinite",
              animationDirection: "alternate",
              animationDelay: `${i * -1.7}s`,
              ["--x0" as string]: `${r.x0}%`,
              ["--x1" as string]: `${r.x1}%`,
            }}
          >
            <div
              className="flex h-8 items-center gap-1.5 rounded-full border bg-white px-2.5 shadow-sm sm:h-9 sm:px-3"
              style={{ borderColor: `${r.color}40` }}
              title={r.name}
            >
              <div
                className="flex h-5 w-5 items-center justify-center overflow-hidden rounded-full sm:h-6 sm:w-6"
                style={{ backgroundColor: `${r.color}15` }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={r.logo}
                  alt={r.name}
                  className="h-4 w-4 object-contain sm:h-5 sm:w-5"
                />
              </div>
              <span
                className="text-[11px] font-semibold leading-none sm:text-xs"
                style={{ color: r.color }}
              >
                {r.name}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
