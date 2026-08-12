"use client";

import type { ReactNode } from "react";

// URL de l'installeur servie par l'ANCIEN domaine (viperholding.com), qui
// conserve le proxy vers le Vercel Blob store. Le clic ouvre un onglet sur
// l'ancien domaine, y déclenche le téléchargement du .msi, puis referme
// automatiquement l'onglet une fois le téléchargement lancé.
const DOWNLOAD_URL =
  "https://viperholding.com/download/excel-addin/stable/VernalysInstaller.msi";

// Délai laissé au navigateur pour amorcer le téléchargement avant de fermer
// l'onglet (un .msi est servi en pièce jointe : la page reste vide, seul le
// téléchargement démarre, donc window.close() reste valide).
const CLOSE_DELAY_MS = 3000;

export default function DownloadButton({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  function handleClick() {
    const win = window.open(DOWNLOAD_URL, "_blank");
    if (win) {
      window.setTimeout(() => {
        try {
          win.close();
        } catch {
          /* onglet déjà fermé ou inaccessible : sans effet */
        }
      }, CLOSE_DELAY_MS);
    } else {
      // Fenêtres popup bloquées : repli sur un téléchargement dans l'onglet courant.
      window.location.href = DOWNLOAD_URL;
    }
  }

  return (
    <button type="button" onClick={handleClick} className={className}>
      {children}
    </button>
  );
}
