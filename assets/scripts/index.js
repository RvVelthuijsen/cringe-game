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
  BLANK: 'blank',
  WALL: 'wall',
  DOT: 'dot',
  DOOR: 'door',
  PINKY: 'pinky',
  INKY: 'inky',
  CLYDE: 'clyde',
  PILL: 'pill',
  PACMAN: 'pacman',
  GHOST: 'ghost',
  SCARED: 'scared',
  GHOSTLAIR: 'lair',
  STAR: 'star',
  DOOROPEN: 'dooropen'
};

// Lookup array for classes
const CLASS_LIST = [
  OBJECT_TYPE.BLANK,
  OBJECT_TYPE.WALL,
  OBJECT_TYPE.DOT,
  OBJECT_TYPE.DOOR,
  OBJECT_TYPE.PINKY,
  OBJECT_TYPE.INKY,
  OBJECT_TYPE.CLYDE,
  OBJECT_TYPE.PILL,
  OBJECT_TYPE.PACMAN,
  OBJECT_TYPE.GHOSTLAIR,
  OBJECT_TYPE.STAR,
  OBJECT_TYPE.DOOROPEN
];

const LEVEL = [
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
2, 0, 0, 1, 1, 1, 1, 1, 3, 3, 1, 1, 1, 1, 1, 0, 0, 0, 0, 2,
0, 0, 0, 1, 1, 1, 1, 1, 3, 3, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0,
0, 0, 0, 1, 1, 1, 1, 1, 3, 3, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0,
0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1,
0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1,
0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1,
0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1,
0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1,
0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1,
0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1,
0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1,
0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 1,
0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1,
0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1,
0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1,
];

// GAMEBOARD

let doorpos = []
class GameBoard {
  constructor(DOMGrid) {
    this.grid = [];
    this.DOMGrid = DOMGrid;
  }

  showGameStatus(gameWin) {
     // Create and show game win or game over
    const div = document.createElement('div');
    div.classList.add('game-status');
    div.innerHTML = `${gameWin ? 'WIN!' : 'GAME OVER!'}`;
    this.DOMGrid.appendChild(div);
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
      const mediaQuery = window.matchMedia('(max-width: 600px)')
      if (mediaQuery.matches) {
        div.style.cssText = `width: calc(${CELL_SIZE} * .05rem); height: calc(${CELL_SIZE} * .05rem);`;
      } else {
        div.style.cssText = `width: calc(${CELL_SIZE} * .1rem); height: calc(${CELL_SIZE} * .1rem);`;
        
      }
      this.DOMGrid.appendChild(div);
      this.grid.push(div);
    });

    // creating an array with door.pos
    for (let i = 0; i < this.grid.length; i++) {
      if (this.grid[i].classList.contains('door')) {
        doorpos.push([i])
      }
      
    }
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

  // to rotate pacman on the grid
  rotateDiv(pos, deg) {
    this.grid[pos].style.transform = `rotate(${deg}deg)`;
  }

  // planned to be used on both pacman and ghosts
  moveCharacter(character) {
    if (character.shouldMove()) {
      const { nextMovePos, direction } = character.getNextMove(
        this.objectExist.bind(this)
      );
      const { classesToRemove, classesToAdd } = character.makeMove();

      if (character.rotation && nextMovePos !== character.pos) {
        this.rotateDiv(nextMovePos, character.dir.rotation); // we have rotated the div
        // we have to rotat back the previous div or the ghost will be rotated when they move to that div
        this.rotateDiv(character.pos, 0);
      }

      // now we can move the character on the div, by remove and adding classes
      this.removeObject(character.pos, classesToRemove);
      this.addObject(nextMovePos, classesToAdd);

      // then we have to set the new position
      character.setNewPos(nextMovePos, direction);
    }
  }

  // static method: is something we can call without instantiating the class, we can call it directly on the class
  static createGameBoard(DOMGrid, level) {
    const board = new this(DOMGrid);
    board.createGrid(level);
    return board;
  }
}


//  PACMAN


class Pacman {
  constructor(speed, startPos) {
    this.pos = startPos;
    this.speed = speed;
    this.dir = null;
    this.timer = 0;
    this.rotation = true;
  }

