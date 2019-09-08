//노드에서 경로 조작하는 것
const path = require('path');

//쪼갠 파일들을 하나로 합쳐준다.
module.exports = {
	name: 'wordrelay-setting',
	mode: 'development', //실서비스에서는 production으로 변경
	devtool: 'eval', //빠르게, 운영 때는 hidden-source-map
	resolve: {
		extensions: ['.js', '.jsx'] //합칠 파일들의 확장자 나열
	},
	entry: {
		app: ['./client'], //다른 파일에서 불러오는 파일은 적어줄 필요없음
	}, //합칠 파일들
	module: {
		rules: [{
			test: /\.jsx?$/, //js와 jsx 파일에 규칙 적용
			loader: 'babel-loader',
			options: {
				presets: [
					['@babel/preset-env', { //presets의 세부 설정 시
						targets: {
							browsers: ['> 5% in KR', 'last 2 chrome versions'],
							//한국에서 브라우저 점유율이 5% 이상인 브라우저 호환,
							//크롬의 마지막 두 버전만 호환
						},
						debug: true,
					}], 
					'@babel/preset-react'
				], //plugins들의 모음
				plugins: ['@babel/plugin-proposal-class-properties'],
			},
		}]
	}, //entry 파일들을 읽고 module을 적용한 후 output으로 뺀다
	output: {
		path: path.join(__dirname, 'dist'), //현재 폴더 안의 dist 폴더
		filename: 'app.js'
	}, //합친 파일들을 조작할 경로.
};