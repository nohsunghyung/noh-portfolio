module.exports = {
	devServer: {
		overlay: false,
	},
	publicPath: process.env.NODE_ENV === 'production' ? '/noh-portfolio/' : '/',
	outputDir: 'docs',
};
