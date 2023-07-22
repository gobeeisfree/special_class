// 1. debounce


// function 호출 방식
// call (this, 1, 2, 3, 4)
// apply (this, [1,2,3,4])
// bind (this, 1, 2, 3, 4) 실행 x


function debounce(callback, limit = 100){
  let timeout;
  return function(...args){
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      callback.apply(this, args);
    }, limit);
  }
}




// window.addEventListener('resize', debounce((e)=>{
//   console.log(e);
// }, 1000));




// 2. throttle


function throttle(callback, limit = 100) {
  let waiting = false;

  return function () {
    if (!waiting) {
      callback.apply(this, arguments);
      waiting = true;
      setTimeout(() => {
        waiting = false;
      }, limit);
    }
  }
}


window.addEventListener('resize', throttle(()=>{
  console.log('resize!!');
}));