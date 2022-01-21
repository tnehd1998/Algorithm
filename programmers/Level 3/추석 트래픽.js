// 알고 있어야 하는 문제의 접근 방법
// 가장 많은 처리를 하는 시간대를 찾기 때문에, 종료 시간을 1초 더 늘려 최대값을 구한다.

// 생각한 풀이 방법
// 1. 시작시간과 종료시간을 계산해 start와 end로 allTimes배열에 push한다.
// 2. 모든 시간을 정렬하는데 start와 end가 같은 경우에는 start를 앞에 둔다.
// 3. allTimes에서 start가 나오면 count를 증가시키고, end가 나오면 감소시킨다.
// 4. 매 시간마다 answer과 비교해 count의 최대값을 구한다.

function solution(lines) {
  let answer = Number.MIN_SAFE_INTEGER;
  let allTimes = [];
  let count = 0;

  for (let i = 0; i < lines.length; i++) {
    let current = lines[i].split(" ");
    let time = current[1].split(":");
    let timeCost =
      Number(current[2].substring(0, current[2].length - 1)) * 1000;
    let timeToSecond =
      (Number(time[0]) * 3600 + Number(time[1]) * 60 + Number(time[2])) * 1000;
    let startTime = timeToSecond - timeCost + 1;
    let endTime = timeToSecond + 999;

    // 시작시간과 종료시간을 계산해 start와 end로 allTimes 배열에 push
    allTimes.push(["start", startTime]);
    allTimes.push(["end", endTime]);
  }

  // 모든 시간을 정렬하는데 start와 end가 같은 경우에는 start를 앞에 둔다
  allTimes.sort((a, b) => {
    if (a[1] === b[1]) return -1;
    return a[1] - b[1];
  });

  for (let i = 0; i < allTimes.length; i++) {
    if (allTimes[i][0] === "start") {
      count++; // start가 나오면 count를 증가
    } else {
      count--; // end가 나오면 감소
    }
    answer = Math.max(answer, count); // 매 시간마다 answer과 비교해 count의 최대값을 구한다
  }

  return answer;
}

console.log(
  solution(["2016-09-15 01:00:04.001 2.0s", "2016-09-15 01:00:07.000 2s"])
);
console.log(
  solution(["2016-09-15 01:00:04.002 2.0s", "2016-09-15 01:00:07.000 2s"])
);
console.log(
  solution([
    "2016-09-15 20:59:57.421 0.351s",
    "2016-09-15 20:59:58.233 1.181s",
    "2016-09-15 20:59:58.299 0.8s",
    "2016-09-15 20:59:58.688 1.041s",
    "2016-09-15 20:59:59.591 1.412s",
    "2016-09-15 21:00:00.464 1.466s",
    "2016-09-15 21:00:00.741 1.581s",
    "2016-09-15 21:00:00.748 2.31s",
    "2016-09-15 21:00:00.966 0.381s",
    "2016-09-15 21:00:02.066 2.62s",
  ])
);
