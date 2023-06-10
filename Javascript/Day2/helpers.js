const path = require("path");
const fs = require("fs");

pointValues = { X: 1, Y: 2, Z: 3, Win: 6, Draw: 3, Loss: 0 };

winCase = ["CX", "AY", "BZ"];
loseCase = ["AZ", "BX", "CY"];
drawCase = ["AX", "BY", "CZ"];

// First Column (What your opponent is going to play): A for Rock, B for Papeer, and C for Scissors
// Second Column (What you should play in response): X for Rock, Y for Paper, and Z for Scissors
winDict = { A: "Y", B: "Z", C: "X" };
loseDict = { A: "Z", B: "X", C: "Y" };
drawDict = { A: "X", B: "Y", C: "Z" };
//Make sure to convert windows line endings to Unix line endings here
const read = fs
  .readFileSync(path.join(__dirname, "inputfile.txt"), "utf8")
  .replace(/\r/g, "")
  .replaceAll(" ", "")
  .trim()
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

const chooseShape = (round) => {
  let shape = "";
  if (round.includes("X")) {
    //Lose
    shape = loseDict[round[0]];
  } else if (round.includes("Y")) {
    //Draw
    shape = drawDict[round[0]];
  } else if (round.includes("Z")) {
    //Win
    shape = winDict[round[0]];
  }
  // console.log(`round: ${round[0].concat(shape)}`);
  return round[0].concat(shape);
};

module.exports = {
  read,
  decideWinner,
  chooseShape,
};
