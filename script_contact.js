document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contact-form');
    const formResult = document.getElementById('form-result');

    // Check if form element is found. This is a crucial debugging step.
    if (!form) {
        console.error("ERROR: Could not find the form element with id 'contact-form'.  Check your HTML.");
        return; // Stop execution if the form isn't found.
    }

    form.addEventListener('submit', async function (event) {
        event.preventDefault(); // Prevent default form submission

        const formData = new FormData(form);

        // Add a console.log here to make SURE this code is running.
        console.log("Form submission intercepted.  Sending data to Formspree...");

        try {
            const response = await fetch("https://formspree.io/f/xqapznnb", { //Your Formspree Endpoint
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            console.log("Formspree response:", response); // Log the FULL response

            if (response.ok) {
                formResult.innerHTML = "<p>Thanks for your submission!</p>";
                formResult.classList.add('success');
                form.reset();

                setTimeout(() => {
                    formResult.classList.remove('success');
                    formResult.innerHTML = '';
                    window.location.href = "/";
                }, 5000);

            } else {
                const data = await response.json();
                formResult.classList.add('error');
                if (Object.hasOwn(data, 'errors')) {
                    formResult.innerHTML = "<p>Oops! There was a problem: " +
                        data.errors.map(error => error.message).join(", ") + "</p>";
                } else {
                    formResult.innerHTML = "<p>Oops! There was a problem submitting your form.</p>";
                }
            }

        } catch (error) {
            formResult.classList.add('error');
            formResult.innerHTML = "<p>Oops! There was a network error. Please try again.</p>";
            console.error("Network error:", error);
        }
    });
});