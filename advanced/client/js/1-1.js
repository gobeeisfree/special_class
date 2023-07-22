


// 함수 만들기
// 응용 코드 작성하기
// tab ui 만들기



// css의 정보를 가져오는 함수  get...
// css의 값을 입력해주는 함수  set...




// ELEMENT
// const h1 = document.querySelector('h1');

// console.log( getComputedStyle(h1)['margin'] );

// 함수 만들때 꿀팁 : 실행부를 작성

const syntaxError = message => {throw new SyntaxError(message)};

// function syntaxError(message){
  // throw new SyntaxError(message);
// }

// getNode(node)

function $(node){
  if(typeof node === 'string'){
    node = document.querySelector(node);
  }
  return node;
}

function getCss(node,prop){
  
  if(!node) syntaxError('getCss함수의 node는 필수 입력값 입니다.')
  
  if(typeof node === 'string'){
    node = $(node);
  }

  if(typeof prop !== 'string'){
    syntaxError('getCss함수의 prop은 string 타입 이어야 합니다.');
  }
  
  if(!(prop in document.body.style)){
    syntaxError('getCss함수의 prop은 유효한 css 속성이 아닙니다.');
  }

  return getComputedStyle(node)[prop];
}

function setCss(node,prop,value){
  // const {node,prop,fontSize,msg,active} = options;
  if(typeof node === 'string'){
    node = $(node);
  }
  
  if(!(prop in document.body.style)){
    syntaxError('setCss 함수의 두 번째 인자인 prop은 유효한 css 속성이 아닙니다.')
  }

  if(!value){
    syntaxError('setCss 함수의 세 번째 인자인 value는 필수 입력값 입니다.')
  }
  
  node.style[prop] = value;
  
}

const result = getCss('h1','font-size');



// setCss(node:string, prop:string, value:string) : void
// console.log( result );

const user = {
  nickName:'tiger',
  age:28,
  kind:true
}

// for(let key in user){
//   console.log(user[key]);
// }



// setCss({
//   node:'h1',
//   prop:'font-size',
//   value:'50px',
//   msg:'에러지롱',
//   active:true
// });


// getCss(node: string, prop: string):string




// module program
// 변수의 유효범위 

// (function(css){

//   console.log( css );


// })(css)




// function css(node,prop,value){
//   return !value ? getCss(node,prop) : setCss(node,prop,value);
// }


// node의 값을 문자로 받을 경우

// node가 없을 경우

// prop의 값이 string이 아닐 경우 

// prop의 값이 style의 속성이 아닐 경우


// h1의 폰트 크기를 증가시키거나 감소시키는 함수를 만들어주세요.

// 1. h1, plus, minus 요소를 변수로 지정한다.
// 2. h1의 폰트 사이즈를 가져온다.
// 3. plus,minus에 연결할 이벤트 함수를 만든다.
// 4. h1의 fontsize를 증가시킨다.

// plus 버튼을 클릭했을때 h1의 폰트 사이즈를 1씩 증가 시킨다.
   

const plus = $('.plus');
const minus = $('.minus');
const h1 = $('h1');


let currentSize = parseInt(getCss('h1','font-size'),10);

function handleIncre(){

  setCss(h1,'font-size',`${++currentSize}px`);
}


function handleDecre(){

  setCss(h1,'font-size',`${--currentSize}px`);
}


plus.addEventListener('click',handleIncre);
minus.addEventListener('click',handleDecre)


























