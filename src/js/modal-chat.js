const btnChat = document.querySelector('.btn__chat')
const modalWin = document.querySelector('.modal')
const modalCloseBtn = document.querySelector('.modal_close-btn')

function modalWindowEnable() {
    modalWin.classList.add('modal_active')
}

function modalWindowDisable() {
    modalWin.classList.remove('modal_active')
}

modalCloseBtn.addEventListener('click', modalWindowDisable)
btnChat.addEventListener('click', modalWindowEnable)
