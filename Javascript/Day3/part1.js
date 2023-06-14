const { read } = require("./helpers");

//A single lower case of single uppercase letter identifies an item.
//"A" is an item and "a" is a completely separate item.
//First half of items in the line go in the first compartment.
//Second half of items in the line go to the second compartment.

const isUpperCase = (string) => /^[A-Z]*$/.test(string);

//this method is to get the character value for adding at the end
const getItemPriority = (char) => {
  const charCode = char.charCodeAt(0);
  return isUpperCase(char) ? charCode - 38 : charCode - 96;
};

const findCommonItem = (items) => {
  const amountOfItems = items.length;
  const firstCompartment = new Set(items.slice(0, amountOfItems / 2));
  const secondCompartment = new Set(
    items.slice(amountOfItems / 2, amountOfItems)
  );
  return [...firstCompartment].filter((item) => secondCompartment.has(item))[0];
};

const findSumOfItems = (allRuckSacks) => {
  let sum = 0;
  allRuckSacks.forEach((line) => {
    let commonItem = findCommonItem(line);
    sum += getItemPriority(commonItem);
  });
  return sum;
};

//8139 is the answer
console.log("total: ", findSumOfItems(read));
