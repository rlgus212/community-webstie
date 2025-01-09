// DOMContentLoaded 이벤트로 DOM이 로드된 후 동작
document.addEventListener('DOMContentLoaded', () => {
    const loginButton = document.querySelector('.login-button'); // 로그인 버튼
    const signupButton = document.querySelector('.signup-button'); // 회원가입 버튼
    const rememberMeCheckbox = document.querySelector('input[type="checkbox"]'); // Remember Me 체크박스

    // 로그인 버튼 클릭 이벤트
    loginButton.addEventListener('click', (event) => {
        event.preventDefault(); // 기본 동작 방지

        // 사용자 입력값 가져오기
        const username = document.querySelector('input[placeholder="Username"]').value.trim();
        const password = document.querySelector('input[placeholder="Password"]').value.trim();

        // 간단한 유효성 검사
        if (!username || !password) {
            alert('Please fill out both the Username and Password fields.');
            return;
        }

        // Remember Me 체크 상태 확인
        if (rememberMeCheckbox.checked) {
            console.log('Remember Me is checked!');
        } else {
            console.log('Remember Me is not checked.');
        }

        // 로그인 성공 가정
        alert(`Welcome, ${username}!`);
        // 메인 페이지로 이동
        window.location.href = 'main.html'; // main.html 경로로 이동
    });

    // 회원가입 버튼 클릭 이벤트
    signupButton.addEventListener('click', (event) => {
        event.preventDefault(); // 기본 동작 방지
        alert('Redirecting to the Sign Up page...');
        // 회원가입 페이지로 이동
        window.location.href = 'signup.html'; // signup.html 경로로 이동
    });
});
