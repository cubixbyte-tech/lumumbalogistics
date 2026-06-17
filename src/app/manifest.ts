import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Lumumba Logistics",
    short_name: "Lumumba",
    description: "Reliable nationwide freight transportation built on precision, safety, and clear communication.",
    start_url: "/",
    scope: "/",
    display: "standalone",
    background_color: "#000b1e",
    theme_color: "#000b1e",
    icons: [
      { src: "/icon.png", sizes: "512x512", type: "image/png" },
      { src: "/apple-icon.png", sizes: "180x180", type: "image/png", purpose: "any" },
    ],
  };
}