// =============================
// Highlight Active Navigation Link
// =============================
const currentPage = window.location.pathname.split("/").pop();
document.querySelectorAll("nav ul li a").forEach(link => {
    if (link.getAttribute("href") === currentPage) {
        link.classList.add("active");
    }
});


// =============================
// Sticky Header Shadow on Scroll
// =============================
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        header.style.boxShadow = "0 5px 20px rgba(0,0,0,0.5)";
        header.style.background = "rgba(0,0,0,0.75)";
    } else {
        header.style.boxShadow = "none";
        header.style.background = "linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.2))";
    }
});


// =============================
// Fade-In Animation for Sections
// =============================
function animateSection(section) {
    if (!section) return;

    section.style.opacity = 0;
    section.style.transform = "translateY(40px)";
    section.style.transition = "all 0.8s ease-out";

    window.addEventListener("scroll", () => {
        const position = section.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;

        if (position < screenHeight - 100) {
            section.style.opacity = 1;
            section.style.transform = "translateY(0)";
        }
    });
}

// Apply fade-in to common sections
animateSection(document.querySelector(".about-section"));
animateSection(document.querySelector(".portfolio-section"));
animateSection(document.querySelector(".contact-section"));


// =============================
// Contact Form Validation
// =============================
const contactForm = document.querySelector(".contact-form");

if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
        e.preventDefault(); // stop default submit

        const name = contactForm.querySelector("input[name='name']").value.trim();
        const email = contactForm.querySelector("input[name='email']").value.trim();
        const subject = contactForm.querySelector("input[name='subject']").value.trim();
        const message = contactForm.querySelector("textarea[name='message']").value.trim();

        if (!name || !email || !subject || !message) {
            alert("Please fill all fields before submitting.");
            return;
        }

        // Simple email validation
        if (!email.includes("@") || !email.includes(".")) {
            alert("Please enter a valid email address.");
            return;
        }

        // Success popup
        alert("Thank you! Your message has been sent successfully.");
        contactForm.reset();
    });
}

// Initialize EmailJS
emailjs.init("lZZskE3iCsyQt-QTw");

document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        title: document.getElementById("subject").value,
        message: document.getElementById("message").value,
        to_email: "mohitsalunkhe2611@gmail.com"
    };

    emailjs.send("service_xydh87v", "template_2w4lgzq", params)
    .then(() => {
        document.getElementById("status").innerText = "Message Sent Successfully!";
    })
    .catch((error) => {
        document.getElementById("status").innerText = "Failed to send message!";
        console.error(error);
    });
});


// =============================
// Smooth Hover Reveal for Project Cards
// =============================
const projectCards = document.querySelectorAll(".project-card");

projectCards.forEach(card => {
    card.addEventListener("mouseenter", () => {
        card.style.transform = "translateY(-10px)";
        card.style.transition = "all 0.3s ease";
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = "translateY(0)";
    });
});