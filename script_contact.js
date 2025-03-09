document.addEventListener('DOMContentLoaded', function () {
    console.log("JavaScript Loaded - Form Handling Active");

    const form = document.getElementById('contact-form');
    if (!form) {
        console.error("Form not found!");
        return;
    }

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent default form submission
        console.log("Form Submitted - Handling with Fetch");

        const formData = new FormData(form);

        fetch("https://formspree.io/f/xqapznnb", { // Ensure correct Formspree endpoint
            method: 'POST',
            body: formData,
            headers: { 'Accept': 'application/json' }
        })
            .then(response => {
                console.log("Response received", response);
                if (response.ok) {
                    document.getElementById('form-result').innerHTML = "<p>Thanks for your submission!</p>";
                    setTimeout(() => window.location.href = "index.html", 5000);
                } else {
                    console.error("Error submitting form", response);
                }
            })
            .catch(error => console.error("Fetch error", error));
    });
});
