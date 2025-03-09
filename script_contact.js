document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contact-form');
    const formResult = document.getElementById('form-result');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent default form submission

        const formData = new FormData(form);

        fetch("https://formspree.io/f/xqapznnb", { // Ensure the correct Formspree endpoint
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        })
            .then(response => {
                if (response.ok) {
                    formResult.innerHTML = "<p>Thanks for your submission!</p>";
                    formResult.classList.add('success');
                    form.reset();

                    // Show success message for 5 seconds, then redirect
                    setTimeout(() => {
                        formResult.classList.remove('success');
                        formResult.innerHTML = '';
                        window.location.href = "index.html"; // Redirect to home page
                    }, 5000);
                } else {
                    return response.json().then(data => {
                        formResult.classList.add('error');
                        formResult.innerHTML = "<p>Oops! There was a problem: " +
                            (data.errors ? data.errors.map(error => error.message).join(", ") : "Please try again.") +
                            "</p>";

                        setTimeout(() => {
                            formResult.classList.remove('error');
                            formResult.innerHTML = '';
                        }, 5000);
                    });
                }
            })
            .catch(() => {
                formResult.classList.add('error');
                formResult.innerHTML = "<p>Oops! There was a network error. Please try again.</p>";

                setTimeout(() => {
                    formResult.classList.remove('error');
                    formResult.innerHTML = '';
                }, 5000);
            });
    });
});
