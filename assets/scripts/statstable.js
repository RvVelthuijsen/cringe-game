// DISPLAY STATS FROM LOCAL STORAGE
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
console.log(timeLastGame);
let timeWinFail = JSON.parse(timeLastGame);
console.log(timeWinFail);

const statsMsg = document.querySelector(".stats-message");
const statsImg = document.querySelector(".stats-img");

// if win
if (timeWinFail > 0) {
  statsMsg.innerHTML = "Congrats, you did it! Take a look at your scores!";
}

// if lose
if (timeWinFail === 0) {
  statsMsg.innerHTML =
    "Oops, time's up. Take a look at your scores and try again!";
  statsImg.src = "./assets/images/bomb.png";
}

// if results are empty, we display another stats message
if (!currentResults) {
  statsMsg.innerHTML = "No stats yet. Play a game first!";
}

/* // adjusting message on stats-page
const statsPage = document.querySelector(".stats-page");

function regularStatsMsg() {
  if (timeLastGame) {
    timeLastGame = undefined;
    timeLastGame = statsMsg.innerHTML = "Take a look at your scores!";
  }
}

statsPage.addEventListener("click", regularStatsMsg);
 */
