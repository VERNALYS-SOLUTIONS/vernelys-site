import Link from "next/link";
import { CGS_CURRENT, CGS_VERSIONS } from "./versions";
import type { CgsBlock, CgsSection, CgsVersion } from "./versions";

// Enrichissements acceptés dans le texte des CGS : **gras** et [libellé](href).
// Tout le reste — y compris les emplacements « [•] » restés à compléter dans le
// document contractuel — est rendu littéralement.
const INLINE_PATTERN = /(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g;
const LINK_PATTERN = /^\[([^\]]+)\]\(([^)]+)\)$/;

function renderInline(text: string): React.ReactNode[] {
  return text
    .split(INLINE_PATTERN)
    .filter(Boolean)
    .map((part, i) => {
      if (part.startsWith("**") && part.endsWith("**")) {
        return (
          <strong key={i} className="font-semibold text-slate-900">
            {part.slice(2, -2)}
          </strong>
        );
      }

      const link = LINK_PATTERN.exec(part);
      if (!link) return part;

      const [, label, href] = link;
      const className = "font-medium text-brand-600 hover:underline";
      return href.startsWith("/") ? (
        <Link key={i} href={href} className={className}>
          {label}
        </Link>
      ) : (
        <a key={i} href={href} className={className}>
          {label}
        </a>
      );
    });
}

// « Article 12 — Force majeure » → { prefix: "Article 12", label: "Force majeure" }
// Le séparateur est repris tel qu'il figure au document : cadratin partout,
// sauf à l'article 24 où le document utilise un trait d'union.
function splitTitle(title: string) {
  const sep = title.includes(" — ") ? " — " : " - ";
  const i = title.indexOf(sep);
  return i === -1
    ? { prefix: null, label: title }
    : { prefix: title.slice(0, i), label: title.slice(i + sep.length) };
}

/** Forme abrégée pour le sommaire, qui dispose de peu de largeur. */
function shortPrefix(prefix: string | null) {
  if (!prefix) return null;
  return prefix.replace(/^Article /, "Art. ").replace(/^Annexe /, "Ann. ");
}

