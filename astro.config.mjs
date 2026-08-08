// @ts-check
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
	site: "https://thenewsroo.com",
	integrations: [react(), sitemap()],
	prefetch: {
		prefetchAll: true,
		defaultStrategy: "viewport"
	},
	vite: {
		plugins: [tailwindcss()],
		resolve: {
			dedupe: ["react", "react-dom"]
		}
	}
});
