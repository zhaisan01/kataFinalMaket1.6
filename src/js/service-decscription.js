const readeMoreBtn = document.querySelector('.service__button');
const readeMoreImg =document.querySelector('.service__read-more')
const descriptionText = document.querySelector(".service__deskription-text")
function openMoreText() {
    descriptionText.classList.toggle('service__deskription-text_active')
    readeMoreImg.classList.toggle('service__reade-more_active')
}

readeMoreBtn.addEventListener('click', openMoreText)


