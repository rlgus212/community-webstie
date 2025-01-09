// 로그인 폼 제출 이벤트
document.getElementById('loginForm').addEventListener('submit', (event) => {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // 임시 경고 메시지 (서버 연동 시 삭제 가능)
    alert(`Logged in as ${username}`);
    window.location.href = 'main.html'; // 로그인 후 메인 페이지로 이동
});

// "Skip Login" 버튼 클릭 이벤트
document.getElementById('skipLogin').addEventListener('click', () => {
    window.location.href = 'main.html'; // 로그인 없이 메인 페이지로 이동
});
