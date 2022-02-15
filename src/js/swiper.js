document.addEventListener("DOMContentLoaded", function load() {
    if (window.screen.width < 768) {
        const swiper = new Swiper(".swiper", {
            slidesPerView: 1.12,
            pagination: {
                el: ".swiper-pagination",
                type: "bullets",
                clickable: "true",
                loop: true,
            },
        });
    }
});




