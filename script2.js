document.addEventListener("DOMContentLoaded", function () {

    // =========================
    // HERO TEXT DROP ANIMATION
    // =========================
    const text = "Hi, I'm Shikhar";
    const container = document.getElementById("hero-text");

    if (container) {
        text.split("").forEach((char, index) => {
        let span = document.createElement("span");
        span.classList.add("letter");

        // FIX SPACE ISSUE
        span.innerHTML = char === " " ? "&nbsp;" : char;

        span.style.animationDelay = `${index * 0.1}s`;

        container.appendChild(span);
    });
    }


    // =========================
    // SCROLL ANIMATION (LEFT/RIGHT)
    // =========================
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    });

    const elements = document.querySelectorAll('.hidden-left, .hidden-right');

    elements.forEach(el => observer.observe(el));


    // =========================
    // TYPING EFFECT
    // =========================
    const typingText = "Python Developer | Web Developer";
    let i = 0;

    function typingEffect() {
        const typingElement = document.getElementById("typing");

        if (typingElement && i < typingText.length) {
            typingElement.innerHTML += typingText.charAt(i);
            i++;
            setTimeout(typingEffect, 100);
        }
    }

    typingEffect();

});


// =========================
// BUTTON CLICK FUNCTION
// =========================
function showMessage() {
    alert("Welcome to my portfolio website!");
}