document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contact-form');
    const formResult = document.getElementById('form-result');

    // *** CRITICAL DEBUGGING: Check if the form is found ***
    if (!form) {
        console.error("ERROR: contact-form element not found!");
        return; // Stop execution if the form isn't found
    }

    console.log("Contact form script loaded and form element found."); // Confirm script is running

    form.addEventListener('submit', async function (event) {
        event.preventDefault();

        console.log("Form submission intercepted."); // Confirm event listener is working

        const formData = new FormData(form);

        // *** Add console.log to check formData ***
        console.log("Form Data:", formData);
        for (let pair of formData.entries()) {
            console.log(pair[0] + ': ' + pair[1]);
        }


        try {
            const response = await fetch("https://formspree.io/f/xqapznnb", { // Replace with your actual endpoint
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            console.log("Formspree response:", response); // Log the response

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