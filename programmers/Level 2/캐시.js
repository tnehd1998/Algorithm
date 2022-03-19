// 생각한 풀이 방법
// 1. 현재 도시가 cityArr에 존재하는지 확인한다.
// 2-1. 도시가 존재하지 않는 경우 도시를 cityArr에 push한다.
// 2-2. cityArr의 길이가 cacheSize보다 크면 가장 앞쪽의 city를 제거한 후 answer을 5 증가시킨다.
// 3-1. 도시가 존재하면 해당 도시를 배열의 맨 뒤로 옮긴 후 answer을 1 증가시킨다.

function solution(cacheSize, cities) {
  let answer = 0;
  let cityArr = [];

  for (let i = 0; i < cities.length; i++) {
    let current = cities[i].toLowerCase();
    let findCity = cityArr.find((city) => city === current); // 현재 도시가 cityArr에 존재하는지 확인
    if (!findCity) {
      // 도시가 존재하지 않는 경우
      cityArr.push(current); // cityArr에 push
      if (cityArr.length > cacheSize) {
        // cityArr의 길이가 cacheSize보다 크면
        cityArr.shift(); // 가장 앞쪽의 city를 제거
      }
      answer += 5; // answer을 5 증가
    } else {
      // 도시가 존재
      cityArr = cityArr.filter((city) => city !== current);
      cityArr.push(current); // 해당 도시를 배열의 맨 뒤로 옮긴다
      answer++; // answer을 1 증가
    }
  }

  return answer;
}

solution(3, [
  "Jeju",
  "Pangyo",
  "Seoul",
  "NewYork",
  "LA",
  "Jeju",
  "Pangyo",
  "Seoul",
  "NewYork",
  "LA",
]);
solution(3, [
  "Jeju",
  "Pangyo",
  "Seoul",
  "Jeju",
  "Pangyo",
  "Seoul",
  "Jeju",
  "Pangyo",
  "Seoul",
]);
