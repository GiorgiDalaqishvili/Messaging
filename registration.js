document.addEventListener("DOMContentLoaded", function () {
    const emailInput = document.getElementById("email-Input");
    const passwordInput = document.getElementById("password-Input");
    const repeatPasswordInput = document.getElementById("repeat-password");
    const registerButton = document.getElementById("register-btn");
     const loginBtn = document.getElementById('login-in')
    const user = {
        username: '',
        email: '',
      };
      
      // Storing an object in localStorage
      localStorage.setItem('user', JSON.stringify(user));
      
      // Retrieving and parsing the object from localStorage
      const storedUserJSON = localStorage.getItem('user');
      const storedUser = JSON.parse(storedUserJSON);
      
      console.log('User:', storedUser);
      



    // Function to check if the passwords match
    function passwordsMatch() {
        return passwordInput.value === repeatPasswordInput.value;
    }

    // Function to enable or disable the Register button based on input fields
    function toggleRegisterButton() {
        if (emailInput.value && passwordInput.value && repeatPasswordInput.value && passwordsMatch()) {
            registerButton.disabled = false;
        } else {
            registerButton.disabled = true;
        }
    }

    // Function to handle the registration process
    function register() {
        if (emailInput.value && passwordInput.value && passwordsMatch()) {
            // Registration successful, redirect to index.html
            window.location.href = "index.html";
        } else {
            // Handle registration error or display a message
            alert("Registration failed. Please check your input.");
        }
    }

    // Add event listeners to input fields to check when they change
    emailInput.addEventListener("input", toggleRegisterButton);
    passwordInput.addEventListener("input", toggleRegisterButton);
    repeatPasswordInput.addEventListener("input", toggleRegisterButton);

    // Add a click event listener to the Register button
    registerButton.addEventListener("click", register);

    //login btn to transfer login file
    loginBtn.addEventListener("click", function(){
        window.location.href = "login.html"
    })
});
