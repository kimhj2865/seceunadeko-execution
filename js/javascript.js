const elements = document.querySelectorAll(".text-box p"); // 모든 <p> 태그 선택
let textIndex = 0; // 현재 표시할 요소의 인덱스
let charIndex = 0; // 현재 요소에서 출력할 글자 위치
let content = elements.length > 0 ? elements[textIndex].textContent.trim() : ""; // 현재 요소의 텍스트

// 모든 문장 숨긴 상태에서 첫 번째 문장만 보이도록 설정
elements.forEach(el => el.style.display = "none");
if (elements.length > 0) {
    elements[0].style.display = "block"; // 첫 번째 문장만 표시
    elements[0].textContent = ""; // 텍스트를 초기화하여 깜빡임 방지
}

function typing() {
    if (charIndex < content.length) {
        elements[textIndex].innerHTML = content.slice(0, charIndex + 1); // 한 글자씩 추가
        charIndex++;
    } else if (textIndex < elements.length - 1) {
        // 현재 문장 출력 완료 → 다음 문장 표시 후 타이핑 시작
        textIndex++;
        charIndex = 0;
        content = elements[textIndex].textContent.trim();
        elements[textIndex].style.display = "block"; // 숨겼던 문장 보이게 함
        elements[textIndex].textContent = ""; // 초기화하여 깜빡임 방지
    } else {
        clearInterval(typingInterval); // 마지막 문장까지 출력되면 멈춤
    }
}

const typingInterval = setInterval(typing, 100); // 타이핑 속도 조절 (100ms)
