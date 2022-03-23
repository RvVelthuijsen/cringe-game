// SETUP

const GRID_SIZE = 20;
const CELL_SIZE = 20;
const DIRECTIONS = {
  ArrowLeft: {
    code: 37,
    movement: -1,
    rotation: 180,
  },
  ArrowUp: {
    code: 38,
    movement: -GRID_SIZE,
    rotation: 270,
  },
  ArrowRight: {
    code: 39,
    movement: 1,
    rotation: 0,
  },
  ArrowDown: {
    code: 40,
    movement: GRID_SIZE,
    rotation: 90,
  },
};

const OBJECT_TYPE = {
  BLANK: "blank",
  WALL: "wall",
  PICKUP: "pickup",
  DOOR: "door",
  PLAYER: "player",
  ENEMY: "enemy",
  DOOROPEN: "dooropen",
  JS: "js",
  HTML: "html",
  GIT: "git",
  CSS: "css",
};

// Lookup array for classes
const CLASS_LIST = [
  OBJECT_TYPE.BLANK,
  OBJECT_TYPE.WALL,
  OBJECT_TYPE.PICKUP,
  OBJECT_TYPE.DOOR,
  OBJECT_TYPE.PLAYER,
  OBJECT_TYPE.ENEMY,
  OBJECT_TYPE.DOOROPEN,
];

const PICKUPS = [
  OBJECT_TYPE.JS,
  OBJECT_TYPE.HTML,
  OBJECT_TYPE.GIT,
  OBJECT_TYPE.CSS,
];

const LEVEL = [
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 3, 3, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1,
  1, 1, 1, 1, 3, 3, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 3, 3,
  1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1,
  1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1,
  0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1,
  1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0,
  1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0,
  1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 1, 1,
];

const pickupLevel = LEVEL;
const doorpos = [];
let playerName = "";
let time = 0;
let results = [];

function addPickups(level) {
  let tries = 4;
  for (let i = 0; i < level.length; i++) {
    const random = Math.floor(Math.random() * level.length);
    if (level[random] === 0) {
      level[random] = 2;
      tries--;
      if (tries === 0) {
        return;
      }
    }
  }
}

function globalTimer(levelTime) {
  time = levelTime;

  const countDown = document.getElementById("timer");

  setInterval(updateCountdown, 1000);

  function updateCountdown() {
    time < 10
      ? (countDown.innerHTML = "0" + time)
      : (countDown.innerHTML = time);
    time--;
    if (time === 0) {
      window.location.href = "./stats.html";
    }
  }
}

// GAMEBOARD

class GameBoard {
  constructor(DOMGrid) {
    this.grid = [];
    this.DOMGrid = DOMGrid;
  }

  screenSizeDiv(div) {
    const mediaQuery = window.matchMedia("(max-width: 600px)");
    if (mediaQuery.matches) {
      div.style.cssText = `width: calc(${CELL_SIZE} * .05rem); height: calc(${CELL_SIZE} * .05rem);`;
    } else {
      div.style.cssText = `width: calc(${CELL_SIZE} * .1rem); height: calc(${CELL_SIZE} * .1rem);`;
    }
  }

  addPickupClass(grid) {
    const pickups = PICKUPS;
    for (let i = 0; i < grid.length; i++) {
      if (grid[i].classList.contains(OBJECT_TYPE.PICKUP)) {
        grid[i].classList.add(pickups[0]);
        pickups.shift();
      }
    }
  }

  handlePickup(pos, object) {
    if (gameBoard.objectExist(pos, object)) {
      if (gameBoard.objectExist(pos, OBJECT_TYPE.HTML)) {
        gameBoard.removeObject(pos, [OBJECT_TYPE.HTML]);
        gameBoard.createPickup(OBJECT_TYPE.HTML);
        pickupCount++;
        score += 50;
      }
      if (gameBoard.objectExist(pos, OBJECT_TYPE.CSS)) {
        gameBoard.removeObject(pos, [OBJECT_TYPE.CSS]);
        gameBoard.createPickup(OBJECT_TYPE.CSS);
        pickupCount++;
        score += 50;
      }
      if (gameBoard.objectExist(pos, OBJECT_TYPE.JS)) {
        gameBoard.removeObject(pos, [OBJECT_TYPE.JS]);
        gameBoard.createPickup(OBJECT_TYPE.JS);
        pickupCount++;
        score += 50;
      }
      if (gameBoard.objectExist(pos, OBJECT_TYPE.GIT)) {
        gameBoard.removeObject(pos, [OBJECT_TYPE.GIT]);
        gameBoard.createPickup(OBJECT_TYPE.GIT);
        pickupCount++;
        score += 50;
      }
    }

    if (pickupCount === 4) {
      doorOpen = true;
      gameGrid.style.backgroundImage =
        "url('./assets/images/dooropen map.png')";
    }

    // check if player can enter the door
    if (doorOpen === true) {
      for (let i = 0; i < doorpos.length; i++) {
        gameBoard.removeObject(doorpos[i], [OBJECT_TYPE.DOOR]);
        gameBoard.addObject(doorpos[i], [OBJECT_TYPE.DOOROPEN]);
      }
    }
  }

