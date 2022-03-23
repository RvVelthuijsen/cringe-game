// Language toggle

let languageLs;
const eng = document.querySelector(".en");
const deu = document.querySelector(".de");
const homePage = document.querySelector(".home-page");
const gamePage = document.querySelector(".game-page");
const statsPage = document.querySelector(".stats-page");
const impressumPage = document.querySelector(".impressum-page");
const settingsPage = document.querySelector(".settings-page");
// page variables
const statsTitle = document.querySelector(".stats-title");
const statsMessage2 = document.querySelector(".stats-message");
const statsRank = document.querySelector(".rank");
const playerName = document.querySelector(".players-name");
const time = document.querySelector(".time");
const noOfItems = document.querySelector(".noOfItems");
const score = document.querySelector(".score")
const lang = {
  
//   TextContent
    en: {
    homeNav: "Home",
    gameNav: "Game",
    statsNav: "Stats",
    settingsNav: "Settings",
    statsTitle: "Score Ranking",
    statsMessage2: "Take a look at the scores of you and other players!",
    playerName: "Player's name",
    statsRank: "Rank",
    time: "Time",
    noOfItems: "No. of items",
    score: "Score",


  },
  de: {
    homeNav: "Über",
    gameNav: "Spiel",
    statsNav: "Statistiken",
    settingsNav: "Einstellungen",
    statsTitle: "Rangliste",
    statsMessage2: "Werfen Sie einen Blick auf die Ergebnisse von Ihnen und anderen Spielern!",
    playerName: "Spieler Name",
    statsRank: "Rang",
    time: "Zeit",
    noOfItems: "Anzahl items",
    score: "Punktzahl",
  },
};

if (localStorage.getItem("languageLs")) {
  languageLs = localStorage.getItem("languageLs");
  if (languageLs === "#de") {  
    homePage.textContent = lang.de.homeNav;
    gamePage.textContent = lang.de.gameNav;
    statsPage.textContent = lang.de.statsNav;
    settingsPage.textContent = lang.de.settingsNav;
    statsTitle.textContent = lang.de.statsTitle;
    statsMessage2.textContent = lang.de.statsMessage2;
    playerName.textContent = lang.de.playerName;
    statsRank.textContent = lang.de.statsRank;
    time.textContent = lang.de.time;
    noOfItems.textContent = lang.de.noOfItems;
    score.textContent = lang.de.score;
    console.log(languageLs);
  } else if (languageLs === "#en") {
    languageLs = localStorage.getItem("languageLs");
    homePage.textContent = lang.en.homeNav;
    gamePage.textContent = lang.en.gameNav;
    statsPage.textContent = lang.en.statsNav;
    settingsPage.textContent = lang.en.settingsNav;
    statsTitle.textContent = lang.en.statsTitle;
    statsMessage2.textContent = lang.en.statsMessage2;
    playerName.textContent = lang.en.playerName;
    statsRank.textContent = lang.en.statsRank;
    time.textContent = lang.en.time;
    noOfItems.textContent = lang.en.noOfItems;
    score.textContent = lang.en.score;
  }
} else {
  if ((languageLs = undefined)) {
    localStorage.setItem("languageLs", "#en");
    homePage.textContent = lang.en.homeNav;
    gamePage.textContent = lang.en.gameNav;
    statsPage.textContent = lang.en.statsNav;
    settingsPage.textContent = lang.en.settingsNav;
    statsTitle.textContent = lang.en.statsTitle;
    statsMessage2.textContent = lang.en.statsMessage2;
    playerName.textContent = lang.en.playerName;
    statsRank.textContent = lang.en.statsRank;
    time.textContent = lang.en.time;
    noOfItems.textContent = lang.en.noOfItems;
    score.textContent = lang.en.score;
  }
}

const toggleEn = () => {
  languageLs = "#en";
  homePage.textContent = lang.en.homeNav;
    gamePage.textContent = lang.en.gameNav;
    statsPage.textContent = lang.en.statsNav;
    settingsPage.textContent = lang.en.settingsNav;
    statsTitle.textContent = lang.en.statsTitle;
    statsMessage2.textContent = lang.en.statsMessage2;
    playerName.textContent = lang.en.playerName;
    statsRank.textContent = lang.en.statsRank;
    time.textContent = lang.en.time;
    noOfItems.textContent = lang.en.noOfItems;
    score.textContent = lang.en.score;
  localStorage.setItem("languageLs", "#en");
  // location.reload();
};
const toggleDe = () => {
  languageLs = "#de";
  
  homePage.textContent = lang.de.homeNav;
  gamePage.textContent = lang.de.gameNav;
  statsPage.textContent = lang.de.statsNav;
  settingsPage.textContent = lang.de.settingsNav;
  statsTitle.textContent = lang.de.statsTitle;
  statsMessage2.textContent = lang.de.statsMessage2;
  playerName.textContent = lang.de.playerName;
  statsRank.textContent = lang.de.statsRank;
  time.textContent = lang.de.time;
  noOfItems.textContent = lang.de.noOfItems;
  score.textContent = lang.de.score;
  localStorage.setItem("languageLs", "#de");
  // location.reload();
};

eng.addEventListener("click", toggleEn);
deu.addEventListener("click", toggleDe);
