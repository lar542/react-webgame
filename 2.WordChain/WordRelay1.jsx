//필요로하는 패키지나 라이브러리를 불러옴
const React = require('react');
const { Component } = React;

class WordRelay extends Component {
	state = {
		word: "안뇽",
		value: "",
		result: "",
	};
	
	onSubmitForm = (e) => {
		e.preventDefault();
		if(this.state.word[this.state.word.length - 1] == this.state.value[0]){
			this.setState({
				result: "딩동댕",
				word: this.state.value,
				value: "",
			});
		} else {
			this.setState({
				result: "땡",
				value: "",
			});
		}
		this.input.focus();
	};
	
	onChangeInput = (e) => {
		this.setState({
			value: e.target.value
		}); //더 정확히 하고 싶다면 currentTarget으로 지정해도 된다.
	};
	
	input;
	
	onRefInput = (c) => {
		this.input = c;
	};

	//input 속성에 value을 넣으면 onChange를 넣어야한다.
	//그게 아니면 defaultValue를 넣어야 한다. 예를 들어 defaultValue={this.state.value} 식으로 넣는다.
	render() {
		return (
			<>
				<div>{this.state.word}</div>
				<form onSubmit={this.onSubmitForm}>
					<input ref={this.onRefInput} value={this.state.value} onChange={this.onChangeInput} />
					<button>클릭~</button>
				</form>
				<div>{this.state.result}</div>
			</>
		);
	}
}

module.exports = WordRelay; //이 파일의 컴포넌트들을 밖에서도 사용할 수 있게 해주는 것
//쪼갠 파일에서는 이와 같이 위와 아래에 추가로 작성해야 한다. = 노드의 모듈 시스템