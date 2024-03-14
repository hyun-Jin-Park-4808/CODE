let num = 10;
let copyNum = num; // 변수 num의 데이터를 copyNum에 할당 => 한쪽 데이터가 변경되어도 다른 데이터데 영향을 미치지 않음 => 깊은 복사
const person = {
    name:"Hyunjin Park"
};

const copyPerson = person; // 얕은 복사: 두 변수는 같은 주소 값을 가지게 되고, 바라보는 원본 데이터도 같다. 