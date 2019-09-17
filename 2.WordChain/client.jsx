const React = require('react');
const ReactDom = require('react-dom');
const { hot } = require('react-hot-loader/root');

const WordRelay = require('./WordRelay'); //다른 jsx 파일을 불러와서 합친다. 노드의 모듈 시스템

const Hot = hot(WordRelay);

ReactDom.render(<Hot />, document.querySelector('#root'));