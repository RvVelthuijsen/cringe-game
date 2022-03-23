// Language toggle

let languageLs;
const eng = document.querySelector(".en");
const deu = document.querySelector(".de");
const homePage = document.querySelector(".home-page");
const gamePage = document.querySelector(".game-page");
const statsPage = document.querySelector(".stats-page");
const impressumPage = document.querySelector(".impressum-page");
const settingsPage = document.querySelector(".settings-page");
const aboutUsHeader = document.querySelector(".section-title");
const aboutUsContent = document.getElementById("about-us");
const creditsTitle = document.getElementById("credits-title");
const creditsContent = document.getElementById("credits-content");
const contactUs = document.getElementById("contact-us");
const contactUsDesc = document.getElementById("contact-us-desc");

const lang = {
  //   TextContent
  en: {
    homeNav: "Home",
    gameNav: "Game",
    statsNav: "Stats",
    settingsNav: "Settings",
    aboutUsHeader: "About us",
    aboutUsContent:
      "We're just a small team of four developers who set out to make a Javascript 2D RPG crawler in just 2 weeks. We hope you enjoy the final result.",
    creditsTitle: "Credits",
    creditsContent:
      "This website could not have been made without the help of the following assets:",
    contactUs: "Contact Us",
    contactUsDesc:
      "Would you like to give some feedback or just tell us how great of a job we did, leave us a message:",
  },
  de: {
    homeNav: "Über",
    gameNav: "Spiel",
    statsNav: "Statistiken",
    settingsNav: "Einstellungen",
    aboutUsHeader: "Über uns",
    aboutUsContent:
      "Wir sind nur ein kleines Team von vier Entwicklern, die sich vorgenommen haben, in nur zwei Wochen einen Javascript-2D-RPG-Crawler zu erstellen. Wir hoffen, dass Ihnen das Endergebnis gefällt.",
    creditsTitle: "Quellen",
    creditsContent:
      "Diese Website hätte ohne die Hilfe der folgenden Ressourcen nicht erstellt werden können:",
    contactUs: "Kontaktiere Uns",
    contactUsDesc:
      "Möchten Sie Feedback geben oder uns einfach sagen, wie großartig wir unsere Arbeit gemacht haben, hinterlassen Sie uns eine Nachricht:",
  },
};

if (localStorage.getItem("languageLs")) {
  languageLs = localStorage.getItem("languageLs");
  if (languageLs === "#de") {
    homePage.textContent = lang.de.homeNav;
    gamePage.textContent = lang.de.gameNav;
    statsPage.textContent = lang.de.statsNav;
    settingsPage.textContent = lang.de.settingsNav;
    aboutUsHeader.textContent = lang.de.aboutUsHeader;
    aboutUsContent.textContent = lang.de.aboutUsContent;
    creditsTitle.textContent = lang.de.creditsTitle;
    creditsContent.textContent = lang.de.creditsContent;
    console.log(languageLs);
  } else if (languageLs === "#en") {
    languageLs = localStorage.getItem("languageLs");
    homePage.textContent = lang.en.homeNav;
    gamePage.textContent = lang.en.gameNav;
    statsPage.textContent = lang.en.statsNav;
    settingsPage.textContent = lang.en.settingsNav;
    aboutUsHeader.textContent = lang.en.aboutUsHeader;
    aboutUsContent.textContent = lang.en.aboutUsContent;
    creditsTitle.textContent = lang.en.creditsTitle;
    creditsContent.textContent = lang.en.creditsContent;
  }
} else {
  if ((languageLs = undefined)) {
    localStorage.setItem("languageLs", "#en");
    homePage.textContent = lang.en.homeNav;
    gamePage.textContent = lang.en.gameNav;
    statsPage.textContent = lang.en.statsNav;
    settingsPage.textContent = lang.en.settingsNav;
    aboutUsHeader.textContent = lang.en.aboutUsHeader;
    aboutUsContent.textContent = lang.en.aboutUsContent;
    creditsTitle.textContent = lang.en.creditsTitle;
    creditsContent.textContent = lang.en.creditsContent;
  }
}

const toggleEn = () => {
  languageLs = "#en";
  homePage.textContent = lang.en.homeNav;
  gamePage.textContent = lang.en.gameNav;
  statsPage.textContent = lang.en.statsNav;
  settingsPage.textContent = lang.en.settingsNav;
  aboutUsHeader.textContent = lang.en.aboutUsHeader;
  aboutUsContent.textContent = lang.en.aboutUsContent;
  creditsTitle.textContent = lang.en.creditsTitle;
  creditsContent.textContent = lang.en.creditsContent;
  localStorage.setItem("languageLs", "#en");
  // location.reload();
};
const toggleDe = () => {
  languageLs = "#de";

  homePage.textContent = lang.de.homeNav;
  gamePage.textContent = lang.de.gameNav;
  statsPage.textContent = lang.de.statsNav;
  settingsPage.textContent = lang.de.settingsNav;
  aboutUsHeader.textContent = lang.de.aboutUsHeader;
  aboutUsContent.textContent = lang.de.aboutUsContent;
  creditsTitle.textContent = lang.de.creditsTitle;
  creditsContent.textContent = lang.de.creditsContent;
  localStorage.setItem("languageLs", "#de");
  // location.reload();
};

eng.addEventListener("click", toggleEn);
deu.addEventListener("click", toggleDe);
