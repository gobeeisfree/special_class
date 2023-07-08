



let salaries = {
  "이현주": 150,
  "전선용": 200,
  "강예나": 450
}

const arr = [ ["이현주",150],["전선용",200],["강예나",450] ];

// console.log( arr[0][0] );

// console.log( Object.keys(salaries) ); // ['이현주', '전선용', '강예나']
// console.log( Object.values(salaries) ); // [150, 200, 450]
// console.log( Object.entries(salaries) ); 

// destructuring assignment 
// 배열 구조 분해 할당 
// 객체 구조 분해 할당 

let total = 0;

for(let [key,value] of Object.entries(salaries)){
  // let key = keyValue[0];
  // let value = keyValue[1];
  // console.log(key);
  total = total + value;
  // console.log(total);
}

function sum(object){
  
  if(typeof object !== 'object'){
    throw new Error('sum 함수의 매개변수는 객체만 올 수 있습니다.');
  }

  let total = 0;
  for(let value of Object.values(object)){
    total += value;
  }
  
  return total;
}


let result = sum(salaries);


console.log( result );

// 월급의 총 합







// Object.prototype.선범 = 500000000
// for(let key in salaries){

//   if(Object.prototype.hasOwnProperty.call(salaries,key)){

//     console.log(salaries[key]);

//   }
// }

// computed property
























