const { read, getItemPriority, findCommonItem } = require("./helpers");

//A single lower case of single uppercase letter identifies an item.
//"A" is an item and "a" is a completely separate item.
//First half of items in the line go in the first compartment.
//Second half of items in the line go to the second compartment.

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
