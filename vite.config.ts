import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    VitePWA({
      manifest: {
        name: "My PWA App",
        short_name: "PWA App",
        start_url: "/SpellTune/",
        display: "standalone",
        background_color: "#ffffff",
        theme_color: "#000000",
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
