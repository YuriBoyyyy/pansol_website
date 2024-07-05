function toggleForm() {
    var loginForm = document.getElementById("login-form");
    var signupForm = document.getElementById("signup-form");
    loginForm.style.display = "none";
    signupForm.style.display = "block";
}

function login() {
    var username = document.getElementById("login-username").value;
    var password = document.getElementById("login-password").value;
    // Perform validation (e.g., check credentials)
    // For simplicity, just display an alert
    alert("Login clicked\nUsername: " + username + "\nPassword: " + password);
}

function signup() {
    var username = document.getElementById("signup-username").value;
    var email = document.getElementById("signup-email").value;
    var password = document.getElementById("signup-password").value;
    // Perform validation (e.g., check if fields are filled)
    // For simplicity, just display an alert
    alert("Sign Up clicked\nUsername: " + username + "\nEmail: " + email + "\nPassword: " + password);
}
