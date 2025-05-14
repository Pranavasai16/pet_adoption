// Contact Form Handling
document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const msgBox = document.getElementById("formMessage");

    // Basic Email Format Check
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!name || !email || !message) {
        msgBox.textContent = "Please fill in all fields.";
        msgBox.className = "error";
        msgBox.classList.remove("hidden");
        return;
    }

    if (!emailPattern.test(email)) {
        msgBox.textContent = "Please enter a valid email address.";
        msgBox.className = "error";
        msgBox.classList.remove("hidden");
        return;
    }

    msgBox.textContent = "Thank you for contacting us!";
    msgBox.className = "success";
    msgBox.classList.remove("hidden");

    // Optionally reset form
    document.getElementById("contactForm").reset();
});
