let  game = {
  score: 0,
  currentGame: [],
  playerMoves: [],
  turnNumber: 0,
  choices: ['button1', 'button2', 'button3', 'button4'],
};

function newGame() {
  game.score = 0;
  game.playerMoves = [];
  game.currentGame = [];
  for (let circle of document.getElementsByClassName('circle')) {
    if (circle.getAttribute('data-listener') !== 'true') {
      circle.addEventListener('click', (e) => {
        let move = e.target.getAttribute('id');
        lightsOn(move);
        game.playerMoves.push(move);
        playerTurn();
      });
      circle.setAttribute('data-listener', 'true');
    }
  }
  showScore();
  addTurn();
}

function addTurn() {
  game.playerMoves = [];
  game.currentGame.push(game.choices[(Math.floor(Math.random() * 4))]);
  showTurns();
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

function showTurns() {
  game.turnNumber = 0;
  let turns = setInterval(() => {
    lightsOn(game.currentGame[game.turnNumber]); //using game.turnNumber for indexing
    game.turnNumber++;
    if (game.turnNumber >= game.currentGame.length){
      clearInterval(turns);
    }
  }, 800)
}


// Curly braces are needed when exporting more than one function from a file.
module.exports = { game, newGame, showScore, addTurn, lightsOn, showTurns }; 

 