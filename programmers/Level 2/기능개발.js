function solution(progresses, speeds) {
  let answer = [];
  let count = [];
  for (let i = 0; i < progresses.length; i++) {
    let currentCount = 0;
    let currentValue = progresses[i];
    while (currentValue < 100) {
      currentValue += speeds[i];
      currentCount++;
    }
    count.push(currentCount);
  }
  while (count.length) {
    let handlingWork = 0;
    let current = count.shift();
    handlingWork++;
    while (count[0] <= current) {
      count.shift();
      handlingWork++;
    }
    answer.push(handlingWork);
  }
  return answer;
}
