// SETUP

const GRID_SIZE = 20;
const CELL_SIZE = 20;
const DIRECTION = {
  ArrowLeft: {
    code: 37,
    movement: -1,
    rotation: 180
  },
  ArrowUp: {
    code: 38,
    movement: -GRID_SIZE,
    rotation: 270
  },
  ArrowRight: {
    code: 39,
    movement: 1,
    rotation: 0
  },
  ArrowDown: {
    code: 40,
    movement: GRID_SIZE,
    rotation: 90
  }
};       


const OBJECT_TYPE = {
  BLANK: 'blank',
  WALL: 'wall',
  DOT: 'dot',
  BLINKY: 'blinky',
  PINKY: 'pinky',
  INKY: 'inky',
  CLYDE: 'clyde',
  PILL: 'pill',
  PACMAN: 'pacman',
  GHOST: 'ghost',
  SCARED: 'scared',
  GHOSTLAIR: 'lair'
};

// Lookup array for classes
CLASS_LIST = [
  OBJECT_TYPE.BLANK,
  OBJECT_TYPE.WALL,
  OBJECT_TYPE.DOT,
  OBJECT_TYPE.BLINKY,
  OBJECT_TYPE.PINKY,
  OBJECT_TYPE.INKY,
  OBJECT_TYPE.CLYDE,
  OBJECT_TYPE.PILL,
  OBJECT_TYPE.PACMAN,
  OBJECT_TYPE.GHOSTLAIR
];

const LEVEL = [
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1,
  1, 2, 1, 1, 2, 1, 1, 1, 2, 1, 1, 2, 1, 1, 1, 2, 1, 1, 2, 1,
  1, 7, 1, 1, 2, 1, 1, 1, 2, 1, 1, 2, 1, 1, 1, 2, 1, 1, 7, 1,
  1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1,
  1, 2, 1, 1, 2, 1, 2, 1, 1, 1, 1, 1, 1, 2, 1, 2, 1, 1, 2, 1,
  1, 2, 2, 2, 2, 1, 2, 2, 2, 1, 1, 2, 2, 2, 1, 2, 2, 2, 2, 1,
  1, 1, 1, 1, 2, 1, 1, 1, 2, 1, 1, 2, 1, 1, 1, 2, 1, 1, 1, 1,
  0, 0, 0, 1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1, 0, 0, 0,
  0, 0, 0, 1, 2, 1, 2, 1, 9, 9, 9, 9, 1, 2, 1, 2, 1, 0, 0, 0,
  1, 1, 1, 1, 2, 1, 2, 1, 9, 9, 9, 9, 1, 2, 1, 2, 1, 1, 1, 1, 
  1, 0, 0, 0, 2, 2, 2, 1, 9, 9, 9, 9, 1, 2, 2, 2, 0, 0, 0, 1, 
  1, 1, 1, 1, 2, 1, 2, 1, 9, 9, 9, 9, 1, 2, 1, 2, 1, 1, 1, 1, 
  0, 0, 0, 1, 2, 1, 2, 1, 1, 1, 1, 1, 1, 2, 1, 2, 1, 0, 0, 0,
  0, 0, 0, 1, 2, 1, 2, 0, 0, 0, 0, 0, 0, 2, 1, 2, 1, 0, 0, 0,
  1, 1, 1, 1, 2, 1, 1, 1, 2, 1, 1, 2, 1, 1, 1, 2, 1, 1, 1, 1,
  1, 2, 2, 2, 2, 1, 2, 2, 2, 1, 1, 2, 2, 2, 1, 2, 2, 2, 2, 1,
  1, 2, 1, 1, 2, 1, 2, 1, 1, 1, 1, 1, 1, 2, 1, 2, 1, 1, 2, 1,
  1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1,
  1, 7, 1, 1, 2, 1, 1, 1, 2, 1, 1, 2, 1, 1, 1, 2, 1, 1, 7, 1,
  1, 2, 1, 1, 2, 1, 1, 1, 2, 1, 1, 2, 1, 1, 1, 2, 1, 1, 2, 1,
  1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1,
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
];


// GAMEBOARD


class GameBoard {
  constructor(DOMGrid) {
    this.dotCount = 0;
    this.grid = [];
    this.DOMGrid = DOMGrid;
  }

  showGameStatus() {

  }

  createGrid(level) {
    this.dotCount = 0;
    this.grid = [];
    this.DOMGrid.innerHTML = '';
    // First set correct amount of columns based on Grid Size and Cell Size
    this.DOMGrid.style.cssText = `grid-template-columns: repeat(${GRID_SIZE}, ${CELL_SIZE}px);`;

    level.forEach((square) => {
      const div = document.createElement('div');
      div.classList.add('square', CLASS_LIST[square]);
      div.style.cssText = `width: ${CELL_SIZE}px; height: ${CELL_SIZE}px;`;
      this.DOMGrid.appendChild(div);
      this.grid.push(div);

      // Add dots
      if (CLASS_LIST[square] === OBJECT_TYPE.DOT) this.dotCount++;
    });
  }

