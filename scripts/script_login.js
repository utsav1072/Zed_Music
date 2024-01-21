const users = [
    { username: 'user123', password: 'password123' },
    {username: 'utsav', password: '123'}
]



function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (!username || !password) {
        alert("Please enter both username and password.");
        return;
    }


    const user = users.find(user => user.username === username && user.password === password);
    if (user) {
        alert("Login successful!");
        window.location.replace('../index.html');
    } else {
        alert("Invalid username or password.");
    }
}

function signup() {
    var newUsername = document.getElementById("newUsername").value;
    var newPassword = document.getElementById("newPassword").value;
    if (!newUsername || !newPassword) {
        alert("Please enter both username and password.");
        return;
    }

    if (users.some(user => user.username === newUsername)) {
        alert("Username is already taken. Please choose another one.");
        return;
    }
    users.push({ username: newUsername, password: newPassword });
    alert("Registration successful! You can now log in.");
    window.location.href = 'login_html.html';
}