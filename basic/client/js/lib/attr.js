import { isString } from "./typeOf.js";

function getAttr(target, prop) {

  // let target = h1;
  // let prop = 'class';

  // validation (확인)
  if (isString(target)) target = document.querySelector(target);

  if (!isString(prop)) throw new Error('getAttr 함수의 두 번째 인수는 문자 타입 이어야 합니다.');


  return target.getAttribute(prop);
}


function setAttr(target, prop, value) {
  if (isString(target)) target = document.querySelector(target);
  
  if (!isString(prop)) throw new Error('getAttr 함수의 두 번째 인수는 문자 타입 이어야 합니다.');

  if (!value) throw new Error('setAttr 함수의 세 번째 인수는 필수 값 이어야 합니다.')
  
  target.setAttribute(prop, value)
}



export const attr = (target, prop, value) => !value ? getAttr(target, prop) : setAttr(target, prop, value);