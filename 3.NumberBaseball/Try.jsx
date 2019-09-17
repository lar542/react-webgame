import React, { Component } from 'react';

//NumberBaseball의 코드가 길어질 경우 따로 컴포넌트로 분리한다.
class Try extends Component {
	render() {
		const { tryInfo } = this.props;
		return (
			<li key={this.key}>
				<div>{tryInfo.try}</div>
				<div>{tryInfo.result}</div>
			</li>
		);
	}
}

export default Try;