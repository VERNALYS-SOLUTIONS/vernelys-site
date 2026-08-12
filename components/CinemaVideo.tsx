"use client";

import { useEffect, useRef, useState } from "react";

type CinemaVideoProps = {
  /** URL de la vidéo (mp4/webm). */
  src: string;
  /** Libellé accessible (titre du module). */
  label: string;
  /** Image affichée en arrière-plan de l'aperçu, au repos. */
  poster?: string;
};

const TRANSITION_MS = 280;

/**
 * Aperçu vidéo statique (aucune lecture automatique) : un clic ouvre un
 * lecteur plein écran façon « mode cinéma » (fondu + zoom) où la lecture
 * démarre.
 */
export default function CinemaVideo({ src, label, poster }: CinemaVideoProps) {
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleOpen = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setMounted(true);
  };

  const handleClose = () => {
    setVisible(false);
    closeTimer.current = setTimeout(() => setMounted(false), TRANSITION_MS);
  };

  // déclenche la transition d'entrée une fois le lecteur monté
  useEffect(() => {
    if (!mounted) return;
    const id = requestAnimationFrame(() => setVisible(true));
    return () => cancelAnimationFrame(id);
  }, [mounted]);

  useEffect(() => {
    if (!mounted) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
    };
    document.addEventListener("keydown", onKey);
    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = overflow;
    };
  }, [mounted]);

  useEffect(() => () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  }, []);

  return (
    <>
      <button
        type="button"
        onClick={handleOpen}
        aria-label={`Lire la vidéo : ${label}`}
        className="group/play relative block aspect-video w-full overflow-hidden bg-black"
      >
        <video
          className="h-full w-full object-cover"
          src={src}
          poster={poster}
          muted
          playsInline
          preload="metadata"
        />
        <span className="absolute inset-0 flex items-center justify-center bg-transparent transition group-hover/play:bg-slate-900/35">
          <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white text-brand-600 shadow-lg shadow-black/30 transition group-hover/play:scale-105">
            <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="h-7 w-7 translate-x-0.5">
              <path d="M6.3 2.84a1 1 0 0 0-1.55.83v12.66a1 1 0 0 0 1.55.83l9.52-6.33a1 1 0 0 0 0-1.66L6.3 2.84Z" />
            </svg>
          </span>
        </span>
      </button>

      {mounted ? (
        <CinemaOverlay src={src} label={label} visible={visible} onClose={handleClose} />
      ) : null}
    </>
  );
}

function CinemaOverlay({
  src,
  label,
  visible,
  onClose,
}: {
  src: string;
  label: string;
  visible: boolean;
  onClose: () => void;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    videoRef.current?.play().catch(() => {});
  }, []);

  return (
    <div
      className={
        "fixed inset-0 z-[100] flex items-center justify-center p-2 sm:p-6 transition-opacity ease-out " +
        (visible ? "bg-black/95 opacity-100" : "bg-black/95 opacity-0")
      }
      style={{ transitionDuration: `${TRANSITION_MS}ms` }}
      onClick={onClose}
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Fermer la vidéo"
        className={
          "absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 " +
          (visible ? "opacity-100" : "opacity-0")
        }
        style={{ transitionDuration: `${TRANSITION_MS}ms`, transitionDelay: visible ? "120ms" : "0ms" }}
      >
        <svg viewBox="0 0 24 24" fill="none" strokeWidth={2} stroke="currentColor" className="h-6 w-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
        </svg>
      </button>

      <video
        ref={videoRef}
        className={
          "max-h-[94vh] w-full max-w-[1800px] rounded-lg shadow-2xl transition-all ease-out " +
          (visible ? "scale-100 opacity-100" : "scale-95 opacity-0")
        }
        style={{ transitionDuration: `${TRANSITION_MS}ms` }}
        src={src}
        controls
        playsInline
        onClick={(e) => e.stopPropagation()}
        aria-label={label}
      />
    </div>
  );
}
