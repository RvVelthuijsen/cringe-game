// Language toggle

let languageLs;
const eng = document.querySelector(".en");
const deu = document.querySelector(".de");
const homePage = document.querySelector(".home-page");
const gamePage = document.querySelector(".game-page");
const statsPage = document.querySelector(".stats-page");
const impressumPage = document.querySelector(".impressum-page");
const settingsPage = document.querySelector(".settings-page");
const difficultyTitle = document.querySelector(".difficulty-title");
const mainTitle = document.querySelector(".main-title");
const sectionTitle = document.querySelector(".section-title");
const characterTitle = document.querySelector(".character-title");


const lang = {
  
//   TextContent
    en: {
    homeNav: "Home",
    gameNav: "Game",
    statsNav: "Stats",
    settingsNav: "Settings",
    difficultyTitle: "Difficulty",
    mainTitle: "Settings",
    sectionTitle: "Profile",
    characterTitle: "Character",
    
  },
  de: {
    homeNav: "Über",
    gameNav: "Spiel",
    statsNav: "Statistiken",
    settingsNav: "Einstellungen",
    difficultyTitle: "Schwierigkeit",
    mainTitle: "Einstellungen",
    sectionTitle: "Profil",
    characterTitle: "Figur"
  },
};

if (localStorage.getItem("languageLs")) {
  languageLs = localStorage.getItem("languageLs");
  if (languageLs === "#de") {  
    homePage.textContent = lang.de.homeNav;
    gamePage.textContent = lang.de.gameNav;
    statsPage.textContent = lang.de.statsNav;
    settingsPage.textContent = lang.de.settingsNav;
    difficultyTitle.textContent = lang.de.difficultyTitle;
    mainTitle.textContent = lang.de.mainTitle;
    sectionTitle.textContent = lang.de.sectionTitle;
    characterTitle.textContent = lang.de.characterTitle;
    console.log(languageLs);
  } else if (languageLs === "#en") {
    languageLs = localStorage.getItem("languageLs");
    homePage.textContent = lang.en.homeNav;
    gamePage.textContent = lang.en.gameNav;
    statsPage.textContent = lang.en.statsNav;
    settingsPage.textContent = lang.en.settingsNav;
    difficultyTitle.textContent = lang.en.difficultyTitle;
    mainTitle.textContent = lang.en.mainTitle;
    sectionTitle.textContent = lang.en.sectionTitle;
    characterTitle.textContent = lang.en.characterTitle;
  }
} else {
  if ((languageLs = undefined)) {
    localStorage.setItem("languageLs", "#en");
    homePage.textContent = lang.en.homeNav;
    gamePage.textContent = lang.en.gameNav;
    statsPage.textContent = lang.en.statsNav;
    settingsPage.textContent = lang.en.settingsNav;
    difficultyTitle.textContent = lang.en.difficultyTitle;
    mainTitle.textContent = lang.en.mainTitle;
    sectionTitle.textContent = lang.en.sectionTitle;
    characterTitle.textContent = lang.en.characterTitle;
  }
}

const toggleEn = () => {
  languageLs = "#en";
  homePage.textContent = lang.en.homeNav;
  gamePage.textContent = lang.en.gameNav;
  statsPage.textContent = lang.en.statsNav;
  settingsPage.textContent = lang.en.settingsNav;
  difficultyTitle.textContent = lang.en.difficultyTitle;
  mainTitle.textContent = lang.en.mainTitle;
  sectionTitle.textContent = lang.en.sectionTitle;
  characterTitle.textContent = lang.en.characterTitle;
  localStorage.setItem("languageLs", "#en");
  // location.reload();
};
const toggleDe = () => {
  languageLs = "#de";
  
  homePage.textContent = lang.de.homeNav;
  gamePage.textContent = lang.de.gameNav;
  statsPage.textContent = lang.de.statsNav;
  settingsPage.textContent = lang.de.settingsNav;
  difficultyTitle.textContent = lang.de.difficultyTitle;
  mainTitle.textContent = lang.de.mainTitle;
  sectionTitle.textContent = lang.de.sectionTitle;
  characterTitle.textContent = lang.de.characterTitle;
  localStorage.setItem("languageLs", "#de");
  // location.reload();
};

eng.addEventListener("click", toggleEn);
deu.addEventListener("click", toggleDe);
