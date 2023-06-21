const { read } = require("./helpers");

//instead of knowing if the pairs contain eachother the elves want to know if the pairs overlap at all.

const pairsThatOverlapAtAll = () => {
  let sum = 0;
  read.forEach((elfSet) => {
    let elvesRange = elfSet.split(",");
    let elf1Range = elvesRange[0].split("-").map(Number);
    let elf2Range = elvesRange[1].split("-").map(Number);
    let elf1RangeMin = Math.min(...elf1Range);
    let elf2RangeMin = Math.min(...elf2Range);
    let elf1RangeMax = Math.max(...elf1Range);
    let elf2RangeMax = Math.max(...elf2Range);
    //scenario where the min is inbetween
    if (elf1RangeMin >= elf2RangeMin && elf1RangeMin <= elf2RangeMax) {
      sum++;
    }
    //scenario where the max is inbetween
    else if (elf1RangeMax >= elf2RangeMin && elf1RangeMax <= elf2RangeMax) {
      sum++;
    }
    //complete overlap scenario one
    else if (elf1Range[0] <= elf2Range[0] && elf1Range[1] >= elf2Range[1]) {
      sum++;
    }
    //complete overlap scenario two
    else if (elf1Range[0] >= elf2Range[0] && elf1Range[1] <= elf2Range[1]) {
      sum++;
    }
    //scenario where its a complete overlap
  });
  return sum;
};

console.log("total overlaps is:", pairsThatOverlapAtAll());
