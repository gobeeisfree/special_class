

function emailReg(text){
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return re.test(String(text).toLowerCase())
}

function pwReg(text){
  const re = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^*+=-]).{6,16}$/;
  return re.test(String(text).toLowerCase());
}



const email = document.querySelector('.email');
const pw = document.querySelector('.pw');
const button = document.querySelector('button');

let emailPass = false;




email.addEventListener('input',function(){

  if( emailReg(this.value) ){
    this.classList.remove('is-active');

    emailPass = true;

  }else{
    this.classList.add('is-active');
    emailPass = false;
  }
})



button.addEventListener('click',()=>{

  if(emailPass){
    console.log('로그인');
  }
})





















