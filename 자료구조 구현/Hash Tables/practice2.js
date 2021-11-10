// Google Question
// Given an array = [2,5,1,2,3,5,1,2,4]
// It should return 2

// Given an array = [2,1,1,2,3,5,1,2,4]
// It should return 1

// Given an array = [2,3,4,5]
// It should return undefined

// My Answer

function myAnswer(array) {
  const answer = Array(array.length).fill(false);
  for (let i = 0; i < array.length; i++) {
    const current = array[i];
    if (answer[current]) {
      return current;
    }
    answer[current] = true;
  }
  return undefined;
}

// Solution Code

function firstRecurringCharacter(input) {
  let map = {};
  for (let i = 0; i < input.length; i++) {
    if (map[input[i]]) {
      return input[i];
    }
    map[input[i]] = true;
  }

  return undefined;
}

console.log(myAnswer([2, 5, 1, 2, 3, 5, 1, 2, 4]));
console.log(myAnswer([2, 1, 1, 2, 3, 5, 1, 2, 4]));
console.log(myAnswer([2, 3, 4, 5]));

console.log(firstRecurringCharacter([2, 5, 1, 2, 3, 5, 1, 2, 4]));
console.log(firstRecurringCharacter([2, 1, 1, 2, 3, 5, 1, 2, 4]));
console.log(firstRecurringCharacter([2, 3, 4, 5]));
