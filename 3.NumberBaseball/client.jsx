import React from 'react';
import ReactDom from 'react-dom';
import { hot } from 'react-hot-loader/root';

import NumberBaseball from './NumberBaseball'; //다른 jsx 파일을 불러와서 합친다. 노드의 모듈 시스템

const Hot = hot(NumberBaseball);

ReactDom.render(<Hot />, document.querySelector('#root'));