document.getElementById('loginForm').addEventListener('submit', (event) => {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username && password) {
        alert(`Welcome, ${username}!`);
        window.location.href = "main.html"; // 로그인 성공 후 메인 페이지로 이동
    } else {
        alert("Please fill in both fields.");
    }
});

document.getElementById('signupButton').addEventListener('click', () => {
    alert("Redirecting to Sign-Up Page...");
    window.location.href = "signup.html"; // 회원가입 페이지로 이동
});

document.getElementById('forgotPassword').addEventListener('click', () => {
    alert("Redirecting to Password Recovery Page...");
    window.location.href = "forgot-password.html"; // 비밀번호 찾기 페이지로 이동
});
