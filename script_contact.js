document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contact-form');
    const formResult = document.getElementById('form-result');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const formData = new FormData(form);

        fetch(form.action, {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        })
            .then(response => {
                if (response.ok) {
                    // Success!
                    formResult.innerHTML = "<p>Thanks for your submission!</p>";
                    formResult.classList.add('success'); // Add success class
                    form.reset();

                    // Set a timeout to hide the notification and redirect
                    setTimeout(() => {
                        formResult.classList.remove('success'); // Remove success class
                        formResult.innerHTML = ''; //Remove the content;
                        window.location.href = "index.html"; // Redirect to home page
                    }, 5000); // 5000 milliseconds = 5 seconds
                } else {
                    // Error - get JSON response and display error message

                    response.json().then(data => {
                        formResult.classList.add('error'); // Add error class.
                        if (Object.hasOwn(data, 'errors')) {
                            formResult.innerHTML = "<p>Oops! There was a problem: " +
                                data["errors"].map(error => error["message"]).join(", ") + "</p>";
                        }
                        else {
                            formResult.innerHTML = "<p>Oops!  There was a problem submitting your form.</p>";
                        }
                        setTimeout(() => {
                            formResult.classList.remove('error'); // Remove error class
                            formResult.innerHTML = ''; //Remove the content;
                            // window.location.href = "index.html"; // Redirect to home page
                        }, 5000); // 5000 milliseconds = 5 seconds
                    })
                }
            })
            .catch(error => {
                formResult.classList.add('error'); // Add error class.
                formResult.innerHTML = "<p>Oops! There was a network error. Please try again.</p>";
                setTimeout(() => {
                    formResult.classList.remove('error'); // Remove error class
                    formResult.innerHTML = ''; //Remove the content;
                    // window.location.href = "index.html"; // Redirect to home page
                }, 5000); // 5000 milliseconds = 5 seconds
            });
    });
});