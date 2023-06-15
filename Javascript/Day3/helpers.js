const path = require("path");
const fs = require("fs");

//Make sure to convert windows line endings to Unix line endings here.
const read = fs
  .readFileSync(path.join(__dirname, "inputfile.txt"), "utf8")
  .replace(/\r/g, "")
  .replaceAll(" ", "")
  .trim()
  .split("\n");

const isUpperCase = (string) => /^[A-Z]*$/.test(string);

//this method is to get the character value for adding at the end
const getItemPriority = (char) => {
  const charCode = char.charCodeAt(0);
  return isUpperCase(char) ? charCode - 38 : charCode - 96;
};

//this is to find the common item between the two compartments
const findCommonItem = (items) => {
  const amountOfItems = items.length;
  const firstCompartment = new Set(items.slice(0, amountOfItems / 2));
  const secondCompartment = new Set(
    items.slice(amountOfItems / 2, amountOfItems)
  );
  return [...firstCompartment].filter((item) => secondCompartment.has(item))[0];
};

//this method is to find the common item in the group of 3 elves
const findCommonItemGroup = (groupItems) => {
  let commonItem = [...groupItems[0]].filter(
    (item) => groupItems[1].has(item) && groupItems[2].has(item)
  );
  return commonItem[0];
};

module.exports = {
  read,
  getItemPriority,
  findCommonItem,
  findCommonItemGroup,
};
