const loginForm = document.getElementById('loginForm');
const skipButton = document.getElementById('skipButton');

loginForm.addEventListener('submit', (event) => {
    event.preventDefault();
    // 로그인 버튼 클릭 시 메인 페이지로 이동
    window.location.href = "main.html";
});

skipButton.addEventListener('click', () => {
    // 로그인 없이 메인 페이지로 이동
    window.location.href = "main.html";
});
