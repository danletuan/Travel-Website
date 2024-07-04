document.addEventListener('DOMContentLoaded', function () {
    // Fetch the form and its elements
    var form = document.getElementById('contactForm');
    var nameInput = document.getElementById('name');
    var emailInput = document.getElementById('email');
    var messageInput = document.getElementById('message');

    // Handle form submission
    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent form submission for now

        // Reset previous validation styles
        form.classList.remove('was-validated');

        // Validate inputs
        if (nameInput.value.length === 0 || nameInput.value.length > 255) {
            handleInvalidInput(nameInput, 'Please enter your name. Maximum 255 characters allowed.');
        }
        if (!isValidEmail(emailInput.value) || emailInput.value.length > 255) {
            handleInvalidInput(emailInput, 'Please enter a valid email address. Maximum 255 characters allowed.');
        }
        if (messageInput.value.length === 0 || messageInput.value.length > 1000) {
            handleInvalidInput(messageInput, 'Please enter your message. Maximum 1000 characters allowed.');
        }

        // Check if form is valid
        if (form.checkValidity()) {
            showSuccessMessage();
        } else {
            form.classList.add('was-validated');
        }
    });

    // Function to handle invalid input
    function handleInvalidInput(input, message) {
        input.classList.add('is-invalid');
        var feedback = input.nextElementSibling;
        feedback.textContent = message;
        feedback.style.display = 'block';
    }

    // Function to validate email format
    function isValidEmail(email) {
        // Simple email validation regex (can be improved for production use)
        var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }

    // Function to show success message
    function showSuccessMessage() {
        var successMessageDiv = document.createElement('div');
        successMessageDiv.classList.add('alert', 'alert-success', 'mt-3');
        successMessageDiv.textContent = 'Your message has been sent successfully!';
        form.appendChild(successMessageDiv);

        // Optional: Reset form after success
        form.reset();
    }
});
