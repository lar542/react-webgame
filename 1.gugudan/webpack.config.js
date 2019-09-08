const path = require('path');
const webpack = require('webpack');

module.exports = {
	mode: 'development',
	devtool: 'eval',
	resolve: {
		extensions: ['.js', '.jsx'],
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
					['@babel/preset-env', { //presets의 세부 설정 시
						targets: {
							browsers: ['> 5% in KR'],
							//한국에서 브라우저 점유율이 5% 이상인 브라우저 호환,
							//크롬의 마지막 두 버전만 호환 : 'last 2 chrome versions'
							//옵션 : https://github.com/browserslist/browserslist
						},
						debug: true,
					}], 
					'@babel/preset-react'
				], //plugins들의 모음
				plugins: [],
			},
		}]
	},
	plugins: [
		new webpack.LoaderOptionsPlugin({ debug: true }), //module의 options에 debug: true을 넣어줌
	], //확장 프로그램
	output: {
		path: path.join(__dirname, 'dist'),
		filename: 'app.js',
	},
};