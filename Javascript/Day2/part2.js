// The second column instead of being what you are playing is how you need to end the round.
// X means you need to lose
// Y means you need to end the round in a draw
// Z means you need to win.
// Opponent: A for Rock, B for Papeer, and C for Scissors
// Me: X for Rock, Y for Paper, and Z for Scissors

const { read, decideWinner, chooseShape } = require("./helpers");

let total = 0;
read.forEach((round) => {
  const shape = chooseShape(round);
  total += decideWinner(shape);
});

//16098 is the correct answer
console.log(total);
