const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navToggleBtn = document.querySelector(".nav__toggle"),
  navItem = document.querySelectorAll(".nav__item"),
  header = document.getElementById("header");

// open and close menu
navToggleBtn.addEventListener("click", () => {
  navMenu.classList.toggle("nav__menu--open");
  changeIcon();
});

// close the menu when the user clicks the nav links
navItem.forEach((item) => {
  item.addEventListener("click", () => {
    navMenu.classList.remove("nav__menu--open");
    changeIcon();
  });
});

// Change nav toggle icon
function changeIcon() {
  if (navMenu.classList.contains("nav__menu--open")) {
    navToggle.classList.replace("ri-menu-3-line", "ri-close-line");
  } else {
    navToggle.classList.replace("ri-close-line", "ri-menu-3-line");
  }
}

// header scroll animation
window.addEventListener("scroll", () => {
  header.classList.toggle("header--scroll", window.scrollY > 40);
});

// Typewriter
const typewriterTexts = [
  "Senior Full Stack Engineer",
  "Node.js & TypeScript Backend Architect",
  "React Frontend Engineer",
  "Android Engineer (Kotlin)",
  "Engineering Team Lead",
];

const typewriterElement = document.getElementById("typewriter");
let currentTextIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {
  const currentText = typewriterTexts[currentTextIndex];
  typewriterElement.textContent = currentText.slice(0, charIndex);

  if (!deleting && charIndex === currentText.length) {
    deleting = true;
    return setTimeout(typeEffect, 1800);
  }
  if (deleting && charIndex === 0) {
    deleting = false;
    currentTextIndex = (currentTextIndex + 1) % typewriterTexts.length;
  }

  charIndex += deleting ? -1 : 1;
  setTimeout(typeEffect, deleting ? 35 : 70);
}

typeEffect();

// ScrollReveal animations
if (window.ScrollReveal) {
  const sr = ScrollReveal({
    duration: 1200,
    distance: "40px",
    delay: 150,
    reset: false,
  });

  sr.reveal(".hero__content, .about__content, .section__header");
  sr.reveal(".hero__visual", { origin: "right" });
  sr.reveal(
    ".stat, .about__highlights li, .skill-card, .arch, .project, .timeline__item, .education, .service, .contact__card",
    { interval: 80 }
  );
}

// Footer year
const yearSpan = document.querySelector(".footer__copyright");
yearSpan.innerHTML = yearSpan.innerHTML.replace("{currentYear}", new Date().getFullYear());
