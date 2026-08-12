const DEFAULT_ITEMS = [
  "Données hébergées à Paris",
  "Traitement des données en Europe",
  "Conforme RGPD",
  "Chiffrement en transit & au repos",
];

type TrustRowProps = {
  items?: string[];
  /** Variante sombre pour les sections premium. */
  dark?: boolean;
};

/**
 * Rangée de badges de confiance / conformité, à la manière de DataSnipper.
 */
export default function TrustRow({ items = DEFAULT_ITEMS, dark = false }: TrustRowProps) {
  return (
    <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
      {items.map((item) => (
        <li
          key={item}
          className={
            "inline-flex items-center gap-2 text-sm font-medium " +
            (dark ? "text-slate-300" : "text-slate-600")
          }
        >
          <span
            aria-hidden="true"
            className={
              "flex h-5 w-5 items-center justify-center rounded-full text-xs font-bold " +
              (dark ? "bg-brand-500/20 text-brand-200" : "bg-brand-50 text-brand-600")
            }
          >
            ✓
          </span>
          {item}
        </li>
      ))}
    </ul>
  );
}
