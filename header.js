document.addEventListener("DOMContentLoaded", function () {
    const burgerMenu = document.getElementById("burger-menu");
    const navBar = document.getElementById('navbar');
    console.log(navBar);
    let isOpen = false;    
    function toggle() {
        // if (isOpen === false) {
        //     navBar.style.visibility = "visible"
        // } else {navBar.style.visibility = "hidden"}
        isOpen ? navBar.style.visibility = "hidden" : navBar.style.visibility = "visible";
        isOpen = !isOpen;
    };
    burgerMenu.addEventListener("click", toggle);
});