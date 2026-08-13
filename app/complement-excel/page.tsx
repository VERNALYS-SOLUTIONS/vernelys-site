import Link from "next/link";
import QuickSetupCard from "@/components/QuickSetupCard";
import ExcelShowcase from "@/components/ExcelShowcase";
import FeatureTabs from "@/components/FeatureTabs";
import VideoShowcase from "@/components/VideoShowcase";
import CollaborationShowcase from "@/components/CollaborationShowcase";
import FinalCta from "@/components/FinalCta";

export const metadata = {
  title: "Complément Excel",
  description:
    "Vernelys, le complément Excel des experts-comptables : outils de formules, extraction PDF, audit TVA, raccourcis personnalisés et assistant IA. FR / EN.",
};

export default function ComplementExcelPage() {
  return (
    <div>
      {/* Fonctionnalités — vitrine à onglets */}
      <FeatureTabs />

      {/* Installation simple */}
      <section className="mx-auto max-w-6xl px-5 pt-14 sm:px-6 sm:pt-20">
        <QuickSetupCard />
      </section>

      {/* Vitrine vidéos façon Jimini — animations HTML embarquées */}
      <VideoShowcase
        title="Vernelys en action"
        videos={[
          { embed: "/animations/part1.html", poster: "/animations/posters/part1.jpg", caption: "Connexion et premiers pas" },
          { embed: "/animations/part2.html", poster: "/animations/posters/part2.jpg", caption: "Extraction Texte, Somme, Tableau" },
          { embed: "/animations/part3.html", poster: "/animations/posters/part3.jpg", caption: "Raccourcis clavier" },
          { embed: "/animations/part4.html", poster: "/animations/posters/part4.jpg", caption: "Aide à l'audit, TVA & factures" },
          { embed: "/animations/part5.html", poster: "/animations/posters/part5.jpg", caption: "Assistant IA & macros VBA" },
        ]}
      />

      {/* Aspect collaboratif — classeur partagé, commentaires, activité */}
      <CollaborationShowcase />

      {/* Vitrine multi-écrans + arguments marketing */}
      <ExcelShowcase />

      {/* Stats + CTA guides */}
      <section className="mx-auto max-w-6xl px-5 py-14 sm:px-6 sm:py-20">
        <div className="grid gap-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:grid-cols-3 sm:gap-8 sm:p-10">
          <Stat label="Compatibilité" value="Excel 2016+" />
          <Stat label="Plateforme" value="Windows" />
          <Stat label="Installation" value=".msi en 1 clic" />
        </div>
        <div className="mt-10 flex justify-center sm:mt-12">
          <Link
            href="/guides"
            className="text-sm font-semibold text-brand-600 hover:underline"
          >
            Voir les guides d&apos;utilisation →
          </Link>
        </div>
      </section>

      <FinalCta prompt="Je veux tester le complément Excel dans mon cabinet" />
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="text-center">
      <p className="text-2xl font-bold text-brand-600 sm:text-3xl">{value}</p>
      <p className="mt-1 text-sm text-slate-500">{label}</p>
    </div>
  );
}
