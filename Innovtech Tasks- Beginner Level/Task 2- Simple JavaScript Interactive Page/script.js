document.addEventListener("DOMContentLoaded", function() {
    // Change color of sections
    const homeSection = document.getElementById("home");
    const aboutSection = document.getElementById("about");
    const contactSection = document.getElementById("contact");

    const homeColorButton = document.getElementById("homeColorButton");
    const aboutColorButton = document.getElementById("aboutColorButton");
    const contactColorButton = document.getElementById("contactColorButton");

    homeColorButton.addEventListener("click", function() {
        homeSection.style.backgroundColor = homeSection.style.backgroundColor === "blue" ? "gray" : "blue";
    });

    aboutColorButton.addEventListener("click", function() {
        aboutSection.style.backgroundColor = aboutSection.style.backgroundColor === "green" ? "pink" : "green";
    });

    contactColorButton.addEventListener("click", function() {
        contactSection.style.backgroundColor = contactSection.style.backgroundColor === "lightcoral" ? "lightgray" : "lightcoral";
    });

    // Form validation
    const form = document.getElementById("contact-form");

    form.addEventListener("submit", function(event) {
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        if (!name || !email || !message) {
            alert("Please fill in all required fields.");
            event.preventDefault(); // Prevent form submission
        }
    });
});
