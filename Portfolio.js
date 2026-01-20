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
// Fade-In Animation for Portfolio Section
// =============================

const portfolioSection = document.querySelector(".portfolio-section");

portfolioSection.style.opacity = "0";
portfolioSection.style.transform = "translateY(40px)";
portfolioSection.style.transition = "all 0.8s ease-out";

window.addEventListener("scroll", () => {
    let sectionPosition = portfolioSection.getBoundingClientRect().top;
    let screenHeight = window.innerHeight;

    if (sectionPosition < screenHeight - 120) {
        portfolioSection.style.opacity = "1";
        portfolioSection.style.transform = "translateY(0)";
    }
});


// =============================
// Fade-in Animation for Project Cards
// =============================

const cards = document.querySelectorAll(".project-card");

cards.forEach((card, index) => {
    card.style.opacity = "0";
    card.style.transform = "translateY(30px)";
    card.style.transition = `all 0.6s ease-out ${index * 0.2}s`;
});

window.addEventListener("scroll", () => {
    cards.forEach(card => {
        let cardPosition = card.getBoundingClientRect().top;
        let screenHeight = window.innerHeight;

        if (cardPosition < screenHeight - 80) {
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
        }
    });
});