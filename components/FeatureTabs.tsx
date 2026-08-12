"use client";

import { useState } from "react";
import Link from "next/link";
import ComplementMockup from "@/components/ComplementMockup";

type Tab = {
  key: string;
  label: string;
  title: string;
  description: string;
  points: string[];
  href?: string;
  visual: React.ReactNode;
};

/**
 * Vitrine de fonctionnalités à onglets — barre d'onglets centrée puis carte
 * texte à gauche / mockup produit à droite. Inspirée du pattern DataSnipper.
 */
export default function FeatureTabs() {
  const tabs: Tab[] = [
    {
      key: "outils",
      label: "Outils principaux",
      title: "Un ruban Excel taillé pour la production comptable",
      description:
        "Auto Sum, inversion de signe, majuscule/minuscule, arrondi à l'unité, SIERREUR, nettoyage des espaces, audit des formules et des nombres magiques : le tout groupé dans un onglet dédié, avec un historique d'annulation isolé.",
      points: [
        "Actions courantes en un clic ou par raccourci",
        "Audit visuel des formules et des constantes",
        "Historique d'annulation indépendant d'Excel",
      ],
      href: "/docs",
      visual: <VisualOutils />,
    },
    {
      key: "pdf",
      label: "Extraction PDF",
      title: "Vos PDF deviennent des données exploitables",
      description:
        "Importez un PDF dans le classeur et extrayez texte, sommes et tableaux par simple sélection visuelle. Chaque cellule reste liée à sa zone d'origine pour un contrôle immédiat.",
      points: [
        "Sélection visuelle des zones à extraire",
        "Aperçu intégré du document",
        "Liaison cellule ↔ zone du PDF",
        "Le PDF voyage avec le classeur : fini les liens hypertexte, optimisé pour le travail d'équipe",
      ],
      href: "/docs",
      visual: <ComplementMockup />,
    },
    {
      key: "raccourcis",
      label: "Raccourcis clavier",
      title: "Vos raccourcis de mise en forme, enfin sous contrôle",
      description:
        "Un gestionnaire visuel pour créer et organiser vos raccourcis de remplissage, police, bordures et format. Détection automatique des conflits avec Excel et catalogue de référence.",
      points: [
        "Gestionnaire visuel avec catalogue",
        "Détection des conflits avec Excel",
        "Catalogue de tous les raccourcis existants",
      ],
      href: "/docs",
      visual: <VisualShortcuts />,
    },
    {
      key: "audit-tva",
      label: "Audit TVA",
      title: "Réconciliez vos CA3 en quelques secondes",
      description:
        "Extraction automatique des éléments d'une déclaration CA3 vers une feuille structurée. Idéal pour réconcilier rapidement les données comptables avec le déclaratif.",
      points: [
        "Import d'une CA3 vers un tableau normé",
        "Rapprochement automatique déclaratif / compta et suivi des écarts et commentaires",
      ],
      href: "/docs",
      visual: <VisualAudit />,
    },
    {
      key: "ia",
      label: "Assistant IA",
      title: "Une IA qui lit vos feuilles et propose des actions",
      description:
        "Un volet IA qui analyse votre feuille active, propose des actions concrètes : analyses, mise en forme, écriture de formules, et les exécute sous votre contrôle, sans quitter Excel.",
      points: [
        "Analyse contextuelle de la feuille active",
        "Actions exécutables en un clic",
        "Traitement hébergé en France, sans rétention",
      ],
      href: "/docs",
      visual: <VisualAI />,
    },
    {
      key: "multilingue",
      label: "Multilingue & branding",
      title: "Un ruban aux couleurs de votre cabinet",
      description:
        "Interface bilingue français / anglais avec bascule en un clic. Le nom de l'onglet du ruban et le logo affiché peuvent être personnalisés au nom de votre cabinet.",
      points: [
        "Bascule FR / EN instantanée",
        "Nom du ruban et logo personnalisables",
        "Déploiement centralisé au niveau du cabinet",
      ],
      href: "/docs",
      visual: <VisualBranding />,
    },
  ];

  const [active, setActive] = useState(tabs[0].key);
  const current = tabs.find((t) => t.key === active) ?? tabs[0];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-brand-50/60 via-white to-white py-24">
      <div className="mx-auto max-w-6xl px-6">
        {/* ── Titre ── */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-balance text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Ne chercher plus faîtes la différence{" "}
            <span className="italic text-brand-600">avec Vernelys</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-slate-600">
            Un ruban unique qui regroupe les fonctionnalités utilisées au
            quotidien. Choisissez un usage :
          </p>
        </div>

        {/* ── Barre d'onglets ── */}
        <div className="mt-10 flex justify-center">
          <div
            role="tablist"
            aria-label="Fonctionnalités du complément Excel"
            className="inline-flex max-w-full flex-wrap items-center justify-center gap-1 rounded-3xl border border-slate-200 bg-white/80 p-1.5 shadow-sm backdrop-blur sm:rounded-full"
          >
            {tabs.map((tab) => {
              const isActive = tab.key === active;
              return (
                <button
                  key={tab.key}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={`tab-panel-${tab.key}`}
                  id={`tab-${tab.key}`}
                  onClick={() => setActive(tab.key)}
                  className={
                    "whitespace-nowrap rounded-full px-3.5 py-2 text-sm font-semibold transition sm:px-4 " +
                    (isActive
                      ? "bg-brand-50 text-brand-700 ring-1 ring-inset ring-brand-200"
                      : "text-slate-600 hover:text-slate-900")
                  }
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* ── Panneau ── */}
        <div
          key={current.key}
          role="tabpanel"
          id={`tab-panel-${current.key}`}
          aria-labelledby={`tab-${current.key}`}
          className="mt-10 rounded-3xl border border-slate-200 bg-white p-4 shadow-sm sm:p-6"
        >
          <div className="grid gap-8 rounded-2xl bg-slate-50/60 p-6 sm:p-10 lg:grid-cols-2 lg:items-center lg:gap-12">
            {/* Texte */}
            <div>
              <h3 className="text-3xl font-bold tracking-tight text-slate-900">
                {current.title}
              </h3>
              <p className="mt-4 text-base leading-relaxed text-slate-600">
                {current.description}
              </p>
              <ul className="mt-6 space-y-3">
                {current.points.map((point) => (
                  <li key={point} className="flex items-start gap-3 text-sm text-slate-700">
                    <svg
                      aria-hidden="true"
                      className="mt-0.5 h-5 w-5 flex-none text-brand-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2.5}
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              {current.href ? (
                <div className="mt-8">
                  <Link
                    href={current.href}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 hover:text-brand-700"
                  >
                    En savoir plus
                    <span aria-hidden="true">→</span>
                  </Link>
                </div>
              ) : null}
            </div>

            {/* Visuel avec dégradés latéraux (façon DataSnipper) */}
            <div className="relative">
              <div className="pointer-events-none absolute inset-y-2 -left-1 w-2 rounded-l-2xl bg-gradient-to-b from-brand-600 to-brand-500 sm:w-3" />
              <div className="pointer-events-none absolute inset-y-2 -right-1 w-2 rounded-r-2xl bg-gradient-to-b from-brand-500 to-brand-200 sm:w-3" />
              <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg ring-1 ring-slate-900/5">
                {current.visual}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────── Faux écrans par onglet ─────────────────────────── */

function ScreenChrome({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-1.5 border-b border-slate-100 bg-slate-50 px-3 py-2">
      <span className="h-2 w-2 rounded-full bg-slate-300" />
      <span className="h-2 w-2 rounded-full bg-slate-300" />
      <span className="h-2 w-2 rounded-full bg-slate-300" />
      <span className="ml-2 truncate text-[11px] font-medium text-slate-400">
        {label}
      </span>
    </div>
  );
}

function VisualOutils() {
  const icons = [
    "/ribbon/somme.png",
    "/ribbon/texte.png",
    "/ribbon/table.png",
    "/ribbon/suppression.png",
  ];
  return (
    <div className="min-h-[280px]">
      <ScreenChrome label="Excel : onglet « Outils Excel »" />
      <div className="p-5">
        <div className="flex items-center gap-2 border-b border-slate-100 pb-3">
          {icons.map((src) => (
            /* eslint-disable-next-line @next/next/no-img-element */
            <img
              key={src}
              src={src}
              alt=""
              width={24}
              height={24}
              className="h-6 w-6 rounded object-contain ring-1 ring-slate-200"
            />
          ))}
          <span className="ml-auto text-[10px] font-semibold uppercase tracking-widest text-brand-600">
            Outils Excel
          </span>
        </div>
        <div className="mt-4 grid grid-cols-4 gap-1">
          {Array.from({ length: 24 }).map((_, i) => {
            const highlight = i === 6 || i === 10 || i === 14;
            return (
              <span
                key={i}
                className={
                  "h-4 rounded-sm " +
                  (highlight ? "bg-brand-100 ring-1 ring-brand-200" : "bg-slate-100")
                }
              />
            );
          })}
        </div>
        <div className="mt-4 flex items-center justify-between rounded-md bg-brand-50 px-3 py-2 text-[11px] font-medium text-brand-700">
          <span>Audit des formules : 3 anomalies détectées</span>
          <span className="rounded bg-white px-2 py-0.5 text-[10px] font-semibold text-brand-700 ring-1 ring-brand-200">
            Corriger
          </span>
        </div>
      </div>
    </div>
  );
}

function VisualShortcuts() {
  const rows = [
    { keys: "Ctrl + M", action: "Remplissage vert", ok: true },
    { keys: "Ctrl + J", action: "Bordure épaisse", ok: true },
    { keys: "Ctrl + K", action: "Format milliers", ok: true },
    { keys: "Ctrl + B", action: "Gras (conflit Excel)", ok: false },
  ];
  return (
    <div className="min-h-[280px]">
      <ScreenChrome label="Gestionnaire de raccourcis" />
      <div className="p-5">
        <div className="flex items-center gap-2">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/ribbon/gestionnaire-raccourcis.png"
            alt=""
            width={22}
            height={22}
            className="h-5 w-5 object-contain"
          />
          <span className="text-xs font-semibold text-slate-600">
            Raccourcis clavier
          </span>
          <span className="ml-auto rounded bg-slate-100 px-2 py-0.5 text-[10px] font-medium text-slate-500">
            {rows.length} entrées
          </span>
        </div>
        <div className="mt-4 space-y-1.5">
          {rows.map((s) => (
            <div
              key={s.keys}
              className={
                "flex items-center justify-between rounded-md border px-3 py-2 " +
                (s.ok
                  ? "border-slate-100"
                  : "border-amber-200 bg-amber-50")
              }
            >
              <span className="rounded bg-slate-100 px-2 py-0.5 font-mono text-[11px] font-semibold text-slate-700">
                {s.keys}
              </span>
              <span
                className={
                  "text-[11px] " + (s.ok ? "text-slate-500" : "text-amber-700")
                }
              >
                {s.action}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function VisualAudit() {
  const lines = [
    { label: "TVA collectée (ligne 08)", value: "48 120", pct: "82%" },
    { label: "TVA déductible (ligne 20)", value: "32 480", pct: "62%" },
    { label: "TVA à décaisser", value: "15 640", pct: "38%" },
  ];
  return (
    <div className="min-h-[280px]">
      <ScreenChrome label="Audit TVA : CA3" />
      <div className="p-5">
        <div className="flex items-center gap-2">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/ribbon/aide-audit.png"
            alt=""
            width={22}
            height={22}
            className="h-5 w-5 object-contain"
          />
          <span className="text-xs font-semibold text-slate-600">
            Extraction CA3
          </span>
          <span className="ml-auto rounded bg-brand-50 px-2 py-0.5 text-[10px] font-semibold text-brand-700 ring-1 ring-brand-200">
            Rapproché
          </span>
        </div>
        <div className="mt-4 space-y-2.5">
          {lines.map((l) => (
            <div key={l.label}>
              <div className="flex items-center justify-between text-[11px]">
                <span className="text-slate-500">{l.label}</span>
                <span className="font-semibold text-slate-800">{l.value} €</span>
              </div>
              <div className="mt-1 h-1.5 w-full overflow-hidden rounded-full bg-slate-100">
                <div
                  className="h-full rounded-full bg-brand-500"
                  style={{ width: l.pct }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function VisualAI() {
  return (
    <div className="min-h-[280px]">
      <ScreenChrome label="Assistant IA" />
      <div className="p-5">
        <div className="flex items-center gap-2">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/ribbon/ia.png"
            alt=""
            width={22}
            height={22}
            className="h-5 w-5 object-contain"
          />
          <span className="text-xs font-semibold text-slate-600">Assistant</span>
          <span className="ml-auto text-[10px] font-medium text-slate-400">
            Feuille active
          </span>
        </div>
        <div className="mt-4 space-y-2">
          <div className="ml-auto max-w-[85%] rounded-2xl rounded-tr-sm bg-brand-600 px-3 py-2 text-[11px] text-white">
            Analyse les écarts de la colonne D
          </div>
          <div className="mr-auto max-w-[90%] rounded-2xl rounded-tl-sm bg-slate-100 px-3 py-2 text-[11px] text-slate-700">
            3 écarts identifiés sur les lignes 12, 27 et 34. Voulez-vous que
            j'applique la correction proposée ?
          </div>
          <div className="mt-1 flex gap-2">
            <span className="rounded-full bg-white px-3 py-1 text-[10px] font-semibold text-brand-700 ring-1 ring-brand-200">
              Appliquer
            </span>
            <span className="rounded-full bg-white px-3 py-1 text-[10px] font-semibold text-slate-500 ring-1 ring-slate-200">
              Détailler
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

function VisualBranding() {
  return (
    <div className="min-h-[280px]">
      <ScreenChrome label="Personnalisation cabinet" />
      <div className="p-5">
        <div className="flex items-center justify-between rounded-lg bg-slate-50 px-3 py-2">
          <span className="text-xs font-semibold text-slate-600">Langue</span>
          <div className="flex overflow-hidden rounded-full ring-1 ring-slate-200">
            <span className="bg-brand-600 px-3 py-1 text-[10px] font-semibold text-white">
              FR
            </span>
            <span className="bg-white px-3 py-1 text-[10px] font-semibold text-slate-500">
              EN
            </span>
          </div>
        </div>
        <div className="mt-3 rounded-lg border border-slate-100 p-3">
          <p className="text-[10px] font-semibold uppercase tracking-widest text-slate-400">
            Nom de l&apos;onglet
          </p>
          <div className="mt-1 flex items-center justify-between rounded-md bg-white px-3 py-2 ring-1 ring-slate-200">
            <span className="text-sm font-semibold text-slate-800">
              Outils Cabinet Martin
            </span>
            <span className="text-[10px] text-slate-400">personnalisé</span>
          </div>
        </div>
        <div className="mt-3 rounded-lg border border-slate-100 p-3">
          <p className="text-[10px] font-semibold uppercase tracking-widest text-slate-400">
            Logo affiché
          </p>
          <div className="mt-2 flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-600 text-xs font-bold text-white">
              CM
            </div>
            <span className="text-[11px] text-slate-500">
              cabinet-martin.svg (42×42)
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
