document.addEventListener("DOMContentLoaded", function() {
    const registrationForm = document.getElementById("registration");
    const medicationForm = document.getElementById("medication-form");

    registrationForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const name = document.getElementById("name").value;
        const age = document.getElementById("age").value;
        const gender = document.getElementById("gender").value;
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        // You can now use the 'name', 'age', 'gender', 'username', and 'password' variables
        // to handle user registration logic, like sending the data to a server or storing it locally.
    });

    medicationForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const medicationName = document.getElementById("medication-name").value;
        const dosage = document.getElementById("dosage").value;
        const frequency = document.getElementById("frequency").value;
        const instructions = document.getElementById("instructions").value;
        
        // Handle medication entry logic here
    });
});
