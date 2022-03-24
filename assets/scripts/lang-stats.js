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
const playerName = document.getElementById("player-name");
const time = document.getElementById("player-time");
const noOfItems = document.getElementById("player-items");
const score = document.getElementById("player-score");
const playBtn = document.querySelector(".play-button");
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
    time: "Time",
    noOfItems: "No. of items",
    score: "Score",
    playBtn: "Play ▶",
  },
  de: {
    homeNav: "Über",
    gameNav: "Spiel",
    statsNav: "Statistiken",
    settingsNav: "Einstellungen",
    statsTitle: "Rangliste",
    statsMessage2:
      "Werfen Sie einen Blick auf die Ergebnisse von Ihnen und anderen Spielern!",
    playerName: "Spieler Name",
    time: "Zeit",
    noOfItems: "Anzahl items",
    score: "Punktzahl",
    playBtn: "Spielen ▶",
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
    time.textContent = lang.de.time;
    noOfItems.textContent = lang.de.noOfItems;
    score.textContent = lang.de.score;
    playBtn.textContent = lang.de.playBtn;
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
    time.textContent = lang.en.time;
    noOfItems.textContent = lang.en.noOfItems;
    score.textContent = lang.en.score;
    playBtn.textContent = lang.en.playBtn;
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
    time.textContent = lang.en.time;
    noOfItems.textContent = lang.en.noOfItems;
    score.textContent = lang.en.score;
    playBtn.textContent = lang.en.playBtn;
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
  time.textContent = lang.en.time;
  noOfItems.textContent = lang.en.noOfItems;
  score.textContent = lang.en.score;
  playBtn.textContent = lang.en.playBtn;
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
  time.textContent = lang.de.time;
  noOfItems.textContent = lang.de.noOfItems;
  score.textContent = lang.de.score;
  playBtn.textContent = lang.de.playBtn;
  localStorage.setItem("languageLs", "#de");
  // location.reload();
};

eng.addEventListener("click", toggleEn);
deu.addEventListener("click", toggleDe);