  createDoorArray(grid) {
    for (let i = 0; i < grid.length; i++) {
      if (grid[i].classList.contains(OBJECT_TYPE.DOOR)) {
        doorpos.push([i]);
      }
    }
  }

  gameStatusRedirect() {
    window.location.href = "./stats.html";
  }

  createPickup(pickupToAdd) {
    const pickUp = document.createElement("div");
    pickUp.classList.add(pickupToAdd);
    this.screenSizeDiv(pickUp);
    scoreTable.appendChild(pickUp);
  }

  createGrid(level) {
    this.grid = [];
    this.DOMGrid.innerHTML = "";
    // First set correct amount of columns based on Grid Size and Cell Size
    this.DOMGrid.style.cssText = `grid-template-columns: repeat(${GRID_SIZE}, 1fr);`;

    level.forEach((square) => {
      const div = document.createElement("div");
      div.classList.add("square", CLASS_LIST[square]);
      // Check if the media query is true
      this.screenSizeDiv(div);
      this.DOMGrid.appendChild(div);
      this.grid.push(div);
    });

    this.addPickupClass(this.grid);
    this.createDoorArray(this.grid);
  }

  // to add or remove classes
  // if we want to change the grid to canves, we don't have classes. that's why it calls addobjects
  addObject(pos, classes) {
    this.grid[pos].classList.add(...classes);
  }

  removeObject(pos, classes) {
    this.grid[pos].classList.remove(...classes);
  }

  objectExist(pos, object) {
    return this.grid[pos].classList.contains(object);
  }

  // to rotate player on the grid
  rotateDiv(pos, deg) {
    this.grid[pos].style.transform = `rotate(${deg}deg)`;
  }

  // planned to be used on both player and enemies
  moveCharacter(character) {
    if (character.shouldMove()) {
      const { nextMovePos, direction } = character.getNextMove(
        this.objectExist.bind(this)
      );
      const { classesToRemove, classesToAdd } = character.makeMove();

      if (character.rotation && nextMovePos !== character.pos) {
        this.rotateDiv(nextMovePos, character.dir.rotation); // we have rotated the div
        // we have to rotat back the previous div or the enemy will be rotated when they move to that div
        this.rotateDiv(character.pos, 0);
      }
      // to rotate div in place we check if nextMovePos is char.pos then rotating the char.pos div
      if (nextMovePos === character.pos) {
        this.rotateDiv(character.pos, character.dir.rotation);
      }

      // now we can move the character on the div, by remove and adding classes
      this.removeObject(character.pos, classesToRemove);
      this.addObject(nextMovePos, classesToAdd);

      // then we have to set the new position
      character.setNewPos(nextMovePos, direction);
    }
  }

  storeResults(myScore) {
    if (!localStorage.getItem("results")) {
      localStorage.setItem(
        "results",
        JSON.stringify([
          {
            name: playerName,
            score: myScore,
            numPickups: pickupCount,
            timeLeft: time,
          },
        ])
      );
    } else {
      results = localStorage.getItem("results");
      let currentResults = JSON.parse(results);

      if (currentResults.length > 4) {
        currentResults.sort((a, b) =>
          b.score > a.score ? 1 : a.score > b.score ? -1 : 0
        );

        for (let i = 0; i < currentResults.length; i++) {
          console.log(currentResults);
          let newResult = {
            name: playerName,
            score: myScore,
            numPickups: pickupCount,
            timeLeft: time,
          };
          if (myScore >= currentResults[i].score) {
            currentResults.splice(i, 0, newResult);
            currentResults.pop();
            localStorage.setItem("results", JSON.stringify(currentResults));
            return;
          }
        }
      } else {
        currentResults.push({
          name: playerName,
          score: myScore,
          numPickups: pickupCount,
          timeLeft: time,
        });

        localStorage.setItem("results", JSON.stringify(currentResults));
      }
    }
  }

  // static method: is something we can call without instantiating the class, we can call it directly on the class
  static createGameBoard(DOMGrid, level) {
    const board = new this(DOMGrid);
    board.createGrid(level);
    return board;
  }
}

