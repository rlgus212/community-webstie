function navigate(pageId) {
    // Hide all pages
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });

    // Show the selected page
    const targetPage = document.getElementById(pageId);
    if (targetPage) {
        targetPage.classList.add('active');
    } else {
        console.error(`Page with ID "${pageId}" not found.`);
    }

    // Update navigation link styles
    document.querySelectorAll('.nav-item').forEach(link => {
        link.classList.remove('active');
    });

    // Set active link
    const activeLink = document.querySelector(`.nav-item[data-target="${pageId}"]`);
    if (activeLink) {
        activeLink.classList.add('active');
    } else {
        console.error(`Navigation link for page ID "${pageId}" not found.`);
    }
}

// Event listener for navigation links
document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', event => {
        const pageId = item.getAttribute('data-target');
        if (pageId) {
            navigate(pageId);
        } else {
            console.error("Navigation link missing 'data-target' attribute.");
        }
    });
});

// Set the default active page on load
window.addEventListener('DOMContentLoaded', () => {
    const defaultPage = 'board'; // Set your default page ID here
    navigate(defaultPage);
});
