function solution(clothes) {
  let answer = 1;
  let items = {};
  for (let i = 0; i < clothes.length; i++) {
    let current = clothes[i];
    if (items[current[1]]) {
      items[current[1]]++;
    } else {
      items[current[1]] = 1;
    }
  }

  for (const item in items) {
    answer *= items[item] + 1;
  }

  return answer - 1;
}

console.log(
  solution([
    ["yellowhat", "headgear"],
    ["bluesunglasses", "eyewear"],
    ["green_turban", "headgear"],
  ])
);
console.log(
  solution([
    ["crowmask", "face"],
    ["bluesunglasses", "face"],
    ["smoky_makeup", "face"],
  ])
);
