document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contact-form');
    const formResult = document.getElementById('form-result');

    form.addEventListener('submit', async function (event) { // Use async/await
        event.preventDefault(); // Prevent the default form submission

        const formData = new FormData(form); // Collect form data

        try { // Use try/catch for error handling
            const response = await fetch(form.action, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json' // Tell Formspree we expect a JSON response
                }
            });

            if (response.ok) {
                // Success!
                formResult.innerHTML = "<p>Thanks for your submission!</p>";
                formResult.classList.add('success'); // Add success class
                form.reset(); // Clear the form fields

                // Set a timeout to hide the notification and redirect
                setTimeout(() => {
                    formResult.classList.remove('success'); // Remove success class
                    formResult.innerHTML = ''; //Remove the content;
                    window.location.href = "index.html"; // Redirect to home page
                }, 5000); // 5000 milliseconds = 5 seconds
            } else {
                // Error
                const data = await response.json(); // Await the JSON parsing
                formResult.classList.add('error'); // Add error class.
                if (Object.hasOwn(data, 'errors')) {
                    formResult.innerHTML = "<p>Oops! There was a problem: " +
                        data.errors.map(error => error.message).join(", ") + "</p>";
                }
                else {
                    formResult.innerHTML = "<p>Oops!  There was a problem submitting your form.</p>";
                }
            }

        } catch (error) {
            formResult.classList.add('error');
            formResult.innerHTML = "<p>Oops! There was a network error. Please try again.</p>";
            console.error("Network error:", error); // Log the error for debugging
        }
    });
});