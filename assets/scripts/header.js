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


// FORM VALIDATION (on impressum page)

const submitBtn = document.querySelector(".submit-btn");
const submitMsg = document.querySelector(".submit-msg");
const form = document.querySelector(".contact-form");

function validateForm() {
  const inputFields1 = document.forms["form"]["name"].value;
  const inputFields2 = document.forms["form"]["email"].value;
  const inputFields3 = document.forms["form"]["message"].value;

  if (!inputFields1 || !inputFields2 || !inputFields3) {
    submitMsg.innerHTML = "Oops! Please fill out all fields before submitting!";
    /* return false; */
  } else {
    submitMsg.innerHTML = "Great! Thank you for your message!";
    submitMsg.classList.add("success-msg");
    form.setAttribute("id", "form-submitted");
  }
}

submitBtn.addEventListener("click", function (event) {
  event.preventDefault();
  validateForm();
});
