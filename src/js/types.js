const minimizerList = document.querySelector('.repair-info__container_tech')
const btnShowMoreTech = document.querySelector('.repair-info__button_tech')
const showMoreText = document.querySelector(".show-more__text_tech")
const showMoreImg = document.querySelector(".show-more__img_tech")

btnShowMoreTech.addEventListener('click', showMoreTech)

function showMoreTech() {
    minimizerList.classList.toggle("repair-info__container_active")
    minimizerList.classList.toggle("repair-info__container_tech")
    btnShowMoreTech.classList.toggle("repair-info__button--active")

    if (minimizerList.classList.contains("repair-info__container_active")) {
        showMoreText.textContent = "Скрыть"
        showMoreImg.classList.toggle("show-more__img_active")
    } else {
        showMoreText.textContent = " Показать все"
        showMoreImg.classList.toggle("show-more__img_active")
    }
}
