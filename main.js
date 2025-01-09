function navigate(pageId) {
    // 모든 페이지 숨기기
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });

    // 선택된 페이지 보이기
    document.getElementById(pageId).classList.add('active');

    // 모든 네비게이션 항목 스타일 초기화
    document.querySelectorAll('.nav-item').forEach(link => {
        link.classList.remove('active');
    });

    // 현재 활성화된 네비게이션 항목 스타일 적용
    document.querySelector(`.nav-item[data-target="${pageId}"]`).classList.add('active');
}

// 네비게이션 클릭 이벤트 등록
document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', () => {
        const pageId = item.getAttribute('data-target');
        navigate(pageId);
    });
});

// 기본 페이지 로드 시 초기화
window.addEventListener('DOMContentLoaded', () => {
    navigate('board');
});
