// 텍스트 작성과 삭제 즉시 실행 함수
(function() {
    // span 요소 노드 가져오기
    const spanEl = document.querySelector("main h2 span");
    // 화면에 표시할 문장 배열
    const txtArr = ['Back-End Developer', 'Java Delveloper'];
    // 배열의 인덱스 초기값
    let index = 0;
    // 화면에 표시할문장 배열에서 요소를 하나 가져온 뒤, 배열로 만들기
    let currentTxt = txtArr[index].split(""); // ["B", "a", "c", "k", ...]

    function writeTxt() {
        spanEl.textContent += currentTxt.shift(); // 배열 요소("B", "a", "c", "k", ...)를 앞에서부터 한 개씩 추출 후 삭제 
        if(currentTxt.length != 0) { // 출력할 문자 남아있으면 
            setTimeout(writeTxt, Math.floor(Math.random() * 100)); // 일정 시간 흐른 뒤 writeTxt() 다시 호출 
        } else { // currentTxt 배열이 비었으면 
            currentTxt = spanEl.textContent.split(""); // 화면에 표시된 텍스트 가져와서 다시 단어 단위로 분리해서 배열에 저장 
            setTimeout(deleteTxt, 3000); // 3초 뒤에 텍스트 지우기 
        }
    }

    function deleteTxt() {
        currentTxt.pop(); // 배열 요소를 끝에서부터 한 개씩 삭제 
        spanEl.textContent = currentTxt.join(""); // 현재 배열에 있는 요소를 하나의 문자열로 합침. 사용자 문제는 한 글자가 삭제된 것처럼 보임. 
        if(currentTxt.length !== 0) { // 삭제할 문자 남아있다면 
            setTimeout(deleteTxt, Math.floor(Math.random() * 100)); // 다시 문자 뒤에서부터 삭제 
        } else { // 다 삭제하면 
            index = (index + 1) % txtArr.length; // txtArr의 다음 문자열 가져오기 
            currentTxt = txtArr[index].split(""); // 다음 문자열 새로 문자 단위로 쪼개기 
            writeTxt(); // 다시 출력 메서드 실행 
        }
    }
    writeTxt(); // 함수 실행! 
})();

// 수직 스크롤이 발생하면 header 태그에 active 클래스 추가 및 삭제 => 스크롤 내리면 헤더 영역에 까만색 배경 추가됨. 
const headerE1 = document.querySelector("header");
window.addEventListener('scroll', function() {
    this.requestAnimationFrame(scrollCheck)
});
function scrollCheck() {
    let browserScrollY = window.scrollY ? window.scrollY : window.pageYOffset; // 수직 스크롤 위치 가져오기 
    if(browserScrollY > 0) {
        headerE1.classList.add("active");
    } else {
        headerE1.classList.remove("active");
    }
}

// 헤더 영역의 메뉴를 클릭하면 메뉴 영역으로 스크롤이 부드럽게 이동하는 효과 구현
// 애니메이션 스크롤 이동
const animationMove = function(selector) {
    const targetE1 = document.querySelector(selector); // selector 매개변수로 이동할 대상 노드 가져오기
    const browserScrollY = window.pageYOffset; // 현재 웹 브라우저의 스크롤 정보(y 값)
    const targetScrollY = targetE1.getBoundingClientRect().top + browserScrollY; // 이동할 대상의 위치(y 값)
    window.scrollTo({ top: targetScrollY, behavior: 'smooth' }); // 스크롤 이동 
}

// 스크롤 이벤트 연결하기
const scrollMoveEl = document.querySelectorAll("[data-animation-scroll='true']");
for(let i = 0; i < scrollMoveEl.length; i++) {
    scrollMoveEl[i].addEventListener('click', function(e) {
        const target = this.dataset.target;
        animationMove(target);
    });
}
