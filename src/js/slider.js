let mediaQuerySize = window.screen.width;
const btnShowMoreBrands = document.querySelector(".repair-info__button");

function sliderEnable() {
    if (mediaQuerySize <= 768) {
        let swiper = new Swiper(".mySwiper", {
            slidesPerView: 1.3,
            spaceBetween: 0,
            centeredSlides: true,
            loop: true,
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
        });
        btnShowMoreBrands.style.display = "none";
    } else {
        let deleteClassNameSwiperSlide = document.querySelectorAll(".swiper-slide");
        deleteClassNameSwiperSlide.forEach((e) => {
            e.classList.toggle("swiper-slide");
        });
    }
}

sliderEnable();
