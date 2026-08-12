import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Vernelys · Solutions pour experts-comptables",
    short_name: "Vernelys",
    description:
      "Vernelys, le complément Excel pour les cabinets d'expertise comptable, édité par VERNALYS SOLUTIONS.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#006039",
    icons: [{ src: "/icon.svg", sizes: "any", type: "image/svg+xml" }],
  };
}
