import adapter from '@sveltejs/netlify';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter()
	},
  preprocess: vitePreprocess(),
};

export default config;
