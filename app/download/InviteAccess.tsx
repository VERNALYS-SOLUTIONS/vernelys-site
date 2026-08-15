"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";

// Accès au complément Invité : volontairement discret. Le lien n'ouvre qu'un
// champ de mot de passe ; la vérification a lieu côté serveur (aucune empreinte
// n'est embarquée dans le bundle navigateur). Tant que l'API renvoie une URL de
// téléchargement nulle, le bouton reste inactif.
type Status = "closed" | "idle" | "checking" | "error" | "granted";

export default function InviteAccess() {
  const [status, setStatus] = useState<Status>("closed");
  const [message, setMessage] = useState("");
  const [downloadUrl, setDownloadUrl] = useState<string | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const password = String(
      new FormData(event.currentTarget).get("password") ?? ""
    );
    if (!password) return;

    setStatus("checking");
    setMessage("");

    try {
      const response = await fetch("/api/complement-invite", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });
      const data = (await response.json().catch(() => null)) as {
        ok?: boolean;
        downloadUrl?: string | null;
        error?: string;
      } | null;

      if (!response.ok || !data?.ok) {
        setStatus("error");
        setMessage(data?.error ?? "Vérification impossible pour le moment.");
        return;
      }

      setDownloadUrl(data.downloadUrl ?? null);
      setStatus("granted");
    } catch {
      setStatus("error");
      setMessage("Vérification impossible pour le moment. Réessayez.");
    }
  }

  return (
    <div className="mt-8 rounded-3xl border border-brand-200 bg-white px-5 py-5 shadow-sm shadow-brand-600/5 sm:mt-10 sm:px-8 sm:py-7">
      <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
        <span
          aria-hidden="true"
          className="flex h-10 w-10 flex-none items-center justify-center rounded-xl bg-brand-50 text-brand-600"
        >
          <svg
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.7}
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
            />
          </svg>
        </span>
        <div className="min-w-0 flex-1">
          <span className="text-xs font-semibold uppercase tracking-widest text-brand-600">
            Accès réservé
          </span>
          <h3 className="mt-1 text-lg font-bold tracking-tight text-slate-900">
            Complément Invité
          </h3>
          <p className="mt-1 text-sm leading-relaxed text-slate-600">
            Réservé aux clients accompagnés par un cabinet : il fluidifie les
            échanges entre l&apos;expert-comptable et son client. Mêmes
            prérequis et même installation que ci-dessus.
          </p>
        </div>
        {status === "closed" && (
          <button
            type="button"
            onClick={() => setStatus("idle")}
            className="cursor-pointer whitespace-nowrap rounded-full border border-brand-200 bg-brand-50 px-5 py-2.5 text-sm font-semibold text-brand-700 transition hover:border-brand-300 hover:bg-brand-100"
          >
            Accès protégé
          </button>
        )}
      </div>

      {(status === "idle" || status === "checking" || status === "error") && (
        <form
          onSubmit={handleSubmit}
          className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-start"
        >
          <div className="flex-1">
            <label htmlFor="invite-password" className="sr-only">
              Mot de passe du complément Invité
            </label>
            <input
              id="invite-password"
              name="password"
              type="password"
              autoComplete="off"
              autoFocus
              required
              maxLength={200}
              placeholder="Mot de passe fourni par votre cabinet"
              aria-invalid={status === "error"}
              aria-describedby={status === "error" ? "invite-error" : undefined}
              className="w-full rounded-xl border border-slate-300 px-4 py-2.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-brand-500 focus:ring-2 focus:ring-brand-100"
            />
            {status === "error" && (
              <p id="invite-error" role="alert" className="mt-2 text-sm text-red-600">
                {message}
              </p>
            )}
          </div>
          <button
            type="submit"
            disabled={status === "checking"}
            className="cursor-pointer whitespace-nowrap rounded-xl bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-700 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {status === "checking" ? "Vérification…" : "Valider"}
          </button>
        </form>
      )}

      {status === "granted" && (
        <div className="mt-4 rounded-xl border border-brand-100 bg-brand-50 px-4 py-3.5">
          <p className="text-sm font-semibold text-slate-900">Accès validé</p>
          {downloadUrl ? (
            <a
              href={downloadUrl}
              className="mt-3 inline-flex items-center gap-2 rounded-full bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-700"
            >
              <svg
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
                />
              </svg>
              Télécharger le complément Invité
            </a>
          ) : (
            <>
              <button
                type="button"
                disabled
                className="mt-3 inline-flex cursor-not-allowed items-center gap-2 rounded-full bg-slate-300 px-5 py-2.5 text-sm font-semibold text-white"
              >
                Télécharger le complément Invité
              </button>
              <p className="mt-2 text-sm text-slate-600">
                Le téléchargement sera activé prochainement.{" "}
                <Link
                  href="/contact"
                  className="font-semibold text-brand-600 underline underline-offset-4"
                >
                  Nous contacter
                </Link>
                .
              </p>
            </>
          )}
        </div>
      )}
    </div>
  );
}
