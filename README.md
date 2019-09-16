# React 학습을 위한 웹 게임
## 사용자 인터페이스를 만들기 위한 JavaScript 라이브러리
* 프레임워크라고도 부른다.
* 웹에서 앱과 같은 사용자 경험을 얻을 수 있다.
* 데이터를 화면에 반영할 때 데이터와 화면을 일치시키는 게 좋아진다.
* 중복되는 요소들을 하나로 묶어줘서 유지보수하기 좋다. (재사용 컴포넌트)
* React는 기본적으로 JavaScript이기 때문에 js 파일이다.

### React Hooks
* React는 class 대신 Hooks를 사용하길 장려하고 있다.
	* 다만 지금까지의 대부분의 코드가 class로 작성되어 있기 때문에 class도 알아야 한다.
* 보통 setState나 ref를 사용하지 않으면 class function으로 빼서 사용하는 데, 함수 안에서도 setState나 ref를 사용할 수 있게 만든 게 Hooks이다.

### React에서 사용하지 못하는 것
* html의 class 속성 대신 className을 사용해야 한다. (JavaScript의 class와 겹치기 때문)
* html의 for 속성 대신 htmlFor를 사용해야 한다. (반복문의 for와 겹치므로)

### 스크립트 컴포넌트가 많을 때 - Webpack
* 스크립트 중복과 유지보수의 어려움의 문제
* 이를 위해 웹 팩이 개발됨
	* 여러 개의 스크립트 파일을 하나로 합쳐 하나의 JavaScript 파일로 만들어준다.
	* 합치면서 babel로 적용해주고 중복되는 스크립트도 없애준다.
* React를 알려면 Node.js를 알아야한다.
	* Node.js : JavaScript 실행기
	
## React를 사용하기 위한 세팅
### Node.js(npm) 설치
* [설치](https://nodejs.org/en/)
* Node.js를 설치할 때 npm이 함께 설치된다.
	* npm(Node Package Manager)는 터미널에서 명령어로 작업하는 프로젝트의 package.json 파일을 생성하고,
	작업에 필요한 패키지들을 설치할 수 있게 도와주는 프로그램
* 설치 후 터미널창에서 node와 npm의 설치여부를 확인해보자.

```
node -v
npm -v
```

### Node.js와 npm 환경변수 설정
* 설치했지만 확인할 수 없는 경우는 환경변수가 세팅되지 않아 동작하지 않는 경우이다. Node.js와 npm의 환경변수를 설정하여 윈도우 전역에서 사용할 수 있게 설정하자.
* 환경변수 > [계정명]에 대한 사용자 변수(U)에 npm을 추가한다.
	* 변수 이름 : npm
	* 변수 값 : npm이 설치된 경로. 설치 경로를 수정하지 않은 경우에는 C:\Users\[계정명]\AppData\Roaming\npm 경로로 설치된다.
* 환경변수 > 시스템 변수(S)의 Path 변수에 Node.js 설치 경로를 추가한다.
* [윈도우 7 참고](http://softzone205.blogspot.com/2017/08/node-npm-nodejs.html), [윈도우 10 참고](https://softzone205.blogspot.com/2018/02/10-node-npm.html)

### Webpack을 설치하자
* JSX를 빠르게 사용하기 위해 아래와 같이 사용했었다.

```html
<script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
<script type="text/babel">
	//작업 내용
</script>
```
* 하지만 이 방식은 학습이나 간단한 데모 사이트를 만드는 데 괜찮지만 운영에서는 맞지 않다.
* 운영에서는 `<script>` 태그를 자동으로 변환시켜줄 JSX 전처리기를 만들기 위해 앞서 Node.js와 npm을 설치한 것이다.
* 먼저 Webpack을 설치하기 위해 터미널을 켜고 프로젝트 디렉토리로 이동하여 아래의 명령어를 입력한다.

```
npm init -y
```
* 실행 후 package.json 파일이 생성된다.
* npm을 이용해 해당 폴더를 프로젝트 파일 폴더로 초기화한다는 의미이다.
	* `-y` : 초기화할 때 설정 값을 모두 기본 값으로 지정한다. 
	모든 값을 기본 값으로 하지 않고 따로 설정하고 싶다면 `-y`를 빼고 직접 입력해 설정할 수 있다.

```
npm i react react-dom
```
* npm이 react와 react-dom을 설치한다.
* 설치가 끝나면 package.json에 기록된다.

```
npm i -D webpack webpack-cli
```
* webpack과 webpack-cli을 설치한다.
	* `-D` : 실제 서비스 할 때는 webpack이 필요없지만 개발할 때만 필요함을 나타낸다.
* 설치 후 package.json을 확인해보면 dependencies는 실제 서비스, devDependencies는 개발할 때만 사용함을 나타낸다.
* `client.jsx` 파일을 생성하여 아래와 같이 npm에서 react와 react-dom을 불러오도록 작성한다.
	* jsx 확장자 : React 전용 파일이고 JSX 문법이 있다는 것을 다른 js 파일과 구별하여 볼 수 있다.

```js
const React = require('react');
const ReactDom = require('react-dom');
```
* 이러한 세팅을 자동화해주는 게 create react app

### webpack 빌드
* 터미널에 ` webpack` 혹은 `npx webpack` 혹은 `npm run dev` 명령어를 사용한다.

```
npm i -D @babel/core @babel/preset-env @babel/preset-react babel-loader
```
* JSX 전처리기를 위해 webpack에 babel을 추가한다.
* `@babel/core` : bable의 기본적인 것
* `@babel/preset-env` : 브라우저에 환경에 맞게 문법을 지원
* `@babel/preset-react` : JSX 지원
* `babel-loader` : babel과 webpack을 연결

### react-hot-loader와 webpack-dev-server 추가
* react 관련 파일을 수정할 때마다 react를 빌드해야하는 불편함이 있다.
* 파일이 변경되면 감지해서 자동으로 빌드되도록 하자.

```
npm i -D react-hot-loader
npm i -D webpack-dev-server
```
  
* webpack-dev-server가 webpack.config.json을 읽어서 빌드를 해주고 서버로 유지해준다.
* package.json에 명령어를 수정한다.

```
"dev": "webpack-dev-server --hot"
```

* client.jsx에서 react-hot-loader를 로드하고 hot으로 감싸준다.
* webpack.config.json에서 module의 plugins에 `react-hot-loader/babel`를 추가해준다.
* webpack-dev-server를 사용하게 되면 dist 폴더 안의 파일을 사용하지 않기 때문에 output에 publicPath 속성을 추가하여 가상경로를 설정해준다.


require : 모드의 모듈 시스템