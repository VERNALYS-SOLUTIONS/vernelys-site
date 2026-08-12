type VideoPlaceholderProps = {
  /** Libellé affiché au centre de l'espace vidéo. */
  label?: string;
  /** Texte secondaire optionnel (ex. durée, sujet). */
  caption?: string;
  /** Variante sombre pour les sections premium. */
  dark?: boolean;
};

/**
 * Espace réservé aux futures vidéos / captures de présentation produit.
 * Ratio 16:9, dimensions fixes, prêt à recevoir un <video> ou un <iframe>.
 */
export default function VideoPlaceholder({
  label = "Vidéo de présentation à venir",
  caption,
  dark = false,
}: VideoPlaceholderProps) {
  return (
    <div
      className={
        "aspect-video w-full overflow-hidden " +
        (dark
          ? "rounded-xl border border-white/10 bg-white/5"
          : "bg-[radial-gradient(circle_at_center,theme(colors.brand.50),white)]")
      }
    >
      <div className="flex h-full w-full flex-col items-center justify-center gap-3 text-center">
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-600 text-white shadow-lg shadow-brand-600/30 transition group-hover:scale-105">
          <svg
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
            className="h-7 w-7"
          >
            <path d="M6.3 2.84a1 1 0 0 0-1.55.83v12.66a1 1 0 0 0 1.55.83l9.52-6.33a1 1 0 0 0 0-1.66L6.3 2.84Z" />
          </svg>
        </span>
        <p
          className={
            "text-sm font-medium " + (dark ? "text-slate-300" : "text-slate-600")
          }
        >
          {label}
        </p>
        {caption ? (
          <p
            className={
              "max-w-xs text-xs " + (dark ? "text-slate-400" : "text-slate-400")
            }
          >
            {caption}
          </p>
        ) : null}
      </div>
    </div>
  );
}
