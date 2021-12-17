// 생각한 풀이 방법
// 1. 먼저 각 노래 장르에 맞게 총 재생 횟수를 더해 객체에 저장한다.
// 2. 가장 많이 실행된 장르의 노래를 찾는다.
// 3. 해당 장르 중 많이 재생된 index를 answer에 추가한다.
// 4. 2-3을 노래의 장르만큼 반복한다.

function solution(genres, plays) {
  let answer = [];
  let totalPlay = {};

  // 재생된 노래를 모두 더해 totalPlay에 저장함
  for (let i = 0; i < genres.length; i++) {
    if (totalPlay[genres[i]]) {
      totalPlay[genres[i]] += plays[i];
    } else {
      totalPlay[genres[i]] = plays[i];
    }
  }

  // 모든 노래의 장르만큼 반복문을 실행함
  for (let i = 0; i < Object.keys(totalPlay).length; i++) {
    // 가장 많이 재생된 노래의 이름을 찾음
    let mostPlayedItem = "";
    let mostPlayedCount = Number.MIN_SAFE_INTEGER;
    for (let item in totalPlay) {
      if (totalPlay[item] > mostPlayedCount) {
        mostPlayedItem = item;
        mostPlayedCount = totalPlay[item];
      }
    }
    totalPlay[mostPlayedItem] = 0;

    // 찾은 노래 중 가장 많이 재생된 두개의 index를 찾음
    for (let i = 0; i < 2; i++) {
      let maxPlayed = 0;
      let maxPlayedIndex = -1;
      let changedMaxPlayed = false;
      for (let j = 0; j < genres.length; j++) {
        if (genres[j] === mostPlayedItem) {
          if (maxPlayed < plays[j]) {
            maxPlayed = plays[j];
            maxPlayedIndex = j;
            changedMaxPlayed = true;
          }
        }
      }

      // 노래를 찾은 경우만 answer에 추가함, 해당 노래가 한개인 경우를 방지함
      if (changedMaxPlayed) {
        answer.push(maxPlayedIndex);
        plays[maxPlayedIndex] = -1;
      }
    }
  }
  return answer;
}

console.log(
  solution(
    ["classic", "pop", "classic", "classic", "pop"],
    [500, 600, 150, 800, 2500]
  )
);

console.log(
  solution(
    ["a", "b", "c", "d", "a", "d", "d", "d", "a", "a", "c", "c"],
    [100, 300, 400, 150, 100, 300, 200, 600, 700, 110, 900, 9000]
  )
);
