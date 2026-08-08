// @ts-check
import { defineConfig } from "astro/config";
import preact from "@astrojs/preact";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
	site: "https://thenewsroo.com",
	integrations: [preact({ compat: true }), sitemap()],
	prefetch: {
		prefetchAll: true,
		defaultStrategy: "viewport"
	}
});
