const [addNums, addManyNums] = require("./phase-1");

function addNums10Timing(increment) {
  // Copy your `addNums10` code here

  // Then, add timing code

  // Your code here
  function addNums10(increment) {
    let sums = [];

    // console.time(`Timer 1`);

    for (let n = 1; n <= 10; n++) {
      let startTime = Date.now();
      let num = addNums(n * increment);
      let endTime = Date.now();
      console.log(`Time: ${endTime - startTime} ms`);
      // console.timeLog(`Timer 1`);
      sums.push(num);
    }

    // console.timeEnd(`Timer 1`);

    return sums;
  }

  addNums10(increment);
}


function addManyNums10Timing(increment) {
// Copy your `addManyNums10` code here

// Then, add timing code

  // Your code here
  function addManyNums10(increment) {
    // Fill this in
    let sums = [];

    // console.time(`Timer 2`);

    for (let n = 1; n <= 10; n++) {
      let startTime = Date.now();
      let num = addManyNums(n * increment);
      let endTime = Date.now();
      console.log(`Time: ${endTime - startTime} ms`);
      // console.timeLog(`Timer 2`);
      sums.push(num);
    }

    // console.timeEnd(`Timer 2`);

    return sums;
  }

  addManyNums10(increment);
}


n = 1000000
console.log(`addNums(${n}): `);
addNums10Timing(1000000);

console.log("\n***********\n");

n = 1000
console.log(`addManyNums(${n}): `);
addManyNums10Timing(5000);

function addNums100Timing(increment) {
  function addNums100(increment) {
    let sums = [];

    for (n = 1; n <= 100; n++) {
      let startTime = Date.now();
      let num = addNums(n * increment);
      let endTime = Date.now();
      console.log(`${endTime - startTime} ms`);

      sums.push(num);
    }

    return sums;
  }

  addNums100(increment);
}

function addManyNums100Timing(increment) {
  function addManyNums100(increment) {
    let sums = [];

    for (let n = 1; n <= 100; n++) {
      let startTime = Date.now();
      let num = addManyNums(n * increment);
      let endTime = Date.now();
      console.log(`${endTime - startTime} ms`);
      sums.push(num);
    }

    return sums;
  }

  addManyNums100(increment);
}

n = 10000000;
console.log(`addNums100(${n}):`);
addNums100Timing(n);

console.log("\n***************\n");

n = 1500;
console.log(`addManyNums100(${n}):`);
addManyNums100Timing(n);
