const [addNums, addManyNums] = require("./phase-1");

// Runs `addNums` in 10 increasing increments
function addNums10(increment) {
  // Fill this in
  let sums = [];

  for (let n = 1; n <= 10; n++) {
    let num = addNums(n * increment);

    sums.push(num);
  }

  return sums;
}

// Runs `addManyNums` in 10 increasing increments
function addManyNums10(increment) {
  // Fill this in
  let sums = [];

  for (let n = 1; n <= 10; n++) {
    let num = addManyNums(n * increment);
    sums.push(num);
  }

  return sums;
}

module.exports = [addNums10, addManyNums10];
