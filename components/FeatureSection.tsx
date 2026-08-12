"use client";

import { useState } from "react";

export type FeatureItem = {
  title: string;
  lead: string;
  description: string;
};

type FeatureSectionProps = {
  eyebrow?: string;
  title: string;
  items: FeatureItem[];
  illustration: React.ReactNode;
  /** Côté où s'affiche l'illustration (le texte se place de l'autre côté). */
  illustrationSide?: "left" | "right";
};

/**
 * Section produit : titre centré, illustration d'un côté et accordéon
 * de fonctionnalités de l'autre. Inspirée des pages produit type DataSnipper.
 */
export default function FeatureSection({
  eyebrow,
  title,
  items,
  illustration,
  illustrationSide = "left",
}: FeatureSectionProps) {
  const [openIndex, setOpenIndex] = useState(0);

  const accordion = (
    <ul className="flex flex-col gap-4">
      {items.map((item, i) => {
        const open = i === openIndex;
        return (
          <li
            key={item.title}
            className="rounded-2xl border border-slate-200 bg-white shadow-sm transition"
          >
            <button
              type="button"
              onClick={() => setOpenIndex(open ? -1 : i)}
              aria-expanded={open}
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
            >
              <span className="text-xl font-semibold tracking-tight text-slate-900">
                {item.title}
              </span>
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand-600">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                  className={open ? "rotate-180 transition-transform" : "transition-transform"}
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </span>
            </button>
            {open ? (
              <div className="px-6 pb-6">
                <p className="font-semibold text-slate-900">{item.lead}</p>
                <p className="mt-3 leading-relaxed text-slate-600">
                  {item.description}
                </p>
              </div>
            ) : null}
          </li>
        );
      })}
    </ul>
  );

  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <div className="mx-auto max-w-3xl text-center">
        {eyebrow ? (
          <span className="text-sm font-semibold uppercase tracking-widest text-brand-600">
            {eyebrow}
          </span>
        ) : null}
        <h2 className="mt-4 text-balance text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
          {title}
        </h2>
      </div>

      <div className="mt-14 grid items-center gap-10 lg:grid-cols-2">
        <div className={illustrationSide === "right" ? "lg:order-2" : "lg:order-1"}>
          {illustration}
        </div>
        <div className={illustrationSide === "right" ? "lg:order-1" : "lg:order-2"}>
          {accordion}
        </div>
      </div>
    </section>
  );
}
