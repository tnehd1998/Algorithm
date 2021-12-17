// 생각한 풀이 방법
// 1. 부위에 맞게 존재하는 아이템 갯수를 찾는다
// 2. 해당 부위에 맞는 (갯수 + 1)를 모두 곱한 값에서 -1을 한다.

function solution(clothes) {
  let answer = 1;
  let items = {};

  // 존재하는 아이템의 갯수를 items에 추가함
  for (let i = 0; i < clothes.length; i++) {
    let current = clothes[i];
    if (items[current[1]]) {
      items[current[1]]++;
    } else {
      items[current[1]] = 1;
    }
  }

  // 모든 부위의 (갯수 + 1)를 곱한 후 -1을 하면 모든 경우가 계산된다.
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
