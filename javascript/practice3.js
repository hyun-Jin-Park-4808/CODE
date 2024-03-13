// 원의 넓이를 반환하는 함수
const calculateCircleArea = function calculateCircleArea(radius) {
    return Math.PI * radius * radius;
};

const result1 = calculateCircleArea(3);
console.log(result1);

// 배열을 전달받아 배열의 요소 중 가장 큰 수를 반환하는 함수
const getMaxOfArray = function getMaxOfArray(array) {
    let result = 0;
    for(let i = 0; i < array.length; i++) {
        if(result < array[i]) {
            result = array[i];
        }
    }
    return result;
};

const result2 = getMaxOfArray([1, 2, 3, 4]);
console.log(result2);

// 체질량 지수 구하는 함수
const calculateBMI = function calculateBMI(weight, height) {
    let bmi = weight / (height * height);
    if(bmi >= 26) {
        return `비만`;
    }
    if(bmi >= 24 && bmi <= 25) {
        return `과체중`;
    }
    if(bmi >= 18.5 && bmi <= 23) {
        return `정상`;
    }
    return `저체중`;
}

const result3 = calculateBMI(66, 1.72);
console.log(result3);