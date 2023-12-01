const { game, newGame, showScore, addTurn } = require('../game');

beforeAll(() => {
  let fs = require('fs');
  let fileContents = fs.readFileSync("index.html", "utf-8");
  document.open();
  document.write(fileContents);
  document.close();
});

describe('game object contains correct keys', () => {
  test("score key exists", () => {
    expect("score" in game).toBe(true);
  })
  test("currentGame key exists", () => {
    expect("currentGame" in game).toBe(true);
  })
  test("playerMoves key exists", () => {
    expect("playerMoves" in game).toBe(true);
  })
  test("choices key exists", () => {
    expect("choices" in game).toBe(true);
  })
  test("choices contains the corrects IDs", () => {
    expect(game.choices).toEqual(['button1', 'button2', 'button3', 'button4']);
  });
});

/*
newGame() should:
- Reset the score to zero 
- Clear the playerMoves array
- Clear the currentGame array
*/

describe('newGame works correctly', () => {
  beforeAll(() => {
    game.score = 42;
    game.playerMoves = ['button1', 'button2'];
    game.currentGame = ['button1', 'button2'];
    document.getElementById('score').innerText = '42';
    newGame();
  });
  test("should set the game score to zero", () => {
    expect(game.score).toEqual(0);
  });
  test("should clear the playerMoves array", () => {
    expect(game.playerMoves.length).toBe(0);
  });
  test("should be one element in the computer's array", () => {
    expect(game.currentGame.length).toBe(1);
  })
  test("should display zero for the element with the ID of score", () => {
    expect(document.getElementById('score').innerText).toEqual(0);
  });
})