//  PLAYER

class Player {
  constructor(startPos) {
    this.pos = startPos;
    this.dir = null;
    this.timer = 0;
    this.rotation = true;
  }

  // check if player is ready to move or not
  shouldMove() {
    // initially we don't move before player press a direciton on the keyboard
    if (!this.dir) return false;

    // instead of returning true once every N of loops through the timer we return true only is 'this.dir' which is a keypress is true
    if (this.dir) {
      return true;
    }
  }

  // this method calculate the next move of player
  getNextMove(objectExist) {
    let nextMovePos = this.pos + this.dir.movement;

    // if statement to check if we collide with a wall
    if (
      objectExist(nextMovePos, OBJECT_TYPE.WALL) ||
      objectExist(nextMovePos, OBJECT_TYPE.DOOR)
    ) {
      nextMovePos = this.pos; // we don't do anything, we set the current position
    }

    return { nextMovePos, direction: this.dir }; // we return an object and is the same interface that a enemy class is going to have
  }
  // if we have next move then we have a method to make the move
  // this is a div in the dom, so we can add/remove classes when we make a move
  makeMove() {
    const classesToRemove = [OBJECT_TYPE.PLAYER]; // we remove the player class from the current position and we add it to the new position
    const classesToAdd = [OBJECT_TYPE.PLAYER];

    return { classesToRemove, classesToAdd }; // with ES6 syntax we don't need to {classesToRemove: classesToRemove} as the name is the same as the const
  }

  // now when setting new position we're first checking if a key was pressed (this.dir = null means no key press), and only then we change player pos
  setNewPos(nextMovePos) {
    if ((this.dir = null)) {
      return;
    } else {
      this.pos = nextMovePos;
    }
  }

  handleKeyInput = (e) => {
    // e = event
    // console.log(e)  if we log we can see the key: ArrowUp
    let dir;

    // we can also create if statement for each key instead of one liner
    if (e.keyCode >= 37 && e.keyCode <= 40) {
      dir = DIRECTIONS[e.key]; // [e.key] = ArrowUp, ArroLeft,..
    } else {
      return;
    }
    this.dir = dir;
  };
}

// Dom Elements
const gameGrid = document.querySelector("#game");
const scoreTable = document.querySelector("#score");
const startButton = document.querySelector("#start-button");
const leftButton = document.getElementById("left-btn");
const rightButton = document.getElementById("right-btn");
const upButton = document.getElementById("up-btn");
const downButton = document.getElementById("down-btn");
// console.log("RIGHT BUTTON",rightButton); // used to check whether the button was recognized or not
// Game constants
const GLOBAL_SPEED = 80; // ms
const gameBoard = GameBoard.createGameBoard(gameGrid, LEVEL);
// Initial setup
let score = 0;
let timer = null;
let gameWin = false;
let pickupCount = 0;
let doorOpen = false;

function gameOver(player, grid) {
  document.removeEventListener("keydown", (e) =>
    player.handleKeyInput(e, gameBoard.objectExist.bind(gameBoard))
  );
  clearInterval(timer); // we stop the game loop

  score = score + time * 10;
  alert(`You scored ${score} amount of points!`);

  gameBoard.storeResults(score);

  gameBoard.gameStatusRedirect();
}

// function checkCollision(player, enemy) {
//   const collidedEnemy = enemy.find( enemy => player.pos === enemy.pos);

//   if(collidedEnemy) {
//     if(player.powerPill) {
//       gameBoard.removeObject(collidedEnemy.pos, [
//         OBJECT_TYPE.PICKUP,
//         OBJECT_TYPE.SCARED,
//         collidedEnemy.name
//       ]);
//       collidedEnemy.pos = collidedEnemy.startPos
//       score += 100;
//     } else {
//       gameBoard.removeObject(player.pos, [OBJECT_TYPE.PLAYER]);
//       gameBoard.rotateDiv(player.pos, 0)
//       gameOver(player, gameGrid)
//     }
//   }
// }

function gameLoop(player, enemies) {
  gameBoard.moveCharacter(player);
  //gameBoard.moveCharacter(enemies)

  // check if player collects pickup
  gameBoard.handlePickup(player.pos, OBJECT_TYPE.PICKUP);

  // // Check if all pickups have been collected
  if (gameBoard.objectExist(player.pos, OBJECT_TYPE.DOOROPEN)) {
    gameWin = true;
    gameOver(player);
  }
  // // Show the score
  // scoreTable.innerHTML = score;
}

