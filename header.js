    const burgerMenu = document.getElementById("burger-menu");
    const navBar = document.getElementsByClassName("nav-link");
    let isOpen = false;    
    const toggle = () => {
        if (isOpen === false) {
            navBar.style.visibility = "visible"
        } else {navBar.style.visibility = "hidden"}
        // isOpen ? navBar.style.visibility = "hidden" : navBar.style.visibility = "visible";
        isOpen = !isOpen;
    };
    burgerMenu.addEventListener("click", toggle);