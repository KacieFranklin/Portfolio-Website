import adapter from '@sveltejs/adapter-node';

const dev = process.env.NODE_ENV === 'development';
const repoName = 'Portfolio-Website';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		paths: {
			base: dev ? '' : `/${repoName}`
		},
	}
};

export default config;
