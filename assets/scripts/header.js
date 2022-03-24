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
if (document.URL.includes("impressum.html")){
const submitBtn = document.getElementById("button");
const submitMsg = document.querySelector(".submit-msg");
const form = document.getElementById("contact-form");
console.log(submitBtn, submitMsg, form);

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
}

//Difficulty setting (on settings page)
if (document.URL.includes("settings.html")){

  const easyBtn = document.querySelector(".easy-btn");
  const mediumBtn = document.querySelector(".medium-btn");
  const hardBtn = document.querySelector(".hard-btn");
  const char1Btn = document.querySelector(".char1");
  const char2Btn = document.querySelector(".char2");
  const char3Btn = document.querySelector(".char3");

function setEasy(){
  localStorage.setItem("difficulty", JSON.stringify(80));
}
function setMedium(){
  localStorage.setItem("difficulty", JSON.stringify(60));
}
function setHard(){
  localStorage.setItem("difficulty", JSON.stringify(30));
}

function setChar1(){
  localStorage.setItem("character", JSON.stringify(1));
}
function setChar2(){
  localStorage.setItem("character", JSON.stringify(2));
}
function setChar3(){
  localStorage.setItem("character", JSON.stringify(3));
}



easyBtn.addEventListener("click", setEasy);
mediumBtn.addEventListener("click", setMedium);
hardBtn.addEventListener("click", setHard);

char1Btn.addEventListener("click", setChar1);
char2Btn.addEventListener("click", setChar2);
char3Btn.addEventListener("click", setChar3);

}