// ======== Highlight Active Navigation Link ========


// Get current page URL
const currentPage = window.location.pathname.split("/").pop();

// Select all nav links
const navLinks = document.querySelectorAll("nav ul li a");

navLinks.forEach(link => {
    const linkPage = link.getAttribute("href");

    // Add active class if link matches current file
    if (linkPage === currentPage) {
        link.classList.add("active");
    }
});



// ======== Sticky Header Shadow on Scroll ========

const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        header.style.boxShadow = "0 4px 10px rgba(0,0,0,0.4)";
        header.style.background = "rgba(0,0,0,0.7)";
    } else {
        header.style.boxShadow = "none";
        header.style.background = "linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.2))";
    }
});



// ======== Resume Download Alert (Optional) ========

const resumeBtn = document.querySelector(".btn");

if (resumeBtn) {
    resumeBtn.addEventListener("click", () => {
        alert("Your resume is downloading…");
    });
}



// ======== Mobile Menu Toggle (Optional – for small screens) ========

// If you add a menu icon later, this code will work
const mobileMenu = document.querySelector(".menu-toggle");
const navMenu = document.querySelector("nav ul");

if (mobileMenu) {
    mobileMenu.addEventListener("click", () => {
        navMenu.classList.toggle("open");
    });
}