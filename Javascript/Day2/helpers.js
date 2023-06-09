// First Column (What your opponent is going to play): A for Rock, B for Papeer, and C for Scissors
// Second Column (What you should play in response): X for Rock, Y for Paper, and Z for Scissors
// Winning with Rock is 1, Paper is 2, Scissors is 3
// Loss is 0 points, draw is 3 points, and win is 6 points

const path = require("path");
const fs = require("fs");

pointValues = { X: 1, Y: 2, Z: 3, Win: 6, Draw: 3, Loss: 0 };

winCase = ["CX", "AY", "BZ"];
loseCase = ["AZ", "BX", "CY"];
drawCase = ["AX", "BY", "CZ"];

//Make sure to convert windows line endings to Unix line endings here
const read = fs
  .readFileSync(path.join(__dirname, "inputfile.txt"), "utf8")
  .replace(/\r/g, "")
  .replaceAll(" ", "")
  .split("\n");

const decideWinner = (round) => {
  let total = 0;
  if (winCase.includes(round) === true) {
    total += pointValues[round[1]];
    total += pointValues["Win"];
  } else if (loseCase.includes(round) === true) {
    total += pointValues[round[1]];
    total += pointValues["Loss"];
  } else if (drawCase.includes(round) === true) {
    total += pointValues[round[1]];
    total += pointValues["Draw"];
  }
  // console.log(`round: ${round}, total: ${total}`);
  return total;
};

module.exports = {
  read,
  decideWinner,
};
