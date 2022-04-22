// 생각한 풀이 방법
// 1. 모든 시간을 초단위로 변환한다
// 2. 누적합을 활용하여 최대의 구간을 찾는다.
// 3. 재생 시간을 기준으로 모든 구간을 탐색한 후, 해당 누적합이 더 클경우 해당 값을 저장한다.
// 4. 가장 큰 구간합의 시작 시간을 다시 시간단위로 변환하여 반환한다.

const changeTimeToSeconds = (time) => {
  let totalTime = 0;
  let times = time.split(":");
  totalTime += Number(times[0]) * 3600;
  totalTime += Number(times[1]) * 60;
  totalTime += Number(times[2]);

  return totalTime;
};

const changeSecondsToTime = (time) => {
  let totalTime = time;
  let hours = Math.floor(totalTime / 3600);
  let minutes = Math.floor((totalTime - hours * 3600) / 60);
  let seconds = (totalTime - hours * 3600) % 60;

  hours = hours > 9 ? hours : "0" + hours;
  minutes = minutes > 9 ? minutes : "0" + minutes;
  seconds = seconds > 9 ? seconds : "0" + seconds;

  return `${hours}:${minutes}:${seconds}`;
};

function solution(play_time, adv_time, logs) {
  const playTime = changeTimeToSeconds(play_time); // 초단위로 변환
  const advTime = changeTimeToSeconds(adv_time); // 초단위로 변환
  const times = Array(playTime).fill(0);

  logs.forEach((log) => {
    const [start, end] = log.split("-");
    const startSeconds = changeTimeToSeconds(start); // 초단위로 변환
    const endSeconds = changeTimeToSeconds(end); // 초단위로 변환
    times[startSeconds]++;
    times[endSeconds]--;
  });

  for (let i = 1; i <= playTime; i++) {
    times[i] += times[i - 1];
  }

  for (let i = 1; i <= playTime; i++) {
    times[i] += times[i - 1];
  }

  let total = times[advTime - 1];
  let index = 0;

  for (let i = advTime - 1; i < playTime; i++) {
    // 누적합을 활용하여 최대의 구간을 찾는다
    if (total < times[i] - times[i - advTime]) {
      // 해당 누적합이 더 클경우
      total = times[i] - times[i - advTime]; // 해당 값을 저장
      index = i - advTime + 1; // 해당 값을 저장
    }
  }

  return changeSecondsToTime(index); // 시간단위로 변환
}

solution("02:03:55", "00:14:15", [
  "01:20:15-01:45:14",
  "00:40:31-01:00:00",
  "00:25:50-00:48:29",
  "01:30:59-01:53:29",
  "01:37:44-02:02:30",
]);
solution("99:59:59", "25:00:00", [
  "69:59:59-89:59:59",
  "01:00:00-21:00:00",
  "79:59:59-99:59:59",
  "11:00:00-31:00:00",
]);
solution("50:00:00", "50:00:00", [
  "15:36:51-38:21:49",
  "10:14:18-15:36:51",
  "38:21:49-42:51:45",
]);
