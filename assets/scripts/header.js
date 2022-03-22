document.addEventListener("DOMContentLoaded", function () {
  const burgerMenu = document.getElementById("burger-menu");
  const navBar = document.getElementById("navbar");
  console.log(navBar);
  let isOpen = false;
  function toggle() {
    // if (isOpen === false) {
    //     navBar.style.visibility = "visible"
    // } else {navBar.style.visibility = "hidden"}
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

function toggleDark() {
  DOMbody.classList.toggle("dark-mode");
  localStorage.setItem("isDarkMode", true);
  if (localStorage.getItem("isDarkMode") === "true") {
    document.getElementById("main-page").classList.add("active-dark");
  }
}
toggleBtn.addEventListener("click", toggleDark);

// FORM VALIDATION (on impressum page)

const submitBtn = document.querySelector(".submit-btn");

function validateForm() {
  const inputFields1 = document.forms["form"]["name"].value;
  const inputFields2 = document.forms["form"]["email"].value;
  const inputFields3 = document.forms["form"]["message"].value;

  if (!inputFields1 || !inputFields2 || !inputFields3) {
    /* alert("Empty"); */
    const errorMsg = document.createElement("p");
    errorMsg.innerHTML = "Oops! Please fill out all fields before submitting!";
    const formText = document.querySelector(".form-text");
    formText.appendChild(errorMsg);
    return false;
  }
}

submitBtn.addEventListener("click", function (event) {
  event.preventDefault();
  validateForm();
});

// TO DO: style error message
// define what happens if submit
