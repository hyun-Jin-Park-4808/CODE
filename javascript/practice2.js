// // 숫자 1부터 999까지 짝수가 몇 개인지 출력하는 코드를 작성하세요.
let count = 0;
for(let i = 1; i <= 999; i++) {
    if(i % 2 === 0) {
        count++;
    }
}

console.log(`짝수의 개수는 ${count}개입니다.`);

// // 구구단 1단부터 9단까지 한 번에 출력하는 코드를 작성하세요.
for(let i = 1; i <= 9; i++) {
    for(let j = 1; j <= 9; j++) {
        console.log(`${i}*${j} = ${i * j} `);
    }
    console.log(`\n`);
}

// 100부터 999까지 정수 중에서 암스트롱 수에 해당하는 숫자를 모두 출력하는 코드를 작성하세요.
// 암스트롱 수 = 세 자리의 정수 중 각 자리의 수를 세제곱한 수의 합과 자신이 같은 수
let sum;
let num;
for(let i = 1; i < 10; i++) {
    for(let j = 0; j < 10; j++) {
        for(let k = 0; k < 10; k++) {
            sum = (i * i * i) + (j * j * j) + (k * k * k);
            number = (i * 100) + (j * 10) + k;
            if(sum === number) {
                console.log(number);
            }
        }
    }
}