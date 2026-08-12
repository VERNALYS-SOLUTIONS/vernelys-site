import VideoPlaceholder from "@/components/VideoPlaceholder";
import MockupFrame from "@/components/MockupFrame";

type FeatureRowProps = {
  eyebrow: string;
  title: string;
  description: string;
  points?: string[];
  /** Libellé du cadre visuel (placeholder produit/vidéo). */
  visualLabel?: string;
  frameLabel?: string;
  /** Inverse l'ordre texte/visuel (une ligne sur deux). */
  reverse?: boolean;
};

/**
 * Bloc « fonctionnalité » alternant texte et visuel produit encadré,
 * comme sur Pennylane / Elyx.
 */
export default function FeatureRow({
  eyebrow,
  title,
  description,
  points = [],
  visualLabel,
  frameLabel,
  reverse = false,
}: FeatureRowProps) {
  return (
    <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
      <div className={reverse ? "lg:order-2" : ""}>
        <p className="text-xs font-semibold uppercase tracking-widest text-brand-600">
          {eyebrow}
        </p>
        <h3 className="mt-3 text-3xl font-bold tracking-tight text-slate-900">
          {title}
        </h3>
        <p className="mt-4 text-lg leading-relaxed text-slate-600">
          {description}
        </p>
        {points.length > 0 ? (
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
        ) : null}
      </div>
      <div className={reverse ? "lg:order-1" : ""}>
        <MockupFrame label={frameLabel}>
          <VideoPlaceholder label={visualLabel} />
        </MockupFrame>
      </div>
    </div>
  );
}
