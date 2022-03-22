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

// Changing the stats message"
const statsMessage = document.querySelector(".stats-message");

/*if (player wins) {
    statsMessage.innerHTML = "Congrats! You did it!";
}
else if (player loses) {
    statsMessage.innerHTML = "Oops! You failed!";
}
*/

// Adding rows to the table

const playersTableRow = document.createElement("tr");


// DARK MODE
const toggleBtn = document.querySelector(".nes-checkbox");
const DOMbody = document.body;

function toggleDark() {
    DOMbody.classList.toggle('dark-mode');
    localStorage.setItem('isDarkMode', true);
    if (localStorage.getItem('isDarkMode') === 'true') {
        document.getElementById('main-page').classList.add('active-dark');
    } 

} 
toggleBtn.addEventListener('click', toggleDark);