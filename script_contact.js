document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contact-form');
    const formResult = document.getElementById('form-result');

    form.addEventListener('submit', async function (event) {
        event.preventDefault();

        const formData = new FormData(form);

        try {
            const response = await fetch(form.action, {
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
                    window.location.href = "/"; // Redirect to home page
                }, 5000);

            } else {
                // Error handling: Display error, but DO NOT redirect
                const data = await response.json();
                formResult.classList.add('error');
                if (Object.hasOwn(data, 'errors')) {
                    formResult.innerHTML = "<p>Oops! There was a problem: " +
                        data.errors.map(error => error.message).join(", ") + "</p>";
                } else {
                    formResult.innerHTML = "<p>Oops! There was a problem submitting your form.</p>";
                }
                //NO SETTIMEOUT HERE
            }

        } catch (error) {
            // Network error handling: Display error, DO NOT redirect
            formResult.classList.add('error');
            formResult.innerHTML = "<p>Oops! There was a network error. Please try again.</p>";
            console.error("Network error:", error);
            //NO SETTIMEOUT HERE
        }
    });
});