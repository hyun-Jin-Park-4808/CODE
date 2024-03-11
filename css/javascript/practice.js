var num = 20; 
var num = 10 + 20;// var는 중복 선언이 가능합니다. 변수가 기존 값을 덮어버립니다. 
let num2 = 20 + 30; // let은 중복 선언이 불가능하고, 호이스팅되지 않습니다. 

console.log(varNum); // undefined
var varNum = 10;

// console.log(letNum); // 호이스팅 되지 않아 에러 발생  
// let letNum = 10;
// 호이스팅: var 키워드로 변수를 선언하고 할당할 때, 변수 선언을 자바스크립트의 스코프 맨 위로 올려 실행하는 것입니다.
 
const num3 = 10; // 상수는 재할당할 수 없습니다. 
// num3 = 30; 이런 식으로 재할당하면 오류 발생!

let string1 = "문자열은 큰 따옴표(\")나 작은 따옴표(\')로 감싸면 됩니다."; // 이스케이프 문자 \ 사용해야 순수한 문자로 따옴표를 인식합니다.
let string2 = 'Hello';
let string3 = `Hello`; // 템플릿 문자열

let num4 = 0.1 + 0.2; // 부동 소수점 방식으로 표현되기 때문에 실수 계산이 정확하지 않습니다. 

let empty;
console.log(empty); // undefined
empty = null; 
console.log(empty); // null 

// 배열, 객체 리터럴 
let array = ['abc', 10, true, undefined, null, [], {}, function(){}]; // 배열은 모든 자료형을 정의할 수 있습니다. 
let literal = {name:이름, email:이메일}; // 객체 리터럴은 객체를 정의하는 가장 간단한 방법으로, 객체를 정의할 때 중괄호 안에 키와 값의 한 쌍으로 이뤄진 속성이 들어간다.
console.log(literal.name); // 이름