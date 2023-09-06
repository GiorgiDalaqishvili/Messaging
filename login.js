document.addEventListener("DOMContentLoaded", function () {
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");
    const loginButton = document.getElementById("login-button");
    const errorMessage = document.getElementById("error-message");
    
    // Register button
    const registerButton = document.getElementById("register-button");

    // Simulated user data (replace with your actual user data)
    const registeredUser = {
        username: "john_doe",
        password: "secret_password",
    };

    // Event listener for the login button
    loginButton.addEventListener("click", function () {
        const enteredUsername = usernameInput.value;
        const enteredPassword = passwordInput.value;

        // Check if the entered username and password match the registered user data
        if (enteredUsername === registeredUser.username && enteredPassword === registeredUser.password) {
            // Redirect to the main page (replace 'index.html' with your main page URL)
            window.location.href = "index.html";
        } else {
            // Display an error message if login fails
            errorMessage.textContent = "Invalid username or password. Please try again.";
        }
    });

    // Event listener for the Register button
    registerButton.addEventListener("click", function () {
        // Redirect to the registration page (register.html)
        window.location.href = "registration.html";
    });
});
