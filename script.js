document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("loginForm");
    const skipLogin = document.getElementById("skipLogin");

    // 로그인 버튼 동작 (현재는 alert로 대체)
    loginForm.addEventListener("submit", (event) => {
        event.preventDefault();
        alert("Login functionality not implemented yet.");
    });

    // Skip Login 버튼 동작
    skipLogin.addEventListener("click", () => {
        window.location.href = "main.html"; // main.html로 이동
    });
});
