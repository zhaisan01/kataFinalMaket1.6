const sidebarEnable = document.querySelector('.btn__burger')
const sidebarDisable = document.querySelector(".btn__close")
const sidebar = document.querySelector('.sidebar')
const overlay = document.querySelector('.overlay')

sidebarEnable.addEventListener('click', openSidebar)
sidebarDisable.addEventListener('click', closeSidebar)

function openSidebar() {
    sidebar.classList.toggle('sidebar_active')
    overlay.classList.toggle('overlay_active')
}

function closeSidebar() {
    sidebar.classList.toggle('sidebar_active')
    overlay.classList.toggle('overlay_active')
}