  // check if pacman is ready to move or not
  shouldMove() {
    // initially we don't move before player press a direciton on the keyboard
    if (!this.dir) return false;

    if (this.timer === this.speed) {
      this.timer = 0;
      return true;
    }
    this.timer++;
  }

  // this method calculate the next move of pacman
  getNextMove(objectExist) {
    let nextMovePos = this.pos + this.dir.movement;

    // if statement to check if we collide with a wall
    if (
      objectExist(nextMovePos, OBJECT_TYPE.WALL) ||
      objectExist(nextMovePos, OBJECT_TYPE.DOOR) 
    ) {
      nextMovePos = this.pos; // we don't do anything, we set the current position
    }
    return { nextMovePos, direction: this.dir }; // we return an object and is the same interface that a ghost class is going to have
  }
  // if we have next move then we have a method to make the move
  // this is a div in the dom, so we can add/remove classes when we make a move
  makeMove() {
    const classesToRemove = [OBJECT_TYPE.PACMAN]; // we remove the pacman class from the current position and we add it to the new position
    const classesToAdd = [OBJECT_TYPE.PACMAN];

    return { classesToRemove, classesToAdd }; // with ES6 syntax we don't need to {classesToRemove: classesToRemove} as the name is the same as the const
  }

  setNewPos(nextMovePos) {
    this.pos = nextMovePos;
  }

