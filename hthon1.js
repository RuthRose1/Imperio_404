// const LoginButton = document.getElementById("login");
// LoginButton.addEventListener('click', function() {
//     alert('SUCCESSFUL');
// });

//document.addEventListener('DOMContentLoaded', function() {
    const signupForm = document.getElementById('signup-form');

    signupForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the form from submitting

        // You can add your signup logic here, e.g., sending data to a server, etc.

        alert('Signup successful!');
    });
//});

