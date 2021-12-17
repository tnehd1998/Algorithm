// 생각한 풀이 방법
// 1. 처음부터 순서대로 소요되는 날짜를 계산하여 count에 저장함
// 2. 해당 progress의 소요 날짜에 다음 progress도 완료되는지 확인
// 3-1. 완료되면 handlingWork의 수를 증가시킴
// 3-2. 완료되지 않으면 handlingWork를 answer에 push함
// 4. 다음 progress를 1~3 순서대로 다시 진행 및 반복함

function solution(progresses, speeds) {
  let answer = [];
  let count = [];

  // 각 progress마다 소요되는 날짜를 count에 저장함
  for (let i = 0; i < progresses.length; i++) {
    let currentCount = 0;
    let currentValue = progresses[i];
    while (currentValue < 100) {
      currentValue += speeds[i];
      currentCount++;
    }
    count.push(currentCount);
  }

  // 해당 progress의 소요날짜에 다음 progress도 완료되는지 확인
  while (count.length) {
    let handlingWork = 0;
    let current = count.shift();
    handlingWork++;

    // 완료되면 handlingWork의 수를 증가시킴
    while (count[0] <= current) {
      count.shift();
      handlingWork++;
    }
    answer.push(handlingWork); // 완료되지 않으면 handlingWork를 answer에 push함
  }
  return answer;
}
