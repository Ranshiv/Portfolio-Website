document.addEventListener("DOMContentLoaded", function () {
    console.log("✅ JavaScript Loaded - Form Handling Active");

    const form = document.getElementById("contact-form");
    if (!form) {
        console.error("❌ Form not found! Check your HTML.");
        return;
    }

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // 🚨 Prevents default form action
        console.log("🚀 Form submitted - Handling via JavaScript");

        const formData = new FormData(form);

        fetch("https://formspree.io/f/xqapznnb", { // ✅ Send to Formspree
            method: "POST",
            body: formData,
            headers: { "Accept": "application/json" }
        })
            .then(response => {
                console.log("✅ Response received:", response);
                if (response.ok) {
                    alert("🎉 Message sent successfully! Redirecting...");
                    setTimeout(() => window.location.href = "index.html", 5000);
                } else {
                    console.error("❌ Form submission error", response);
                }
            })
            .catch(error => {
                console.error("❌ Fetch error:", error);
            });
    });
});