export default function CgsDocument({ version }: { version: CgsVersion }) {
  const isCurrent = version.slug === CGS_CURRENT.slug;

  return (
    <div className="mx-auto max-w-6xl px-5 py-10 sm:px-6 sm:py-14">
      <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
        {/* Barre latérale — versions du document */}
        <aside className="lg:col-span-3">
          <div className="lg:sticky lg:top-24 lg:max-h-[calc(100vh-7rem)] lg:overflow-y-auto lg:pb-8">
            <p className="text-xs font-semibold uppercase tracking-widest text-slate-400">
              Versions
            </p>
            <ul className="mt-4 space-y-2">
              {CGS_VERSIONS.map((v) => {
                const active = v.slug === version.slug;
                return (
                  <li key={v.slug}>
                    <Link
                      href={`/cgs/${v.slug}`}
                      aria-current={active ? "page" : undefined}
                      className={`block rounded-lg border px-4 py-3 transition ${
                        active
                          ? "border-brand-200 bg-brand-50"
                          : "border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50"
                      }`}
                    >
                      <time
                        dateTime={v.isoDate}
                        className={`block font-mono text-sm font-semibold ${
                          active ? "text-brand-700" : "text-slate-700"
                        }`}
                      >
                        {v.shortDate}
                      </time>
                      <span className="mt-1 block text-xs text-slate-500">
                        {v.slug === CGS_CURRENT.slug
                          ? "Version en vigueur"
                          : "Version archivée"}
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>

            {/* Sommaire — replié sur mobile, déroulé à partir de lg */}
            <details className="group mt-8 rounded-lg border border-slate-200 lg:hidden">
              <summary className="cursor-pointer list-none px-4 py-3 text-xs font-semibold uppercase tracking-widest text-slate-400 marker:content-none">
                Sommaire
                <span className="float-right font-sans text-slate-400 transition group-open:rotate-180">
                  ▾
                </span>
              </summary>
              <div className="px-4 pb-4">
                <Toc sections={version.sections} />
              </div>
            </details>

            <nav className="mt-8 hidden lg:block">
              <p className="text-xs font-semibold uppercase tracking-widest text-slate-400">
                Sommaire
              </p>
              <div className="mt-4">
                <Toc sections={version.sections} />
              </div>
            </nav>
          </div>
        </aside>

        {/* Document */}
        <article className="lg:col-span-9">
          {/* Bloc de titre repris tel quel du document contractuel. */}
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            {version.documentTitle}
          </h1>
          <p className="mt-4 text-base text-slate-600 sm:text-lg">
            {version.documentSubtitle}
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3 text-sm">
            <span className="rounded-full bg-slate-100 px-3 py-1 font-mono text-slate-600">
              Version du{" "}
              <time dateTime={version.isoDate}>{version.shortDate}</time>
            </span>
            {isCurrent ? (
              <span className="rounded-full bg-brand-50 px-3 py-1 font-medium text-brand-700">
                En vigueur depuis le {version.longDate}
              </span>
            ) : (
              <span className="rounded-full bg-amber-50 px-3 py-1 font-medium text-amber-700">
                Version archivée
              </span>
            )}
          </div>

          {!isCurrent && (
            <p className="mt-6 rounded-lg border-l-4 border-amber-400 bg-amber-50 p-4 text-sm text-slate-700">
              Cette version n&apos;est plus en vigueur. Elle est conservée à
              titre d&apos;archive pour les contrats souscrits sous son empire.{" "}
              <Link
                href={`/cgs/${CGS_CURRENT.slug}`}
                className="font-semibold text-brand-700 hover:underline"
              >
                Consulter la version du {CGS_CURRENT.shortDate}
              </Link>
              .
            </p>
          )}

          <div className="mt-12 space-y-12 sm:mt-14 sm:space-y-14">
            {version.sections.map((section) => {
              const { prefix, label } = splitTitle(section.title);
              return (
                <section
                  key={section.id}
                  id={section.id}
                  className="scroll-mt-24"
                >
                  <div className="flex items-center gap-3">
                    {prefix && (
                      <span className="font-mono text-sm font-bold text-brand-600">
                        {prefix}
                      </span>
                    )}
                    <span className="h-px flex-1 bg-brand-100" />
                  </div>
                  <h2 className="mt-3 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                    {label}
                  </h2>
                  <div className="mt-5 space-y-4 text-base leading-relaxed text-slate-600">
                    {section.blocks.map((block, j) => (
                      <Block key={j} block={block} />
                    ))}
                  </div>
                </section>
              );
            })}
          </div>
        </article>
      </div>
    </div>
  );
}

function Toc({ sections }: { sections: CgsSection[] }) {
  return (
    <ul className="border-l border-slate-200">
      {sections.map((s) => {
        const { prefix, label } = splitTitle(s.title);
        return (
          <li key={s.id}>
            <a
              href={`#${s.id}`}
              className="-ml-px flex gap-2 border-l-2 border-transparent py-2 pl-4 text-sm text-slate-600 transition hover:border-brand-600 hover:text-brand-700"
            >
              {prefix && (
                <span className="w-14 shrink-0 font-mono text-xs leading-5 text-slate-400">
                  {shortPrefix(prefix)}
                </span>
              )}
              <span className={prefix ? "" : "font-medium"}>{label}</span>
            </a>
          </li>
        );
      })}
    </ul>
  );
}

function Block({ block }: { block: CgsBlock }) {
  switch (block.type) {
    case "p":
      return <p>{renderInline(block.text)}</p>;

    case "h3":
      return (
        <h3 className="pt-4 text-lg font-semibold tracking-tight text-slate-900">
          {renderInline(block.text)}
        </h3>
      );

    case "h4":
      return (
        <h4 className="pt-2 font-semibold text-slate-800">
          {renderInline(block.text)}
        </h4>
      );

    case "ul":
      return (
        <ul className="list-disc space-y-2 pl-5">
          {block.items.map((item, i) => (
            <li key={i}>{renderInline(item)}</li>
          ))}
        </ul>
      );

    case "formula":
      return (
        <p className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-center font-mono text-sm text-slate-700">
          {block.text}
        </p>
      );

    case "table":
      return (
        <div className="overflow-hidden rounded-lg border border-slate-200">
          <table className="w-full text-sm">
            <thead className="hidden bg-slate-50 sm:table-header-group">
              <tr>
                {block.head.map((cell) => (
                  <th
                    key={cell}
                    scope="col"
                    className="px-4 py-2.5 text-left font-semibold text-slate-700 first:w-1/3"
                  >
                    {cell}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {block.rows.map(([name, desc]) => (
                <tr key={name} className="block bg-white sm:table-row">
                  <td className="block px-4 pt-3 pb-1 font-semibold text-slate-800 sm:table-cell sm:w-1/3 sm:py-3 sm:align-top">
                    {name}
                  </td>
                  <td className="block px-4 pb-3 text-slate-600 sm:table-cell sm:py-3">
                    {renderInline(desc)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
  }
}
