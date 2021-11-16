let counter = 0;

function inception() {
  console.log(counter);
  if (counter > 3) {
    return "Done!";
  }
  counter++;
  return inception();
}

console.log(inception());

// 1. Identify the base case
// 2. Identify the recursive case
// 3. Get closer and closer and return
// when needed. Usually you have 2 returns
