const path = require("path");
const fs = require("fs");

//Make sure to convert windows line endings to Unix line endings here.
const read = fs
  .readFileSync(path.join(__dirname, "inputfile.txt"), "utf8")
  .replace(/\r/g, "")
  .replaceAll(" ", "")
  .trim()
  .split("\n");

module.exports = {
  read,
};
