// Create a function that reverses a string
// "Hello Everyone" should be:
// "enoyrevE olleH"

// My Answer

function myReverse(str) {
  return str.split("").reverse().join("");
}

// Solution Code

function reverse(str) {
  //Check input
  if (!str || str.length < 2 || typeof str !== "string") {
    return "Check the input";
  }

  const backwards = [];
  const totalItems = str.length - 1;
  for (let i = totalItems; i >= 0; i--) {
    backwards.push(str[i]);
  }

  return backwards.join("");
}

function reverse2(str) {
  return str.split("").reverse().join("");
}

const reverse3 = (str) => [...str].reverse().join("");

console.log(myReverse("Hello Everyone"));
console.log(reverse("Hello Everyone"));
console.log(reverse2("Hello Everyone"));
console.log(reverse3("Hello Everyone"));
