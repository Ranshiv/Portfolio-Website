document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contact-form');
    const formResult = document.getElementById('form-result');

    form.addEventListener('submit', async function (event) {
        event.preventDefault();

        const formData = new FormData(form);

        // *** CORRECTED: Use the Formspree endpoint directly here ***
        const formspreeEndpoint = "https://formspree.io/f/xqapznnb"; // Replace with YOUR actual endpoint

        try {
            const response = await fetch(formspreeEndpoint, { // Use the variable here
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

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