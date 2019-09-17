//노드의 ES2015 문법
import React, { Component } from 'react';
import Try from './Try';

//숫자 4개를 겹치지 않고 랜덤으로 뽑는 함수
//함수를 밖으로 뺄 수 있는 경우 => this를 사용하지 않는 경우
function getNumbers(){
	const candidate = [1, 2, 3, 4, 5, 6, 7, 8, 9];
	const array = [];
	for(let i = 0; i < 4; i++){
		const chosen = candidate.splice(Math.floor(Math.random() * candidate.length), 1)[0];
		array.push(chosen);
	}
	return array;
}

class NumberBaseball extends Component {
	state = {
		result: '',
		value: '',
		answer: getNumbers(), 
		tries: [],
	};

	//화살표 함수로 사용하지 않고 일반적인 함수 선언으로 사용하게 되면
	//함수 안에서 this.state를 사용할 수 없다.
	/*
	혹은 상단에 이렇게 작성해야 한다.
	constructor(props) {
		super(props);
		this.state = {

		};
		this.onSubmitForm = this.onSubmitForm.bind(this);
		this.onChangeInput = this.onChangeInput.bind(this);
	}
	하지만 문법이 화살표 함수를 사용하는 것으로 개선됨으로써 state도 this와 함께 사용하지 않게 됨
	*/
	onSubmitForm = (e) => {
		const { result, value, tries, answer } = this.state; //구조분해
		e.preventDefault();
		if(value === answer.join('')){
			this.setState({
				result: '홈런!!!',
				tries: [
					...tries,
					{ try: value, result: '홈런!!!' },
				] 
				//리액트에서는 기존 배열에 push를 해선 안 된다. 리액트가 무엇이 변경되었는 지 감지를 못함
				//그렇기 때문에 새 배열에 기존 배열을 복사해서 넘긴다.
				//리액트는 기존 state에 변경점이 있을 때 render가 호출이 되는 데
				//push를 사용하여 기존에 값을 넣으면 === 비교 시 true로 나오기 때문
			});
			alert('게임을 다시 시작합니다!');
			this.setState({
				value: '',
				answer: getNumbers(),
				tries: [],
			});
		} else {
			const answerArray = value.split('').map((v) => parseInt(v));
			let strike = 0;
			let ball = 0;
			if(tries.length >= 9){ //10번이상 틀렸을 때
				this.setState({
					result: `10번 넘게 틀려서 실패! 답은 ${answer.join(",")}였습니다!`,
				});
				alert('게임을 다시 시작합니다!');
				this.setState({
					value: '',
					answer: getNumbers(),
					tries: [],
				});
			} else { //10번 이내로 틀렸을 때
				for(let i = 0; i < 4; i++){
					if(answerArray[i] === answer[i]){
						strike++;
					} else if (answer.includes(answerArray[i])){
						ball++;
					}
				}
				this.setState({
					tries: [
						...tries,
						{ try: value, result: `${strike} 스트라이크, ${ball} 볼입니다` },
					],
					value: ''
				});
			}
		}
	};

	onChangeInput = (e) => {
		console.log(this.state.answer);
		this.setState({
			value: e.target.value
		});
	};

	render(){
		const { result, value, tries } = this.state; //구조분해
		return (
			<>
				<h1>{result}</h1>
				<form onSubmit={this.onSubmitForm}>
					<input maxLength={4} value={value} onChange={this.onChangeInput} />
				</form>
				<div>시도 : {tries.length}</div>
				<ul>
					{tries.map((v, i) => 
						<Try key={`${i + 1}차 시도 : `} tryInfo={v} />
					)}
				</ul>
			</>
		);
	}
	//리액트의 반복문 map
	//보통은 배열 안에 객체를 넣음
	//map을 출력하는 컴포넌트에 반드시 key(고유한 값, 성능 최적화를 위해 필요)를 포함시켜야 한다.
	//리액트가 key를 보고 같은 컴포넌트인지 아닌지 판단하기 때문
	//HTML에서 태그의 속성은 애트리뷰트라고 부르고 리액트에서는 props라고 부름
	//컴포넌트 파일로 넘기기 위함 : <Try key={v.fruit} v={v} i={i} />

	/*
	.map((v) => {
		return (
			<li key={v.fruit}><b>{v.fruit}</b> - {v.taste}</li>
		);
	})}
	에서 {} return 생략 가능, 생략된 경우 자동으로 바로 return
	*/
	//v는 요소, i는 인덱스
	//key로 i(인덱스)를 지정해선 안 된다 => 성능 최적화할 때 문제가 된다
	//요소가 추가만 되는 배열인 경우 key로 i를 써도 되긴 하다. (삭제 X)
}

//여러 개 사용 가능
//export const hello = 'hello'; //가져올 때는 import { hello }
//export const bye = 'hello';

//한 번만 사용 가능
export default NumberBaseball; //가져올 때는 import NumberBaseball

/*
노드의 common.js 문법 -> 노드에서 이 문법만 지원한다
const React = require('react');
exports.hello = 'hello';
module.exports = NumberBaseball;

webpack은 노드가 실행시키기 때문에 webpack.config.js에 import를 사용하면 에러가 나지만
다른 .jsx 파일은 babel이 import도 require로 변환하기 때문에 사용할 수 있다. 

노드 모듈 시스템에서
exports.hello = 'a'
module.exports = { hello: 'a' };
는 같다
*/