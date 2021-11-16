// My Answer

function myFibonacciIterative(n) {
  let result = [];
  result[0] = 0;
  result[1] = 1;
  for (let i = 1; i < n; i++) {
    result[i + 1] = result[i] + result[i - 1];
  }
  return result[n];
}

function myFibonacciRecursive(n) {
  if (n === 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  }
  return myFibonacciRecursive(n - 2) + myFibonacciRecursive(n - 1);
}

// Solution Code

function fibonacciIterative(n) {
  // O(n)
  let arr = [0, 1];
  for (let i = 2; i <= n; i++) {
    arr.push(arr[i - 1] + arr[i - 2]);
  }
  return arr[n];
}

function fibonacciRecursive(n) {
  // O(2^n)
  if (n < 2) {
    return n;
  }
  return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}

console.log(myFibonacciIterative(10));
console.log(myFibonacciRecursive(10));

console.log(fibonacciIterative(10));
console.log(fibonacciRecursive(10));