  handleKeyInput = (e, objectExist) => {
    // e = event
    // console.log(e)  if we log we can see the key: ArrowUp
    let dir;

    // we can also create if statement for each key instead of one liner
    if (e.keyCode >= 37 && e.keyCode <= 40) {
      dir = DIRECTIONS[e.key]; // [e.key] = ArrowUp, ArroLeft,..
    } else {
      return;
    }

    const nextMovePos = this.pos + dir.movement;
    if (
      objectExist(nextMovePos, OBJECT_TYPE.WALL) ||
      objectExist(nextMovePos, OBJECT_TYPE.DOOR)
      ) return;
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
const POWER_PILL_TIME = 10000; // ms
const GLOBAL_SPEED = 80; // ms
const gameBoard = GameBoard.createGameBoard(gameGrid, LEVEL);
// Initial setup
let score = 0;
let timer = null;
let gameWin = false;
let powerPillActive = false;
let powerPillTimer = null;
let dotCount = 2;
let doorOpen = false;


function playAudio() {}

function gameOver(pacman, grid) {
  document.removeEventListener('keydown', e => 
  pacman.handleKeyInput(e, gameBoard.objectExist.bind(gameBoard)));

  gameBoard.showGameStatus(gameWin);

  clearInterval(timer); // we stop the game loop

  startButton.classList.remove('hide')

}

// function checkCollision(pacman, dot) {
//   const collidedGhost = dot.find( dot => pacman.pos === dot.pos);

//   if(collidedGhost) {
//     if(pacman.powerPill) {
//       gameBoard.removeObject(collidedGhost.pos, [
//         OBJECT_TYPE.DOT,
//         OBJECT_TYPE.SCARED,
//         collidedGhost.name
//       ]);
//       collidedGhost.pos = collidedGhost.startPos
//       score += 100;
//     } else {
//       gameBoard.removeObject(pacman.pos, [OBJECT_TYPE.PACMAN]);
//       gameBoard.rotateDiv(pacman.pos, 0)
//       gameOver(pacman, gameGrid)
//     }
//   }
// }

function gameLoop(pacman, ghosts) {
    gameBoard.moveCharacter(pacman)

    // check if pacman eats a key
    if(gameBoard.objectExist(pacman.pos, OBJECT_TYPE.DOT)) {
      gameBoard.removeObject(pacman.pos, [OBJECT_TYPE.DOT]);
      dotCount--;

      if(dotCount === 0) {
        doorOpen = true;
      }
    } 


    // check if pacman can enter the door
    if (doorOpen === true){
      for (let i = 0; i < doorpos.length; i++) {
      gameBoard.removeObject(doorpos[i], [OBJECT_TYPE.DOOR]);
      gameBoard.addObject(doorpos[i], [OBJECT_TYPE.DOOROPEN])
      
      }
    }

    // // Check if all dots have been eaten
    // if(gameBoard.keyCount === 0) {
    //   gameWin = true;
    //   gameOver(pacman);
    // }

    // // Show the score
    // scoreTable.innerHTML = score;
}

function startGame() {
  gameWin = false;
  powerPillActive = false;
  score = 0;

  startButton.classList.add("hide");

  gameBoard.createGrid(LEVEL);

    const pacman = new Pacman(2, 380); // Pacman(speed, position)
    gameBoard.addObject(380, [OBJECT_TYPE.PACMAN]); // we are adding a class(position, array with classes)

  document.addEventListener(
    "keydown",
    (e) => pacman.handleKeyInput(e, gameBoard.objectExist.bind(gameBoard)) // we have to bind it because we call if from a function, otherwise it will return undefined
    // or we can set an arrow function in the objectExist
    // objectExist(pos, object) => {
    // return this.grid[pos].classList.contains(object)}
  );

  // hardcoding the directions for buttons
  rightButton.addEventListener("click", (e) =>
    pacman.handleKeyInput(
      { keyCode: 39, key: "ArrowRight" },
      gameBoard.objectExist.bind(gameBoard)
    )
  );
  leftButton.addEventListener("click", (e) =>
    pacman.handleKeyInput(
      { keyCode: 37, key: "ArrowLeft" },
      gameBoard.objectExist.bind(gameBoard)
    )
  );
  upButton.addEventListener("click", (e) =>
    pacman.handleKeyInput(
      { keyCode: 38, key: "ArrowUp" },
      gameBoard.objectExist.bind(gameBoard)
    )
  );
  downButton.addEventListener("click", (e) =>
    pacman.handleKeyInput(
      { keyCode: 40, key: "ArrowDown" },
      gameBoard.objectExist.bind(gameBoard)
    )
  );

  // const ghosts = [
  //   new Ghost(5, 188, randomMovement, OBJECT_TYPE.BLINKY),
  //   new Ghost(4, 209, randomMovement, OBJECT_TYPE.PINKY),
  //   new Ghost(3, 230, randomMovement, OBJECT_TYPE.INKY),
  //   new Ghost(2, 251, randomMovement, OBJECT_TYPE.CLYDE),
  // ];

  // gane loop
  timer = setInterval(() => gameLoop(pacman), GLOBAL_SPEED);
}

// Initialize game
startButton.addEventListener("click", startGame);

// // GHOSTS

// class Ghost {
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
//   // since the methods are the same as in the pacman class, we could create a base class (ex.character) and extend this class from that class instead of repeating

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
//     const classesToRemove = [OBJECT_TYPE.GHOST, OBJECT_TYPE.SCARED, this.name]
//     let classesToAdd = [OBJECT_TYPE.GHOST, this.name]; // why let? we have to check if ghost is scared. if is scared we have to add a class also

//     if(this.isScared) classesToAdd = [...classesToAdd, OBJECT_TYPE.SCARED];

//     return { classesToRemove, classesToAdd };
//   }

//   setNewPos(nextMovePos, direction) {
//     this.pos = nextMovePos;
//     this.dir = direction
//   }
// }

// // GHOST MOVES

// // Primitive random movement

// function randomMovement(position, direction, objectExist) {
//   let dir = direction;
//   let nextMovePos = position + dir.movement;
//   // bCreate an array from the directions object keys
//   const keys = Object.keys(DIRECTIONS)  // it grabs all the keys and put them into an array

//   // we don't want to ghosts to move into a wall
//   while(
//     objectExist(nextMovePos, OBJECT_TYPE.WALL) || objectExist(nextMovePos, OBJECT_TYPE.GHOST)
//   ) {
//     // get a random key from the key array
//     const key = keys[Math.floor(Math.random() * keys.length)];
//     // set the next move
//     dir = DIRECTIONS[key] // ex key = ArrowUp
//     // set the next move
//     nextMovePos = position + dir.movement; // this is how we constantly change the direction of the ghost until we have a direction that don't collide with a wall or ghost
//   }
//   return {nextMovePos, direction: dir}
// }
