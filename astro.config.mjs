// @ts-check
import { defineConfig } from "astro/config";
import preact from "@astrojs/preact";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
	site: "https://thenewsroo.com",
	integrations: [preact({ compat: true }), sitemap()],
	prefetch: {
		prefetchAll: true,
		defaultStrategy: "viewport"
	},
	vite: {
		plugins: [tailwindcss()],
		resolve: {
			dedupe: ["preact", "preact/hooks", "preact/compat"]
		}
	}
});
