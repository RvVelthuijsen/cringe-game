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

// Language toggle

const langToggle = document.querySelectorAll(".lang-toggle");
let languageLs;
const eng = document.getElementById("en");
const deu = document.getElementById("de");
const instru = document.getElementById("instructions");
const lang = {
  en: {
    instructions:
      'Welcome to Cringe Game! In this top-down 2D crawler your goal is to become a Web Developer. You have to collect all the programming languages and frameworks necessary to make you hirable on the ever-evolving job market. click on "play" to start the game.',
  },
  de: {
    instructions:
      "Willkommen bei Cringe Game! In diesem Top-Down-2D-Crawler ist es Ihr Ziel, ein Webentwickler zu werden. Sie müssen alle Programmiersprachen und Frameworks sammeln, die notwendig sind, um auf dem sich ständig weiterentwickelnden Arbeitsmarkt angestellt zu werden. Klicken Sie auf „Spielen“, um das Spiel zu starten.",
  },
};

if (localStorage.getItem("languageLs")) {
  languageLs = localStorage.getItem("languageLs");
  if (languageLs === "#de") {
    instru.textContent = lang.de.instructions;
    console.log(languageLs);
  } else if (languageLs === "#en") {
    languageLs = localStorage.getItem("languageLs");
    instru.textContent = lang.en.instructions;
    console.log(languageLs);
  }
} else {
  if ((languageLs = undefined)) {
    localStorage.setItem("languageLs", "#en");
    instru.textContent = lang.en.instructions;
  }
}

const toggleEn = () => {
  languageLs = "#en";
  instru.textContent = lang.en.instructions;
  localStorage.setItem("languageLs", "#en");
  // location.reload();
};
const toggleDe = () => {
  languageLs = "#de";
  instru.textContent = lang.de.instructions;
  localStorage.setItem("languageLs", "#de");
  // location.reload();
};

eng.addEventListener("click", toggleEn());
deu.addEventListener("click", toggleDe());