  // to add or remove classes
  // if we want to change the grid to canves, we don't have classes. that's why it calls addobjects
  addObject(pos, classes) {
    this.grid[pos].classList.add(...classes)
  }

  removeObject(pos, classes) {
    this.grid[pos].classList.remove(...classes)
  }

  objectExist(pos, object) {
    return this.grid[pos].classList.contains(object)
  }

  // to rotate pacman on the grid
  rotateDiv(pos, deg) {
    this.grid[pos].style.transform = `rotate(${deg}deg)`;
  }

  // planned to be used on both pacman and ghosts
  moveCharacter(character) {
    if(character.shouldMove()) {
      const { nextMovePos, direction } = character.getNextMove(
        this.objectExist.bind(this)
      )
      const {classesToRemove, classesToAdd} = character.makeMove()

      if(character.rotation && nextMovePos !== character.pos) {
        this.rotateDiv(nextMovePos, character.dir.rotation); // we have rotated the div
        // we have to rotat back the previous div or the ghost will be rotated when they move to that div
        this.rotateDiv(character.pos, 0);
      }

      // now we can move the character on the div, by remove and adding classes
      this.removeObject(character.pos, classesToRemove);
      this.addObject(nextMovePos, classesToAdd);

      // then we have to set the new position
      character.setNewPos(nextMovePos, direction)

    }
  }

  // static method: is something we can call without instantiating the class, we can call it directly on the class
  static createGameBoard(DOMGrid, level) {
    const board = new this(DOMGrid);
    board.createGrid(level);
    return board;
  }
}


//  CRINGE


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

    if(this.timer === this.speed) {
      this.timer = 0;
      return true
    }
    this.timer++
  }

  // this method calculate the next move of pacman
  getNextMove(objectExist) {
    let nextMovePos = this.pos + this.dir.movement;

    // if statement to check if we collide with a wall
    if(
      objectExist(nextMovePos, OBJECT_TYPE.WALL) ||
      objectExist(nextMovePos, OBJECT_TYPE.GHOSTLAIR) 
    ) {
        nextMovePos = this.pos;  // we don't do anything, we set the current position
      }
      return {nextMovePos, direction: this.dir}  // we return an object and is the same interface that a ghost class is going to have
    
  }
  // if we have next move then we have a method to make the move
  // this is a div in the dom, so we can add/remove classes when we make a move
  makeMove() {
    const classesToRemove = [OBJECT_TYPE.PACMAN]; // we remove the pacman class from the current position and we add it to the new position
    const classesToAdd = [OBJECT_TYPE.PACMAN];

    return {classesToRemove, classesToAdd} // with ES6 syntax we don't need to {classesToRemove: classesToRemove} as the name is the same as the const
  }

  setNewPos(nextMovePos) {
      this.pos = nextMovePos;
  }

handleKeyInput = (e, objectExist) => {     // e = event
    // console.log(e)  if we log we can see the key: ArrowUp
    let dir;

    // we can also create if statement for each key instead of one liner
    if (e.keyCode >= 37 && e.keyCode <= 40) {
      dir = DIRECTION[e.key];  // [e.key] = ArrowUp, ArroLeft,.. 
    } else {
      return;
    }

    const nextMovePos = this.pos + dir.movement;
    if (
      objectExist(nextMovePos, OBJECT_TYPE.WALL) ||
      objectExist(nextMovePos, OBJECT_TYPE.GHOSTLAIR)
      ) return;
    this.dir = dir;
  };
}





// Dom Elements
const gameGrid = document.querySelector('#game');
const scoreTable = document.querySelector('#score');
const startButton = document.querySelector('#start-button');
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


function playAudio() {}

function gameOver() {}

function checkCollision() {}

function gameLoop(pacman, ghosts) {
    gameBoard.moveCharacter(pacman)
}

function startGame() {
    gameWin = false;
    powerPillActive = false;
    score = 0;

    startButton.classList.add('hide');

    gameBoard.createGrid(LEVEL);

    const pacman = new Pacman(2, 287); // Pacman(speed, position)
    gameBoard.addObject(287, [OBJECT_TYPE.PACMAN]); // we are adding a class(position, array with classes)

    document.addEventListener('keydown', (e) =>
    pacman.handleKeyInput(e, gameBoard.objectExist.bind(gameBoard)) // we have to bind it because we call if from a function, otherwise it will return undefined
                                // or we can set an arrow function in the objectExist
                                // objectExist(pos, object) => {
                                // return this.grid[pos].classList.contains(object)}
  
  );
    timer = setInterval(() => gameLoop(pacman), GLOBAL_SPEED)
}


// Initialize game
startButton.addEventListener('click', startGame);