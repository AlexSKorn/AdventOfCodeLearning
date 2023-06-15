const { read, getItemPriority, findCommonItemGroup } = require("./helpers");

const findSumOfgroups = (elvesItems) => {
  let sum = 0;
  let group = [];
  elvesItems.forEach((elfItems) => {
    group.push(new Set(elfItems));
    if (group.length === 3) {
      sum += getItemPriority(findCommonItemGroup(group));
      group = [];
    }
  });
  return sum;
};

//2668 IS THE ANSWER
console.log("sumOfGroups", findSumOfgroups(read));
