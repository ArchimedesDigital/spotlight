const autoprefixer = require('autoprefixer');
const eslintFormatter = require('react-dev-utils/eslintFormatter');
const path = require('path');
const webpack = require('webpack');

const paths = {
	appSrc: path.resolve(__dirname, 'app/web')
}

module.exports = {
	devtool: 'cheap-module-source-map',
	entry: [
		require.resolve('react-dev-utils/webpackHotDevClient'),
		'./app/web/index.js'
	],
	module: {
		rules: [
			// TODO: Disable require.ensure as it's not a standard language feature.
			// We are waiting for https://github.com/facebookincubator/create-react-app/issues/2176.
			// { parser: { requireEnsure: false } },

			// First, run the linter.
			// It's important to do this before Babel processes the JS.
			/*{
				test: /\.(js|jsx|mjs)$/,
				enforce: 'pre',
				use: [
					{
						options: {
							formatter: eslintFormatter,
							eslintPath: require.resolve('eslint')
						},
						loader: require.resolve('eslint-loader'),
					},
				],
				include: paths.appSrc,
			},*/
			{
				// "oneOf" will traverse all following loaders until one will
				// match the requirements. When no loader matches it will fall
				// back to the "file" loader at the end of the loader list.
				oneOf: [
					// "url" loader works like "file" loader except that it embeds assets
					// smaller than specified limit in bytes as data URLs to avoid requests.
					// A missing `test` is equivalent to a match.
					{
						test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
						loader: require.resolve('url-loader'),
						options: {
							limit: 10000,
							name: 'static/media/[name].[hash:8].[ext]',
						},
					},
					// Process JS with Babel.
					{
						test: /\.(js|jsx|mjs)$/,
						include: paths.appSrc,
						loader: require.resolve('babel-loader'),
						options: {

							// This is a feature of `babel-loader` for webpack (not Babel itself).
							// It enables caching results in ./node_modules/.cache/babel-loader/
							// directory for faster rebuilds.
							cacheDirectory: true,
						},
					},
					// "postcss" loader applies autoprefixer to our CSS.
					// "css" loader resolves paths in CSS and adds assets as dependencies.
					// "style" loader turns CSS into JS modules that inject <style> tags.
					// In production, we use a plugin to extract that CSS to a file, but
					// in development "style" loader enables hot editing of CSS.
					{
						test: /\.css$/,
						use: [
							require.resolve('style-loader'),
							{
								loader: require.resolve('css-loader'),
								options: {
									importLoaders: 1,
								},
							},
							{
								loader: require.resolve('postcss-loader'),
								options: {
									// Necessary for external CSS imports to work
									// https://github.com/facebookincubator/create-react-app/issues/2677
									ident: 'postcss',
									plugins: () => [
										require('postcss-flexbugs-fixes'),
										autoprefixer({
											browsers: [
												'>1%',
												'last 4 versions',
												'Firefox ESR',
												'not ie < 9', // React doesn't support IE8 anyway
											],
											flexbox: 'no-2009',
										}),
									],
								},
							},
						],
					},
					// "file" loader makes sure those assets get served by WebpackDevServer.
					// When you `import` an asset, you get its (virtual) filename.
					// In production, they would get copied to the `build` folder.
					// This loader doesn't use a "test" so it will catch all modules
					// that fall through the other loaders.
					{
						// Exclude `js` files to keep "css" loader working as it injects
						// it's runtime that would otherwise processed through "file" loader.
						// Also exclude `html` and `json` extensions so they get processed
						// by webpacks internal loaders.
						exclude: [/\.js$/, /\.html$/, /\.json$/],
						loader: require.resolve('file-loader'),
						options: {
							// FIXME: update this path
							name: 'static/media/[name].[hash:8].[ext]',
						},
					},
				],
			},
			// ** STOP ** Are you adding a new loader?
			// Make sure to add the new loader(s) before the "file" loader.
		],
		strictExportPresence: true,
	},
	node: {
		dgram: 'empty',
		fs: 'empty',
		net: 'empty',
		tls: 'empty',
		child_process: 'empty',
	},
	output: {
		chunkFilename: '[name].chunk.js',
		filename: 'webpack_bundle.js',
		path: path.resolve(__dirname, 'app/assets/javascripts/spotlight'),
		pathinfo: true,
		publicPath: "/",
	},
	performance: {
		hints: false,
	},
	plugins: [
		new webpack.EnvironmentPlugin({
			NODE_ENV: 'development',
		}),
		new webpack.NamedModulesPlugin()
	],
	resolve: {
		extensions: ['*', '.js', '.jsx']
	},
	devServer: {
		contentBase: path.resolve(__dirname, 'app/assets/javascripts/spotlight')
	}
};
