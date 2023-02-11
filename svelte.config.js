import adapter from "@sveltejs/adapter-static"
import { vitePreprocess } from "@sveltejs/kit/vite"
import importAssets from "svelte-preprocess-import-assets"

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			pages: "build",
			strict: false
		}),
		files: {
			lib: "src"
		}
	},
	preprocess: [vitePreprocess(), importAssets()]
}

export default config
