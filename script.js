// Basic interactivity for the "Get Started" button
document.addEventListener("DOMContentLoaded", function() {
    const ctaButton = document.querySelector(".cta-button");

    ctaButton.addEventListener("click", function(e) {
        e.preventDefault();
        alert("Thank you for getting started! We will reach out to you soon.");
    });
});
