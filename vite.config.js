import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        react(),
        VitePWA({
            registerType: "autoUpdate",
            workbox: {
                navigateFallback: "index.html",
            },
            devOptions: {
                enabled: true, // TESTING APP in "pnpm run dev"
            },
            includeAssets: [
                "fonts/comfortaa/Comfortaa-Light.ttf",
                "fonts/comfortaa/Comfortaa-Regular.ttf",
                "fonts/comfortaa/Comfortaa-SemiBold.ttf",
                "fonts/comfortaa/Comfortaa-Bold.ttf",
                "fonts/comfortaa/OFL.txt",
                "fonts/jersey/Jersey20-Regular.ttf",
                "fonts/jersey/OFL.txt",
                "circle-up.svg",
                "paper-bg.jpg",
                "favicon/favicon.ico",
                "favicon/android-chrome-192x192.png",
                "favicon/android-chrome-512x512.png",
                "favicon/apple-touch-icon.png",
                "favicon/favicon-16x16.png",
                "favicon/favicon-32x32.png",
                "favicon/site.webmanifest",
                "screenshots/preview.png",
                "screenshots/preview-mobile.png",
            ],
            manifest: {
                name: "The Shopping List - Tambah & selesaikan!",
                short_name: "Shopping List",
                description: "Your items in shopping list!",
                theme_color: "#17ff9e",
                background_color: "#17ff9e26",
                icons: [
                    {
                        src: "favicon/android-chrome-192x192.png",
                        sizes: "192x192",
                        type: "image/png",
                    },
                    {
                        src: "favicon/android-chrome-512x512.png",
                        sizes: "512x512",
                        type: "image/png",
                    },
                    {
                        src: "favicon/apple-touch-icon.png",
                        sizes: "180x180",
                        type: "image/png",
                    },
                    {
                        src: "favicon/favicon-32x32.png",
                        sizes: "32x32",
                        type: "image/png",
                    },
                    {
                        src: "favicon/favicon-16x16.png",
                        sizes: "16x16",
                        type: "image/png",
                    },
                    {
                        src: "favicon/favicon.ico",
                        sizes: "48x48",
                        type: "image/x-icon",
                    },
                ],
                screenshots: [
                    {
                        src: "screenshots/preview.png",
                        sizes: "1200x630",
                        type: "image/png",
                        form_factor: "wide", // desktop
                    },
                    {
                        src: "screenshots/preview-mobile.png",
                        sizes: "1200x2460",
                        type: "image/png", // mobile
                    },
                ],
            },
        }),
    ],
});
