// Language toggle

let languageLs;
const eng = document.querySelector(".en");
const deu = document.querySelector(".de");
const homePage = document.querySelector(".home-page");
const gamePage = document.querySelector(".game-page");
const statsPage = document.querySelector(".stats-page");
const impressumPage = document.querySelector(".impressum-page");
const settingsPage = document.querySelector(".settings-page");
const instruTitle = document.getElementById("instruTitle")
const instru = document.getElementById("instructions");
const playBtn = document.querySelector(".play-button")

const lang = {
  
//   TextContent
    en: {
    instructions:
      'Welcome to Cringe Game! In this top-down 2D crawler your goal is to become a Web Developer. You have to collect all the programming languages and frameworks necessary to make you hirable on the ever-evolving job market. click on "play" to start the game.',
    homeNav: "Home",
    gameNav: "Game",
    statsNav: "Stats",
    settingsNav: "Settings",
    playBtn: "Play ▶",
    instruTitle: "Instructions",
  },
  de: {
    instructions:
    "Willkommen bei Cringe Game! In diesem Top-Down-2D-Crawler ist es Ihr Ziel, ein Webentwickler zu werden. Sie müssen alle Programmiersprachen und Frameworks sammeln, die notwendig sind, um auf dem sich ständig weiterentwickelnden Arbeitsmarkt angestellt zu werden. Klicken Sie auf „Spielen“, um das Spiel zu starten.",
    homeNav: "Über",
    gameNav: "Spiel",
    statsNav: "Statistiken",
    settingsNav: "Einstellungen",
    playBtn: "Spielen ▶",
    instruTitle: "Anleitung",
  },
};

if (localStorage.getItem("languageLs")) {
  languageLs = localStorage.getItem("languageLs");
  if (languageLs === "#de") {
    homePage.textContent = lang.de.homeNav;
    gamePage.textContent = lang.de.gameNav;
    statsPage.textContent = lang.de.statsNav;
    settingsPage.textContent = lang.de.settingsNav;
    playBtn.textContent = lang.de.playBtn;
    instru.textContent = lang.de.instructions;
    instruTitle.textContent = lang.de.instruTitle;

    
    console.log(languageLs);
  } else if (languageLs === "#en") {
    languageLs = localStorage.getItem("languageLs");
    homePage.textContent = lang.en.homeNav;
    gamePage.textContent = lang.en.gameNav;
    statsPage.textContent = lang.en.statsNav;
    settingsPage.textContent = lang.en.settingsNav;
    playBtn.textContent = lang.en.playBtn;
    instru.textContent = lang.en.instructions;
    instruTitle.textContent = lang.en.instruTitle;
  }
} else {
  if ((languageLs = undefined)) {
    localStorage.setItem("languageLs", "#en");
    homePage.textContent = lang.en.homeNav;
    gamePage.textContent = lang.en.gameNav;
    statsPage.textContent = lang.en.statsNav;
    settingsPage.textContent = lang.en.settingsNav;
    playBtn.textContent = lang.en.playBtn;
    instru.textContent = lang.en.instructions;
    instruTitle.textContent = lang.en.instruTitle;
  }
}

const toggleEn = () => {
  languageLs = "#en";
  homePage.textContent = lang.en.homeNav;
  gamePage.textContent = lang.en.gameNav;
  statsPage.textContent = lang.en.statsNav;
  settingsPage.textContent = lang.en.settingsNav;
  playBtn.textContent = lang.en.playBtn;
  instru.textContent = lang.en.instructions;
  instruTitle.textContent = lang.en.instruTitle;
  localStorage.setItem("languageLs", "#en");
  // location.reload();
};
const toggleDe = () => {
  languageLs = "#de";
  instru.textContent = lang.de.instructions;
  homePage.textContent = lang.de.homeNav;
  gamePage.textContent = lang.de.gameNav;
  statsPage.textContent = lang.de.statsNav;
  settingsPage.textContent = lang.de.settingsNav;
  playBtn.textContent = lang.de.playBtn;
  instruTitle.textContent = lang.de.instruTitle;
  localStorage.setItem("languageLs", "#de");
  // location.reload();
};

eng.addEventListener("click", toggleEn);
deu.addEventListener("click", toggleDe);
