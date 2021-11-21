const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
const numbers2 = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

// My Answer

function myMergeSort(array) {
  if (array.length === 1) {
    return array;
  }

  let left = array.slice(0, Math.floor(array.length / 2));
  let right = array.slice(Math.floor(array.length / 2), array.length);

  return myMerge(myMergeSort(left), myMergeSort(right));
}

function myMerge(left, right) {
  const array = [...left, ...right].sort((a, b) => a - b);
  return array;
}

// Solution Code

function mergeSort(array) {
  if (array.length === 1) {
    return array;
  }
  // Split Array in into right and left
  const length = array.length;
  const middle = Math.floor(length / 2);
  const left = array.slice(0, middle);
  const right = array.slice(middle);
  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  const result = [];
  let leftIndex = 0;
  let rightIndex = 0;
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }

  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

const answer = myMergeSort(numbers);
console.log(answer);

const answer2 = mergeSort(numbers2);
console.log(answer2);
