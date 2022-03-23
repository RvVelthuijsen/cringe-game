document.addEventListener("DOMContentLoaded", function () {
  const burgerMenu = document.getElementById("burger-menu");
  const navBar = document.getElementById("navbar");
  console.log(navBar);
  let isOpen = false;
  function toggle() {
    isOpen
      ? (navBar.style.visibility = "hidden")
      : (navBar.style.visibility = "visible");
    isOpen = !isOpen;
  }
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
let isDarkMode;

if (localStorage.getItem("isDarkMode")) {
  isDarkMode = localStorage.getItem("isDarkMode") === "true";
  if (isDarkMode) {
    DOMbody.classList.toggle("dark-mode");
    toggleBtn.innerHTML = "light mode";
  }
} else {
  isDarkMode = localStorage.setItem("isDarkMode", false);
  DOMbody.classList.toggle("dark-mode");
  toggleBtn.innerHTML = "dark mode";
  // console.log(toggleBtn.innerHTML)
}

function toggleDark() {
  isDarkMode = !isDarkMode;
  localStorage.setItem("isDarkMode", isDarkMode);
  DOMbody.classList.toggle("dark-mode");
  isDarkMode
    ? (toggleBtn.innerHTML = "light mode")
    : (toggleBtn.innerHTML = "dark mode");
}
toggleBtn.addEventListener("click", toggleDark);

