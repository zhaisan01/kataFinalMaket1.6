const menuItem = document.querySelectorAll('.sidebar__link')

for (let i = 0; i < menuItem.length; i++) {
    menuItem[i].addEventListener("click", function() {
        let current = document.getElementsByClassName("sidebar__link_active");
        current[0].className = current[0].className.replace("sidebar__link_active", "");
        this.className += " sidebar__link_active";
    });
}
