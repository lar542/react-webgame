const path = require('path');

module.exports = {
	name: 'number-baseball-dev',
	mode: 'development',
	devtool: 'eval',
	resolve: {
		extensions: ['.js', '.jsx']
	},
	entry: {
		app: './client',
	},
	module: {
		rules: [{
			test: /\.jsx?$/,
			loader: 'babel-loader',
			options: {
				presets: [
					['@babel/preset-env', {
						targets: {
							browsers: ['> 5% in KR'],
						},
						debug: true,
					}], 
					'@babel/preset-react'
				],
				plugins: [
					'@babel/plugin-proposal-class-properties',
					'react-hot-loader/babel',
				],
			},
		}]
	},
	output: {
		path: path.join(__dirname, 'dist'),
		filename: '[name].js',
		publicPath: '/dist',
	},
};