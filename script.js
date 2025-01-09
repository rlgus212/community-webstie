const loginForm = document.getElementById('loginForm');

loginForm.addEventListener('submit', (event) => {
    event.preventDefault();

    // 간단한 인증 (사용자 이름, 비밀번호 검사)
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();

    if (username === "test" && password === "password") {
        // 로그인 성공: 메인 페이지로 이동
        window.location.href = "main.html";
    } else {
        // 로그인 실패: 경고 메시지
        alert("Invalid username or password. Please try again.");
    }
});
