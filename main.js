const navLinks = document.querySelectorAll('.nav-link');
const pages = document.querySelectorAll('.page');

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);

        // 네비게이션 링크 활성화 상태 업데이트
        navLinks.forEach(nav => nav.classList.remove('active'));
        link.classList.add('active');

        // 페이지 전환
        pages.forEach(page => {
            if (page.id === targetId) {
                page.classList.add('active');
            } else {
                page.classList.remove('active');
            }
        });
    });
});
