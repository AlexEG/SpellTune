import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  base: "/SpellTune/", // Update this to your repository name
  plugins: [
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["favicon.svg", "robots.txt", "apple-touch-icon.png"],
      manifest: {
        name: "SpellTune",
        short_name: "SpellTune",
        description: "A PWA built with Vite",
        theme_color: "#ffffff",
        icons: [
          {
            src: "/SpellTune/icons/manifest-icon-192.maskable.png",
            sizes: "192x192",
            type: "image/png",
            purpose: "any",
          },
          {
            src: "/SpellTune/icons/manifest-icon-192.maskable.png",
            sizes: "192x192",
            type: "image/png",
            purpose: "maskable",
          },
          {
            src: "/SpellTune/icons/manifest-icon-512.maskable.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any",
          },
          {
            src: "/SpellTune/icons/manifest-icon-512.maskable.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "maskable",
          },
        ],
        screenshots: [
          {
            src: "/SpellTune/screenshots/screenshot1.png",
            sizes: "1920x959",
            type: "image/png",
            form_factor: "wide",
          },
          {
            src: "/SpellTune/screenshots/screenshot2.png",
            sizes: "1082x2402",
            type: "image/png",
          },
        ],
      },
    }),
  ],
});
