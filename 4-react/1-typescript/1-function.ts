// 소프트웨어 공학 - 변수명 : 타입
// C - 타입 변수명 (int num)

// C++ - 변수명 : 타입

// Java - 타입 변수명 (int num)
// C#   - 타입 변수명 (int num)

// 함수의 선언
// 변수명: type
// function 함수명(매개변수1: 타입, 매개변수2: 타입): 함수의 반환타입 {
// ...
// }
function sum(a: number, b: number): number {
  return a + b;
}

console.log(sum(1, 2));
// console.log(sum("1","2"));  // type error, number 타입만 매개변수로 가능함

// 첫번째 글자를 대문자로 변환하는 함수
function capitalize(str: string) {
  // IDE(intergrated development enviroment)에서 매개변수가 문자인 것을 인지함
  // 해당 형식에 맞는 함수나 속성을 자동완성하여 사용할 수 있게됨.

  return str[0].toUpperCase() + str.substr(1);
}
console.log(capitalize("javascript"));