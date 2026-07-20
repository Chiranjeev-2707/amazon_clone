const rightBtn = document.querySelector(".rb");
const leftBtn = document.querySelector(".lb");
const heroSection = document.querySelector(".hero-section");

const images = [
    "images/hero1.jpg",
    "images/hero2.jpg",
    "images/hero3.jpg",
    "images/hero4.jpg"
];

let current = 0;

heroSection.style.backgroundImage = `url("${images[current]}")`;

rightBtn.addEventListener("click", () => {
    current = (current + 1) % images.length;
    heroSection.style.backgroundImage = `url("${images[current]}")`;
});

leftBtn.addEventListener("click", () => {
    current = (current - 1 + images.length) % images.length;
    heroSection.style.backgroundImage = `url("${images[current]}")`;
});