function startGame() {
  gameWin = false;
  score = 0;
  playerName = prompt("What is your name?");
  console.log(playerName);

  startButton.classList.add("hide");

  addPickups(pickupLevel);
  gameBoard.createGrid(pickupLevel);

  const player = new Player(380); // Player(position)
  gameBoard.addObject(380, [OBJECT_TYPE.PLAYER]); // we are adding a class(position, array with classes)

  document.addEventListener(
    "keydown",
    (e) =>
      player.handleKeyInput(
        e,
        gameBoard.objectExist.bind(gameBoard),
        e.preventDefault()
      ) // we have to bind it because we call if from a function, otherwise it will return undefined
  );

  // hardcoding the directions for buttons
  rightButton.addEventListener("click", (e) =>
    player.handleKeyInput(
      { keyCode: 39, key: "ArrowRight" },
      gameBoard.objectExist.bind(gameBoard)
    )
  );
  leftButton.addEventListener("click", (e) =>
    player.handleKeyInput(
      { keyCode: 37, key: "ArrowLeft" },
      gameBoard.objectExist.bind(gameBoard)
    )
  );
  upButton.addEventListener("click", (e) =>
    player.handleKeyInput(
      { keyCode: 38, key: "ArrowUp" },
      gameBoard.objectExist.bind(gameBoard)
    )
  );
  downButton.addEventListener("click", (e) =>
    player.handleKeyInput(
      { keyCode: 40, key: "ArrowDown" },
      gameBoard.objectExist.bind(gameBoard)
    )
  );

  // const enemies = [
  //   new Enemy(5, 188, randomMovement, OBJECT_TYPE.BLINKY),
  //   new Enemy(4, 209, randomMovement, OBJECT_TYPE.PINKY),
  //   new Enemy(3, 230, randomMovement, OBJECT_TYPE.INKY),
  //   new Enemy(2, 251, randomMovement, OBJECT_TYPE.CLYDE),
  // ];

  // game loop
  timer = setInterval(() => gameLoop(player), GLOBAL_SPEED);
}

// Initialize game
startButton.addEventListener("click", () => {
  startGame();
  globalTimer(20);
});

// // ENEMIES

// class Enemy {
//   constructor(speed = 5, startPos, movement, name) {
//     this.name = name;
//     this.movement = movement;
//     this.startPos = startPos;
//     this.pos = startPos;
//     this.dir = DIRECTIONS.ArrowRight;
//     this.speed = speed;
//     this.timer = 0;
//     this.isScared = false;
//     this.rotation = false;
//   }
//   // since the methods are the same as in the player class, we could create a base class (ex.character) and extend this class from that class instead of repeating

//   shouldMove() {
//     if(this.timer === this.speed) {
//       this.timer = 0;
//       return true;
//     }
//     this.timer++;
//     console.log(timer);
//     return false
//   }

//   getNextMove(objectExist) {
//     const {nextMovePos, direction} = this.movement(
//       this.pos,
//       this.dir,
//       objectExist
//     );
//     return {nextMovePos, direction}
//   }

//   makeMove() {
//     const classesToRemove = [OBJECT_TYPE.ENEMY, OBJECT_TYPE.SCARED, this.name]
//     let classesToAdd = [OBJECT_TYPE.ENEMY, this.name]; // why let? we have to check if enemy is scared. if is scared we have to add a class also

//     if(this.isScared) classesToAdd = [...classesToAdd, OBJECT_TYPE.SCARED];

//     return { classesToRemove, classesToAdd };
//   }

//   setNewPos(nextMovePos, direction) {
//     this.pos = nextMovePos;
//     this.dir = direction
//   }
// }

// // ENEMY MOVES

// // Primitive random movement

// function randomMovement(position, direction, objectExist) {
//   let dir = direction;
//   let nextMovePos = position + dir.movement;
//   // bCreate an array from the directions object keys
//   const keys = Object.keys(DIRECTIONS)  // it grabs all the keys and put them into an array

//   // we don't want to enemies to move into a wall
//   while(
//     objectExist(nextMovePos, OBJECT_TYPE.WALL) || objectExist(nextMovePos, OBJECT_TYPE.ENEMY)
//   ) {
//     // get a random key from the key array
//     const key = keys[Math.floor(Math.random() * keys.length)];
//     // set the next move
//     dir = DIRECTIONS[key] // ex key = ArrowUp
//     // set the next move
//     nextMovePos = position + dir.movement; // this is how we constantly change the direction of the enemy until we have a direction that don't collide with a wall or enemy
//   }
//   return {nextMovePos, direction: dir}
// }
