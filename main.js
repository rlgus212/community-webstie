function showPage(pageId) {
    // 모든 페이지 숨기기
    const pages = document.querySelectorAll('.page');
    pages.forEach((page) => {
        page.classList.remove('active');
    });

    // 선택된 페이지 표시
    const selectedPage = document.getElementById(pageId);
    selectedPage.classList.add('active');

    // 모든 네비게이션 아이템 비활성화
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach((item) => {
        item.classList.remove('active');
    });

    // 선택된 네비게이션 아이템 활성화
    const activeNavItem = document.querySelector(`.nav-item[href="#${pageId}"]`);
    activeNavItem.classList.add('active');
}
