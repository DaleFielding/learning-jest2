let  game = {
  score: 0,
  currentGame: [],
  playerMoves: [],
  choices: ['button1', 'button2', 'button3', 'button4'],
};

function newGame() {
  game.score = 0;
  game.playerMoves = [];
  game.currentGame = [];
  showScore();
  addTurn();
}

function addTurn() {
  game.playerMoves = [];
  game.currentGame.push(game.choices[(Math.floor(Math.random() * 4))]);
  //showTurns();
}

function showScore() {
  document.getElementById('score').innerText = game.score;
}

function lightsOn(circle) {
  document.getElementById(circle).classList.add('light');
  setTimeout(() => {
    document.getElementById(circle).classList.remove('light');
  }, 400)
}

//curly braces are needed when exporting more than one function from a file.
module.exports = { game, newGame, showScore, addTurn, lightsOn }; 

 