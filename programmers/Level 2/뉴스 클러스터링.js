function solution(str1, str2) {
  str1 = str1.toUpperCase();
  str2 = str2.toUpperCase();

  let arr1 = [];
  let arr2 = [];

  let intersect = 0;
  let union = 0;

  for (let i = 0; i < str1.length - 1; i++) {
    let checkValid = /[^A-Z]/g;
    let current = str1[i] + str1[i + 1];
    if (!current.match(checkValid)) {
      arr1.push(current);
    }
  }

  for (let i = 0; i < str2.length - 1; i++) {
    let checkValid = /[^A-Z]/g;
    let current = str2[i] + str2[i + 1];
    if (!current.match(checkValid)) {
      arr2.push(current);
    }
  }

  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        arr1.splice(i, 1);
        arr2.splice(j, 1);
        intersect++;
        i--;
        continue;
      }
    }
  }

  union = arr1.length + arr2.length + intersect;

  return intersect === 0 && union === 0
    ? 65536
    : Math.floor((intersect / union) * 65536);
}

console.log(solution("FRANCE", "french"));
console.log(solution("handshake", "shake hands"));
console.log(solution("aa1+aa2", "AAAA12"));
console.log(solution("E=M*C^2", "e=m*c^2"));
console.log(solution("aaabbbb", "aaaabbb"));
console.log(solution("aaaa+bbb", "aaa+bbbb"));
