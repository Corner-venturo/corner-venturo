import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: false,
	eslint: {
		// Only enable ESLint in development
		ignoreDuringBuilds: process.env.NODE_ENV === 'production'
	},
	typescript: {
		// Dangerously allow production builds to successfully complete even if
		// your project has type errors.
		ignoreBuildErrors: true
	},
	webpack: (config) => {
		// 添加路徑別名解析
		config.resolve.alias = {
			...config.resolve.alias,
			'@': path.resolve(__dirname, './src'),
			'@fuse': path.resolve(__dirname, './src/@fuse'),
			'@auth': path.resolve(__dirname, './src/@auth'),
			'@i18n': path.resolve(__dirname, './src/@i18n'),
			'@history': path.resolve(__dirname, './src/@history'),
			'@schema': path.resolve(__dirname, './src/@schema')
		};

		if (config.module && config.module.rules) {
			config.module.rules.push({
				test: /\.(json|js|ts|tsx|jsx)$/,
				resourceQuery: /raw/,
				use: 'raw-loader'
			});
		}

		return config;
	}
};

export default nextConfig;
