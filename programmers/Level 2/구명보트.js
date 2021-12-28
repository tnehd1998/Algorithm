// 생각한 풀이 방법
// 1. people을 오름차순으로 정렬함
// 2. 맨 처음 start와 마지막을 end를 비교해 두 값의 합이 limit보다 큰지 확인함
// 2-1. limit보다 작다면 보트를 같이 태움
// 2-2. limit을 넘어간다면 무거운 쪽을 혼자 태움
// 3. start와 end가 만나는, 즉 마지막 사람을 태울때까지 과정2를 반복함

function solution(people, limit) {
  let answer = 0;
  people.sort((a, b) => a - b); // people을 오름차순으로 정렬함

  let start = 0;
  let end = people.length - 1;

  while (start <= end) {
    // start와 end가 만나는, 즉 마지막 사람을 태울때까지 반복함
    if (people[start] + people[end] <= limit) {
      // 맨 처음 start와 마지막을 end를 비교해 두 값의 합이 limit보다 큰지 확인함
      start++; // limit보다 작다면 보트를 같이 태움
    }
    // limit을 넘어간다면 무거운 쪽을 혼자 태움
    end--;
    answer++;
  }

  return answer;
}

console.log(solution([70, 50, 80, 50], 100));
console.log(solution([70, 80, 50], 100));
console.log(solution([40, 50, 150, 160], 200));
console.log(solution([100, 500, 500, 900, 950], 1000));
