document.getElementById('loginButton').addEventListener('click', () => {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username && password) {
        alert(`Welcome, ${username}!`);
        window.location.href = 'main.html'; // Replace with your main page
    } else {
        alert('Please fill in all fields.');
    }
});

document.getElementById('skipButton').addEventListener('click', () => {
    window.location.href = 'main.html'; // Replace with your main page
});
