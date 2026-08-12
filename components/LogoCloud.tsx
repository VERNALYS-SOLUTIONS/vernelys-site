type LogoCloudProps = {
  title?: string;
  /** Noms/placeholders de logos clients (marque blanche). */
  names?: string[];
};

/**
 * Bandeau de preuve sociale « Ces cabinets nous font déjà confiance ».
 * Noms textuels en attendant les logos définitifs.
 */
export default function LogoCloud({
  names = ["Acges Experts", "Xperia"],
}: LogoCloudProps) {
  return (
    <div className="mx-auto max-w-6xl px-6">
      <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
        {names.map((name) => (
          <span
            key={name}
            className="text-lg font-semibold tracking-tight text-slate-300 grayscale transition hover:text-slate-400"
          >
            {name}
          </span>
        ))}
      </div>
    </div>
  );
}
