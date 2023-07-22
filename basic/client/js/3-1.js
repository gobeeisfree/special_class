import { attr } from "./lib/index.js";
import { isString } from "./lib/typeOf.js";


// 1. 유틸 함수 만들기  // 매개변수 받는법, return의 유무 
//   - attr() /  setAttr, getAttr
//   - css() /  setCss, getCss

const h1 = document.querySelector('h1');

// Node.getAttribute
// Node.setAttribute

// console.log(h1.getAttribute('class')); // getter
// console.log(h1.setAttribute('data-index', 10)); // setter




// 실행부 작성
// getAttr(h1, 'class');
// setAttr(h1, 'id', 'head');

// attr(h1, 'id', 'head');

// console.log(typeOf([]));


// 2. 모듈 프로그래밍 ( 내보내고 받기 )  calculator



// 3. closure / bindEvent() 

// 이벤트를 생성하는 유틸 함수 

function bindEvent(타겟,타입,콜백){

  
  타겟.addEventListener(타입,콜백);

  return ()=>{
    타겟.removeEventListener(타입,콜백);
  }
}

function 클릭함수(){

}

const removeClickEvent = bindEvent(h1,'click',클릭함수);

// removeClickEvent()

// console.log(  );

// h1.addEventListener('click',클릭함수)




// 4. try catch => data

// 비동기 통신 => 서버와의 소통 


function 정보가져오기(){
  setTimeout(() => {
    try{

      throw new Error('인터넷이 통신이 원활하지 않습니다');
      // console.log('유저 정보 가져옴~');
    }
    catch(err){
      console.log('유저 정보 가져오기 에러! : ' + e.message);
      document.body.insertAdjacentHTML('beforeend',e.message);
    }
  }, 2000);
}




h1.addEventListener('click',정보가져오기)


// 5. map,reduce,forEach,filter 
const data = [
  {
    productName:'간장게장',
    price: 25_000,
    saleRadio:10,
    quantity:5,
  },
  {
    productName:'장어구이',
    price: 28_500,
    saleRadio:24,
    quantity:3,
  },
  {
    productName:'고추잡채',
    price: 17_500,
    saleRadio:13,
    quantity:0,
  },
  {
    productName:'안심 스테이크',
    price: 22_900,
    saleRadio:23,
    quantity:0,
  }
]

// 수량이 남아있는 항목들만 배열로 뽑고싶다.. (filter)
const notEmptyProduct =  data.filter((item)=>{
  return item.quantity !== 0
})

console.log( notEmptyProduct );


// price의 총 합 (reduce)

const total = data.reduce((acc,item)=> acc + item.price,0)

console.log( total );

// const total 


// 세일 가격이 적용된 price만 배열로 뽑고싶다.. (map)

const saleData = data.map((item)=>{
  return `<li>${item.price - (item.price * item.saleRadio * 0.01)}</li>`
})

console.log( saleData );

// 받은 배열 데이터를 화면에 랜더링 하기 (forEach)

saleData.forEach((item)=>{
  document.body.insertAdjacentHTML('beforeend',item);
})