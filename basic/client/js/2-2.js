function getRandomValue(n) {
  return Math.floor(Math.random() * n);
}

// 사용자에게 값을 받는다.
// 사용자가 값을 입력하지 않을 경우 다시(반복) 물어본다.

const result = ["가위", "바위", "보"];
const user = prompt('가위! 바위! 보!','');


const index = getRandomValue(3);
const computer = result[index];

function game(user, computer) {
  let value = user + computer;
  
  if(!user){
    while(!user){
      user = prompt('가위! 바위! 보!','');
    }
  }

  if (user === computer) {
    return "무승부!";
    // return console.log
  } else {
    switch (value) {
      case "가위보":
      case "바위가위":
      case "보바위":
        return "사용자 승리!"

      case "가위바위":
      case "보가위":
      case "바위보":
        return "컴퓨터 승리!"
        break;
    }
  }
}


const value = game(user,computer);

console.log( value );


// 가위보
// 바위가위
// 보바위

// 가위바위
// 보가위
// 바위보

// user === computer  draw

// 0 ~ 2 까지의 난수를 생성하는 코드 로직 작성 Math.random

// game("가위", "보"); // 사용자 승리 !
// game("보", "가위"); // 컴퓨터 승리 !
// game("주먹", "주먹"); // 무승부 !
