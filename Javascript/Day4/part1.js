// What we are trying to determine here is when the pair fully contains the other.
// For example if one elf is 2-4 and the other elf is 2-6 the 2-6 elf fully contains the other elf
//

const { read } = require("./helpers");

const fullyContainsTheOther = () => {
  let sum = 0;
  read.forEach((elfSet) => {
    let elvesRange = elfSet.split(",");
    let elf1Range = elvesRange[0].split("-").map(Number);
    let elf2Range = elvesRange[1].split("-").map(Number);
    // console.log("elf1Range: ", elf1Range);
    // console.log("elf2Range: ", elf2Range);
    //check if the other one fully contains
    if (elf1Range[0] <= elf2Range[0] && elf1Range[1] >= elf2Range[1]) {
      sum++;
    } else if (elf1Range[0] >= elf2Range[0] && elf1Range[1] <= elf2Range[1]) {
      sum++;
    }
  });
  return sum;
};

//answer is 526
console.log("sum is: ", fullyContainsTheOther());
