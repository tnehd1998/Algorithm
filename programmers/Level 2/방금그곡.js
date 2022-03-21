// 생각한 풀이 방법
// 1. C#, D# ... 은 c, d로 전환한다.
// 2. 구현 사항에 따라 꼼꼼하게 그대로 구현한다.

function filterSound(sound) {
  // C#, D# ... 은 c, d로 전환
  return sound
    .replace(/C#/gi, "c")
    .replace(/D#/gi, "d")
    .replace(/F#/gi, "f")
    .replace(/G#/gi, "g")
    .replace(/A#/gi, "a");
}

function solution(m, musicinfos) {
  let answer = "";
  let playTimeAnswer = Number.MIN_SAFE_INTEGER;
  let sound = filterSound(m);

  for (let i = 0; i < musicinfos.length; i++) {
    let current = musicinfos[i].split(",");
    let startTime = current[0].split(":");
    let endTime = current[1].split(":");

    startTime = Number(startTime[0]) * 60 + Number(startTime[1]);
    endTime = Number(endTime[0]) * 60 + Number(endTime[1]);

    let playCount = endTime - startTime + 1;
    let currentMusic = filterSound(current[3]);

    let totalMusic = "";
    let currentCount = 0;
    while (currentCount < playCount) {
      for (let k = 0; k < currentMusic.length; k++) {
        if (currentCount > playCount) {
          break;
        }
        totalMusic += currentMusic[k];
        currentCount++;
      }
    }

    if (totalMusic.includes(sound) && playCount > playTimeAnswer) {
      answer = current[2];
      playTimeAnswer = playCount;
    }
  }

  return answer.length > 0 ? answer : "(None)";
}

console.log(
  solution("ABCDEFG", ["12:00,12:14,HELLO,CDEFGAB", "13:00,13:05,WORLD,ABCDEF"])
);
console.log(
  solution("ABC", ["12:00,12:14,HELLO,C#DEFGAB", "13:00,13:05,WORLD,ABCDEF"])
);
