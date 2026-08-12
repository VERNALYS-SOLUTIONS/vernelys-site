"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";

const SOLUTIONS = [
  { value: "complement", label: "Complément Excel" },
  { value: "plateforme", label: "Plateforme collaborative" },
  { value: "les-deux", label: "Les deux solutions" },
  { value: "indecis", label: "Je ne sais pas encore" },
];

const TAILLES = [
  { value: "1-5", label: "1 à 5 collaborateurs" },
  { value: "6-20", label: "6 à 20 collaborateurs" },
  { value: "21-50", label: "21 à 50 collaborateurs" },
  { value: "50+", label: "Plus de 50 collaborateurs" },
];

export default function DemoForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);

    const subject = encodeURIComponent("Demande de démo Vernelys");
    const body = encodeURIComponent(
      [
        `Nom : ${fd.get("prenom")} ${fd.get("nom")}`,
        `Email : ${fd.get("email")}`,
        `Téléphone : ${fd.get("telephone") || "Non renseigné"}`,
        `Cabinet : ${fd.get("cabinet")}`,
        `Taille : ${fd.get("taille")}`,
        `Solution : ${fd.get("solution")}`,
        `Message : ${fd.get("message") || "Non renseigné"}`,
        "",
        `Consentement politique de confidentialité : accepté le ${new Date().toLocaleDateString("fr-FR")}`,
        `Accepte de recevoir des informations commerciales : ${
          fd.get("prospection") ? "Oui" : "Non"
        }`,
      ].join("\n")
    );

    window.open(
      `mailto:sales@vernelys.com?subject=${subject}&body=${body}`,
      "_self"
    );
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="mt-8 rounded-3xl border border-brand-200 bg-brand-50 p-8 text-center">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-brand-600">
          <svg
            className="h-6 w-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m4.5 12.75 6 6 9-13.5"
            />
          </svg>
        </div>
        <h3 className="mt-4 text-lg font-bold text-slate-900">
          Demande envoyée !
        </h3>
        <p className="mt-2 text-sm text-slate-600">
          Votre client mail s&apos;est ouvert avec les informations
          pré-remplies. Si ce n&apos;est pas le cas, écrivez-nous à{" "}
          <a
            href="mailto:sales@vernelys.com"
            className="font-semibold text-brand-600 hover:underline"
          >
            sales@vernelys.com
          </a>
          .
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-6 text-sm font-semibold text-brand-600 hover:underline"
        >
          Envoyer une autre demande
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mt-6 space-y-5">
      {/* Nom / Prénom */}
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Prénom" name="prenom" required placeholder="Marie" />
        <Field label="Nom" name="nom" required placeholder="Dupont" />
      </div>

      {/* Email */}
      <Field
        label="Email professionnel"
        name="email"
        type="email"
        required
        placeholder="marie.dupont@cabinet.fr"
      />

      {/* Téléphone */}
      <Field
        label="Téléphone"
        name="telephone"
        type="tel"
        placeholder="06 12 34 56 78"
      />

      {/* Cabinet */}
      <Field
        label="Cabinet / Entreprise"
        name="cabinet"
        required
        placeholder="Cabinet Dupont & Associés"
      />

      {/* Taille */}
      <div>
        <label className="mb-1.5 block text-sm font-medium text-slate-700">
          Taille de l&apos;équipe
        </label>
        <select
          name="taille"
          required
          defaultValue=""
          className="w-full rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm text-slate-900 shadow-sm transition focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 focus:outline-none"
        >
          <option value="" disabled>
            Sélectionnez
          </option>
          {TAILLES.map((t) => (
            <option key={t.value} value={t.value}>
              {t.label}
            </option>
          ))}
        </select>
      </div>

      {/* Solution */}
      <fieldset>
        <legend className="mb-2 text-sm font-medium text-slate-700">
          Solution qui vous intéresse
        </legend>
        <div className="grid gap-2 sm:grid-cols-2">
          {SOLUTIONS.map((s) => (
            <label
              key={s.value}
              className="flex cursor-pointer items-center gap-3 rounded-xl border border-slate-200 px-4 py-3 text-sm transition hover:border-brand-300 hover:bg-brand-50/50 has-[:checked]:border-brand-500 has-[:checked]:bg-brand-50"
            >
              <input
                type="radio"
                name="solution"
                value={s.value}
                required
                className="h-4 w-4 border-slate-300 text-brand-600 focus:ring-brand-500"
              />
              <span className="text-slate-700">{s.label}</span>
            </label>
          ))}
        </div>
      </fieldset>

      {/* Message */}
      <div>
        <label className="mb-1.5 block text-sm font-medium text-slate-700">
          Message{" "}
          <span className="font-normal text-slate-400">(facultatif)</span>
        </label>
        <textarea
          name="message"
          rows={3}
          placeholder="Décrivez brièvement vos besoins ou vos questions..."
          className="w-full resize-none rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm text-slate-900 shadow-sm transition focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 focus:outline-none"
        />
      </div>

      {/* -------------------------------------------------------------------
          Mentions RGPD au point de collecte (art. 13 RGPD) + recueil du
          consentement. Le formulaire n'envoie rien à un serveur : il ouvre le
          client de messagerie de l'utilisateur avec un message pré-rempli.
      ------------------------------------------------------------------- */}
      <div className="space-y-3 rounded-2xl border border-slate-200 bg-slate-50 p-4">
        <label className="flex cursor-pointer items-start gap-3 text-xs leading-relaxed text-slate-600">
          <input
            type="checkbox"
            name="consentement"
            required
            className="mt-0.5 h-4 w-4 shrink-0 rounded border-slate-300 text-brand-600 focus:ring-brand-500"
          />
          <span>
            J&apos;accepte que les informations saisies soient utilisées par
            VERNALYS SOLUTIONS pour traiter ma demande de démonstration et me
            recontacter.{" "}
            <span className="text-red-600" aria-hidden="true">
              *
            </span>
          </span>
        </label>

        <label className="flex cursor-pointer items-start gap-3 text-xs leading-relaxed text-slate-600">
          <input
            type="checkbox"
            name="prospection"
            className="mt-0.5 h-4 w-4 shrink-0 rounded border-slate-300 text-brand-600 focus:ring-brand-500"
          />
          <span>
            J&apos;accepte de recevoir occasionnellement des informations sur
            les produits Vernelys (facultatif, désinscription à tout moment).
          </span>
        </label>
      </div>

      <button
        type="submit"
        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand-600/25 transition hover:bg-brand-700 active:bg-brand-800"
      >
        Demander ma démo
        <svg
          className="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2.5}
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
          />
        </svg>
      </button>

      <p className="text-xs leading-relaxed text-slate-400">
        Ce formulaire ne transmet aucune donnée à nos serveurs : il ouvre votre
        logiciel de messagerie avec un e-mail pré-rempli que vous restez libre
        d&apos;envoyer ou non. Responsable de traitement : VERNALYS SOLUTIONS
        (voir mentions légales). Base légale : mesures
        précontractuelles et consentement. Destinataire : équipe commerciale et
        support de VERNALYS SOLUTIONS. Conservation : 3 ans à compter du dernier
        contact. Vous disposez d&apos;un droit d&apos;accès, de rectification,
        d&apos;effacement, de limitation, d&apos;opposition et de portabilité,
        que vous pouvez exercer à{" "}
        <a
          href="mailto:contact@vernelys.com"
          className="font-medium text-slate-500 hover:underline"
        >
          contact@vernelys.com
        </a>{" "}
        — voir la{" "}
        <Link
          href="/confidentialite"
          className="font-medium text-brand-600 hover:underline"
        >
          politique de confidentialité
        </Link>
        .
      </p>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-1.5 block text-sm font-medium text-slate-700">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm text-slate-900 shadow-sm transition focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 focus:outline-none"
      />
    </div>
  );
}
