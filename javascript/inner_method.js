// String 
const pw = "1234";
if(pw.length < 5) {
    console.log("비밀번호는 4자리 이상 입력해 주세요.");
}

const email = "test!naver.com";
if(email.includes("@") === false) {
    console.log("올바른 이메일 형식이 아닙니다.");
}

if(email.indexOf("@") === -1) {
    console.log("올바른 이메일 형식이 아닙니다.");
}

// Array
const arr = [10, 20, 30];
arr.push(40); // 배열 맨 뒤에 추가
console.log(arr); // [ 10, 20, 30, 40 ]

arr.pop(); // 배열 맨 뒤 요소 추출
console.log(arr); // [ 10, 20, 30 ]

arr.unshift(0); // 배열 맨 앞에 추가
console.log(arr); // [ 0, 10, 20, 30 ]

arr.shift(); // 배열 맨 앞 요소 추출
console.log(arr); // [ 10, 20, 30 ]

arr.forEach(function(v) { // 배열 요소 하나씩 순회하면서 요소마다 콜백 함수 호출
    console.log(v); // 10 20 30
});

// Date 
const date = new Date(); // 현재 시간 생성
console.log(date); // 2024-03-14T01:37:13.564Z

const date1 = new Date(2022, 11, 25); // 월은 0~11로 나타냄 
console.log(date1); // 2022-12-24T15:00:00.000Z

const date2 = new Date(2022, 10, 25, 5, 30, 50); // 11월을 나타내는 수 = 10, (1~12월을 0~11로 표시)
console.log(date2); // 2022-11-25T09:30:50.000Z // 출력시 UTC로 변환돼서 시간 차이가 난다. 
console.log(date2.toLocaleString('ko-KR', { timeZone: 'Asia/Seoul' })); // 한국 시간으로 출력: 2022. 11. 25. 오전 5:30:50

const date3 = new Date("2022-12-15");
console.log(date3); // 2022-12-15T00:00:00.000Z

const date4 = new Date("2022/12/15/18:30:50");
console.log(date4); // 2022-12-15T09:30:50.000Z

const date5 = new Date(2022, 11, 25, 18, 30, 50);
const dateFormat = `${date5.getFullYear()}-${date5.getMonth()+1}-${date5.getDate()} ${date5.getHours()}:${date5.getMinutes()}:${date5.getSeconds()}`;
console.log(dateFormat); // 2022-12-25 18:30:50

// Math
const floatNum = 10.52;
Math.floor(floatNum); // 10, 버림
Math.ceil(floatNum); // 11, 올림
Math.round(floatNum); //11, 반올림

const random = Math.random(); // 0 이상 1 미만의 난수
console.log(random);

function getMaxRandom(max) {
    return Math.floor(Math.random() * max) + 1;
}
const maxRandom = getMaxRandom(20);
console.log(maxRandom); // 0 이상 20 이하의 무작위 정수

function getMinMaxRandom(min, max) {
    return Math.floor(Math.random() * (max - min)) + 1 + min; // 20을 제외하고 싶으면 +1 삭제
}
const minMaxRandom = getMinMaxRandom(10, 20);
console.log(minMaxRandom); // 10 이상 20 이하의 무작위 정수 

// 배열의 요소 중 가장 큰 수를 출력하라.
const arr1 = [10, 20, 30, 40, 50, 120];
arr1.sort(function(a, b) {
    if(a < b) return 1;
    else if(a > b) return -1;
    else return 0;
});
console.log(arr1[0]); // 120