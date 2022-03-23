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
let toggleBtn = document.querySelector(".nes-checkbox");
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

if (window.location.href === "./impressum.html") {
  const submitBtn = document.querySelector(".submit-btn");
  const submitMsg = document.querySelector(".submit-msg");
  const form = document.querySelector(".contact-form");

  function validateForm() {
    const inputFields1 = document.forms["form"]["name"].value;
    const inputFields2 = document.forms["form"]["email"].value;
    const inputFields3 = document.forms["form"]["message"].value;

    if (!inputFields1 || !inputFields2 || !inputFields3) {
      submitMsg.innerHTML =
        "Oops! Please fill out all fields before submitting!";
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

// DISPLAY STATS FROM LOCAL STORAGE

if (window.location.href === "./stats.html") {
  const statsTable = document.querySelector(".stats-table");
  const noResultsRow = document.querySelector(".no-results-row");

  // checking if results is not empty, then remove the test row
  if (localStorage.getItem("results")) {
    noResultsRow.remove();

    let results = localStorage.getItem("results");
    let currentResults = JSON.parse(results);
    console.log(currentResults);

    for (let i=0; i<currentResults.length; i++) {    // looping over number ob objects in results array

    var tableRow[i] = document.createElement("tr");   // creating and appending table rows for each object in array
    statsTable.appendChild(tableRow[i]);

    var tableCell1[i] = document.createElement("td");   // creating and appending table cells for each object, using "var" instead of "let" because of error message on scope
    var tableCell2[i] = document.createElement("td");
    var tableCell3[i] = document.createElement("td");
    var tableCell4[i] = document.createElement("td");

    tableRow[i].appendChild(tableCell1[i], tableCell2[i], tableCell3[i], tableCell4[i]); // check if this works, otherwise only "append"

    tableCell1[i].innerHTML = results[i].name;    // modify content of table cells
    tableCell2[i].innerHTML = results[i].timeLeft;
    tableCell3[i].innerHTML = results[i].numPickups;
    tableCell4[i].innerHTML = results[i].score;
    }
  }
}
