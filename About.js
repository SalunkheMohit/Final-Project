// =============================
// Highlight Active Navigation
// =============================

const currentPage = window.location.pathname.split("/").pop();
const navLinks = document.querySelectorAll("nav ul li a");

navLinks.forEach(link => {
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
        header.style.boxShadow = "0 4px 12px rgba(0,0,0,0.5)";
        header.style.background = "rgba(0,0,0,0.75)";
    } else {
        header.style.boxShadow = "none";
        header.style.background = "linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.2))";
    }
});


// =============================
// Fade-In Animation for About Section
// =============================

const aboutSection = document.querySelector(".about-section");

window.addEventListener("scroll", () => {
    let sectionPosition = aboutSection.getBoundingClientRect().top;
    let screenHeight = window.innerHeight;

    if (sectionPosition < screenHeight - 150) {
        aboutSection.style.opacity = "1";
        aboutSection.style.transform = "translateY(0)";
    }
});

// Initial state before animation
aboutSection.style.opacity = "0";
aboutSection.style.transform = "translateY(40px)";
aboutSection.style.transition = "all 0.8s ease-out";