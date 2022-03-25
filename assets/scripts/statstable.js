// DISPLAY STATS FROM LOCAL STORAGE
const statsMsg = document.querySelector(".stats-message");
const statsImg = document.querySelector(".stats-img");
const lang2 = localStorage.getItem("languageLs");
const enButton = document.querySelector(".en");
const deButton = document.querySelector(".de");
console.log(lang2);

if (localStorage.getItem("languageLs") === "#en") {
    statsMsg.textContent = "Take a look at your scores!";
} else if (localStorage.getItem("languageLs") === "#de") {
    statsMsg.textContent = "Werfen Sie einen Blick auf Ihre Ergebnisse!";
  }

const statsTable = document.querySelector(".stats-table");
const noResultsRow = document.getElementById("no-results-row");

let results = localStorage.getItem("results");
let currentResults = JSON.parse(results);
console.log(currentResults);

// checking if results is not empty, then remove the test row
if (currentResults) {
  noResultsRow.remove();

  for (let i = 0; i < currentResults.length; i++) {
    let tableRow = document.createElement("tr");
    let tableCell0 = document.createElement("td");
    let tableCell1 = document.createElement("td");
    let tableCell2 = document.createElement("td");
    let tableCell3 = document.createElement("td");
    let tableCell4 = document.createElement("td");

    tableCell0.innerHTML = i + 1;
    tableCell1.innerHTML = currentResults[i].name;
    tableCell2.innerHTML = currentResults[i].timeLeft + " sec.";
    tableCell3.innerHTML = currentResults[i].numPickups;
    tableCell4.innerHTML = currentResults[i].score;

    tableRow.append(tableCell0, tableCell1, tableCell2, tableCell3, tableCell4);
    statsTable.appendChild(tableRow);
  }
}

// CHANGING HEADLINE AND IMAGE ACCORDING TO WIN/FAIL STATUS
let timeLastGame = localStorage.getItem("time");
let timeWinFail = JSON.parse(timeLastGame);
console.log(timeWinFail);

localStorage.removeItem("time");

console.log(timeWinFail);

// if win
if (timeWinFail > 0) {
  if (lang2 === "#de") {
    statsMsg.innerHTML =
      "Glückwunsch, du hast es geschafft! Guck dir deine Ergebnisse an!";
  } else if (lang2 === "#en") {
    statsMsg.innerHTML = "Congrats, you did it! Take a look at your scores!";
  }
}

// if lose
if (timeWinFail === 0) {
  statsImg.src = "./assets/images/bomb.png";
  if (lang2 === "#de") {
    statsMsg.innerHTML =
      "Hoppla, Zeit ist um. Sieh dir deine Punkte an und versuch's nochmal!";
  } else if (lang2 === "#en") {
    statsMsg.innerHTML =
      "Oops, time's up. Take a look at your scores and try again!";
  }
}

// if results are empty, we display another stats message
if (!currentResults) {
  if (lang2 === "#de") {
    statsMsg.innerHTML = "Keine Ergebnisse bisher. Spiel zuerst eine Runde!";
  } else if (lang2 === "#en") {
    statsMsg.innerHTML = "No stats yet. Play a game first!";
  }
}

enButton.addEventListener(("click"), () => {
  if (localStorage.getItem("languageLs") === "#en" && !currentResults) {
    statsMsg.textContent = "No stats yet. Play a game first!";
} else {
  statsMsg.textContent = "Take a look at your scores!";
}

  if (timeWinFail > 0) {
      statsMsg.innerHTML = "Congrats, you did it! Take a look at your scores!";
    }
    if (timeWinFail === 0){
      statsImg.src = "./assets/images/bomb.png";
    statsMsg.innerHTML =
        "Oops, time's up. Take a look at your scores and try again!";
      }
    
  });

deButton.addEventListener(("click"), () => {
  if(localStorage.getItem("languageLs") === "#de" && !currentResults) {
    statsMsg.textContent = "Keine Ergebnisse bisher. Spiel zuerst eine Runde!";
  } else {
    statsMsg.textContent = "Werfen Sie einen Blick auf Ihre Ergebnisse!";
  }
  if (timeWinFail > 0) {
      statsMsg.innerHTML =
        "Glückwunsch, du hast es geschafft! Guck dir deine Ergebnisse an!";
  }
  if (timeWinFail === 0) {
    statsImg.src = "./assets/images/bomb.png";
      statsMsg.innerHTML =
        "Hoppla, Zeit ist um. Sieh dir deine Punkte an und versuch's nochmal!";
  }
});
