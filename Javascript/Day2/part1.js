// First Column (What your opponent is going to play): A for Rock, B for Papeer, and Z for Scissors
// Second Column (What you should play in response): X for Rock, Y for Paper, and Z for Scissors
// Winning with Rock is 1, Paper is 2, Scissors is 3
// Loss is 0 points, draw is 3 points, and win is 6 points

const { read, decideWinner } = require("./helpers");

let total = 0;
read.forEach((game) => {
  total += decideWinner(game);
});
//15572 is the correct answer.
console.log(total);
