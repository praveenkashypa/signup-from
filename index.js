// index.js

// Show Login Form
function showLogin() {
    document.getElementById('signupContainer').style.display = 'none';
    document.getElementById('loginContainer').style.display = 'block';
}

// Show Signup Form
function showSignup() {
    document.getElementById('loginContainer').style.display = 'none';
    document.getElementById('signupContainer').style.display = 'block';
}

// Signup Form Validation
document.getElementById('signupForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form from submitting

    var password = document.getElementById('signupPassword').value;
    var confirmPassword = document.getElementById('confirmPassword').value;
    var termsChecked = document.getElementById('termsCheckbox').checked;
    var passwordError = document.getElementById('passwordError');
    var termsError = document.getElementById('termsError');

    let valid = true;

    // Password Match Check
    if (password !== confirmPassword) {
        passwordError.textContent = "Passwords do not match.";
        valid = false;
    } else {
        passwordError.textContent = "";
    }

    // Terms and Conditions Check
    if (!termsChecked) {
        termsError.textContent = "You must agree to the Terms and Conditions.";
        valid = false;
    } else {
        termsError.textContent = "";
    }

    // If all valid, submit form (you can add real backend code here)
    if (valid) {
        alert("Signup successful!");
        document.getElementById('signupForm').reset();
    }
});

// Login Form Validation
document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form from submitting

    var username = document.getElementById('loginUsername').value;
    var password = document.getElementById('loginPassword').value;
    var loginError = document.getElementById('loginError');

    if (username.trim() === "" || password.trim() === "") {
        loginError.textContent = "Please enter username and password.";
    } else {
        loginError.textContent = "";
        alert("Login successful!");
        document.getElementById('loginForm').reset();
    }
});