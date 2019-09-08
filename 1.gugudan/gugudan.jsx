const React = require('react');
const { useState, useRef } = React; //구조분해문법

const GuGuDan = () => {
	const [first, setFirst] = useState(Math.ceil(Math.random() * 9)); 
	const [second, setSecond] = useState(Math.ceil(Math.random() * 9));
	const [value, setValue] = useState('');
	const [result, setResult] = useState('');
	const onRefInput = useRef(null);
	
	const onSubmit = (e) => {
		e.preventDefault();  
		if(parseInt(value) === first * second){
			setResult('정답 : ' + value);
			setFirst(Math.ceil(Math.random() * 9));
			setSecond(Math.ceil(Math.random() * 9));
			setValue('');
		} else {
			setResult('땡!');
			setValue('');
		}
		onRefInput.current.focus();
	};
	const onChange = (e) => {
		setValue(e.target.value);
	};
	
	return (<>
		<div>{first} 곱하기 {second}는?</div>
		<form onSubmit={onSubmit}>
			<input type="number" value={value} ref={onRefInput}  onChange={onChange} />
			<button>입력</button>
		</form>
		<div>{result}</div>	
	</>);
}

module.exports = GuGuDan;