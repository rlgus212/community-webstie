function navigate(pageId) {
    // Hide all pages
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });

    // Show the selected page
    document.getElementById(pageId).classList.add('active');

    // Update navigation link styles
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
    });

    // Set active link
    document.querySelector(`.nav-link[href="#${pageId}"]`).classList.add('active');
}
