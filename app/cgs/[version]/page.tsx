import { notFound } from "next/navigation";
import CgsDocument from "../CgsDocument";
import { CGS_VERSIONS, getCgsVersion } from "../versions";

// Une URL stable par version publiée : /cgs/2026-08-14. Les clients peuvent
// ainsi référencer la version qui leur est opposable, même après publication
// d'une version ultérieure. Comme /cgs, ces pages sont « noindex » et ne sont
// liées depuis aucune page publique du site.
export const dynamicParams = false;

export function generateStaticParams() {
  return CGS_VERSIONS.map((v) => ({ version: v.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ version: string }>;
}) {
  const { version } = await params;
  const cgs = getCgsVersion(version);

  return {
    title: cgs
      ? `Conditions Générales de Service — version du ${cgs.shortDate}`
      : "Conditions Générales de Service",
    description:
      "Conditions générales de service de VERNALYS SOLUTIONS : Solution Vernelys, Compléments Office et services associés, pour les clients professionnels.",
    robots: {
      index: false,
      follow: false,
      nocache: true,
      googleBot: { index: false, follow: false },
    },
  };
}

export default async function CgsVersionPage({
  params,
}: {
  params: Promise<{ version: string }>;
}) {
  const { version } = await params;
  const cgs = getCgsVersion(version);
  if (!cgs) notFound();

  return <CgsDocument version={cgs} />;
}
