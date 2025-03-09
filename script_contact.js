document.addEventListener('DOMContentLoaded', function () {
    console.log("JavaScript Loaded - Form Handling Active");

    const form = document.getElementById('contact-form');
    const formResult = document.getElementById('form-result');

    if (!form) {
        console.error("Form not found!");
        return;
    }

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent default form submission
        console.log("Form Submitted - Handling with Fetch");

        const formData = new FormData(form);

        fetch("https://formspree.io/f/xqapznnb", { // Correct Formspree URL
            method: 'POST',
            body: formData,
            headers: { 'Accept': 'application/json' }
        })
            .then(response => {
                console.log("Response received", response);
                if (response.ok) {
                    formResult.innerHTML = "<p>Thanks for your submission!</p>";
                    formResult.classList.add('success');
                    form.reset();

                    // Redirect after 5 seconds
                    setTimeout(() => {
                        window.location.href = "index.html";
                    }, 5000);
                } else {
                    return response.json().then(data => {
                        console.error("Error submitting form", data);
                        formResult.classList.add('error');
                        formResult.innerHTML = "<p>Oops! There was a problem submitting your form.</p>";
                    });
                }
            })
            .catch(error => {
                console.error("Fetch error", error);
                formResult.classList.add('error');
                formResult.innerHTML = "<p>Oops! There was a network error. Please try again.</p>";
            });
    });
});
