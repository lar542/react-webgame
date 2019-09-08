const React = require('react');
const ReactDom = require('react-dom');

const WordRelay = require('./WordRelay'); //다른 jsx 파일을 불러와서 합친다.

ReactDom.render(<WordRelay />, document.querySelector('#root'));