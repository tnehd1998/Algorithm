function solution(n, arr1, arr2) {
  let changedArr1 = [];
  let changedArr2 = [];
  for (let i = 0; i < n; i++) {
    let current = [...arr1[i].toString(2)];
    while (current.length !== n) {
      current.unshift("0");
    }
    changedArr1.push(current);
  }
  for (let i = 0; i < n; i++) {
    let current = [...arr2[i].toString(2)];
    while (current.length !== n) {
      current.unshift("0");
    }
    changedArr2.push(current);
  }
  let sumArr = [];
  for (let i = 0; i < n; i++) {
    let total = "";
    for (let j = 0; j < n; j++) {
      if (changedArr1[i][j] === "1" || changedArr2[i][j] === "1") {
        total += "#";
      } else {
        total += " ";
      }
    }
    sumArr.push(total);
  }

  return sumArr;
}

console.log(solution(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28]));
console.log(solution(6, [46, 33, 33, 22, 31, 50], [27, 56, 19, 14, 14, 10]));
