const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("#nav");

menuToggle.addEventListener("click", () => {
    nav.classList.toggle("active");
});

const images = document.querySelectorAll(".card img");
const lightbox = document.querySelector("#lightbox");
const lightboxImg = document.querySelector("#lightbox-img");
const closeBtn = document.querySelector(".close");

images.forEach(image => {
    image.addEventListener("click", () => {
        lightbox.classList.add("active");
        lightboxImg.src = image.src;
    });
});

closeBtn.addEventListener("click", () => {
    lightbox.classList.remove("active");
});

lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
        lightbox.classList.remove("active");
    }
});