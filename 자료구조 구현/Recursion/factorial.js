// My Answer

function myFindFactorialRecursive(number) {
  if (number === 1) {
    return 1;
  }
  return number * myFindFactorialRecursive(number - 1);
}

function myFindFactorialIterative(number) {
  let answer = 1;
  for (let i = 1; i <= number; i++) {
    answer *= i;
  }
  return answer;
}

// Solution Code

function findFactorialRecursive(number) {
  if (number === 1) {
    return 1;
  }
  return number * findFactorialRecursive(number - 1);
}

function findFactorialIterative(number) {
  let answer = 1;
  if (number === 2) {
    answer = 2;
  }
  for (let i = 2; i <= number; i++) {
    answer = answer * i;
  }
  return answer;
}

console.log(myFindFactorialRecursive(5));
console.log(myFindFactorialIterative(5));

console.log(findFactorialRecursive(5));
console.log(findFactorialIterative(5));
