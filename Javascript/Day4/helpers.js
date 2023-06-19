const path = require("path");
const fs = require("fs");

const testInputFile = "testinputfile.txt";
const realInputFile = "inputfile.txt";

const read = fs
  .readFileSync(path.join(__dirname, realInputFile), "utf8")
  .replace(/\r/g, "")
  .replaceAll(" ", "")
  .trim()
  .split("\n");

module.exports = {
  read,
};
