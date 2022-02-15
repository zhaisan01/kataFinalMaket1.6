const btnChat = document.querySelector('.btn__call')
const modalWin = document.querySelector('.modal-call')
const modalCloseBtn = document.querySelector('.modal_close-btn1')

function modalWindowEnable() {
    modalWin.classList.add('modal-call_active')
}

function modalWindowDisable() {
    modalWin.classList.remove('modal-call_active')
}

btnChat.addEventListener('click', modalWindowEnable)
modalCloseBtn.addEventListener('click', modalWindowDisable)
