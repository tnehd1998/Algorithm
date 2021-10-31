function solution(s) {
  let arr = [...s].map((item) => item.charCodeAt(0));
  arr.sort((a, b) => b - a);
  arr = arr.map((item) => String.fromCharCode(item));
  return arr.join("");
}

console.log(solution("Zbcdefg"));
