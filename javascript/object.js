const person = {}; // 리터럴 방식으로 빈 객체 생성
const me = {
    name:{ // 객체 안에 다른 객체 넣기 
        firstName:"Hyunjin",
        lastName:"Park"
    },
    hobby:["Reading", "Walking"],
    age:28,
    isAdult:true,
    "phone number":"010-0000-0000", // key에 공백이 포함되면 ""안에 key 써주기
    printInfo:function happy() { // 객체 안에 함수 넣기
        console.log("printInfo");
    },
    printHello:function() {
        return "hello";
    }
};

// 객체 속성에 접근하는 방법: 객체 이름["key"], 혹은 마침표 연산자(.) 이용
console.log(me);
// {
//     name: { firstName: 'Hyunjin', lastName: 'Park' },
//     hobby: [ 'Reading', 'Walking' ],
//     age: 28,
//     isAdult: true,
//     'phone number': '010-0000-0000',
//     printInfo: [Function: printInfo],
//     printHello: [Function: printHello]
//   }
console.log(me["name"]["firstName"]); // Hyunjin
console.log(me["hobby"][0]); // Reading
console.log(me["printInfo"]); // [Function: printInfo]
console.log(me.age); // 28
console.log(me.hobby[0]); // Reading
console.log(me.printInfo()); // undefined
console.log(me.printHello()); // hello

me.hobby[1] = "Watching"; // 객체 속성 값 변경하기 
console.log(me.hobby); // [ 'Reading', 'Watching' ]
me.job = "Backend Developer"; // 객체 속성 동적으로 추가하기
delete me.age; // 객체 속성 동적으로 삭제하기 