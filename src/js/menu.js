const menuItem = document.querySelectorAll('.menu__item')

for (let i = 0; i < menuItem.length; i++) {
    menuItem[i].addEventListener("click", function() {
        let current = document.getElementsByClassName("menu__item--active");
        current[0].className = current[0].className.replace(" menu__item--active", "");
        this.className += " menu__item--active";
    });
}


