const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
const numbers2 = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function mySelectionSort(array) {
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    let min = count;
    for (let j = count; j < array.length; j++) {
      if (array[min] > array[j]) {
        min = j;
      }
    }
    const temp = array[count];
    array[count] = array[min];
    array[min] = temp;
    count++;
  }
}

function selectionSort(array) {
  const length = array.length;
  for (let i = 0; i < length; i++) {
    let min = i;
    let temp = array[i];
    for (let j = i + 1; j < length; j++) {
      if (array[j] < array[min]) {
        min = j;
      }
    }
    array[i] = array[min];
    array[min] = temp;
  }
}

mySelectionSort(numbers);
console.log(numbers);

selectionSort(numbers2);
console.log(numbers2);
