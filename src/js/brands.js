const minimizerList = document.querySelector(".repair-info__container");
const btnShowMoreBrands = document.querySelector(".repair-info__button");
const showMoreText = document.querySelector(".show-more__text")
const showMoreImg = document.querySelector(".show-more__img")

btnShowMoreBrands.addEventListener("click", showMoreBrands);

function showMoreBrands() {
    minimizerList.classList.toggle("repair-info__minimized");
    btnShowMoreBrands.classList.toggle("repair-info__button--active");

    if (minimizerList.classList.contains("repair-info__minimized")) {
        showMoreText.textContent = " Показать все";
        showMoreImg.classList.toggle("show-more__img_active")
    } else {
        showMoreText.textContent = "Скрыть";
        showMoreImg.classList.toggle("show-more__img_active")
    }
}
