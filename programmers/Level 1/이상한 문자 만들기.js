function solution(s) {
  let arr = s.split(" ");
  for (let i = 0; i < arr.length; i++) {
    let current = arr[i].split("");
    for (let j = 0; j < current.length; j++) {
      if (j % 2 === 0) {
        current[j] = current[j].toUpperCase();
      } else {
        current[j] = current[j].toLowerCase();
      }
    }
    arr[i] = current.join("");
  }

  return arr.join(" ");
}

console.log(solution("try hello world"));
