// 생각한 풀이 방법
// 1. 다리 위에 올라갈 수 있는 최대 트럭의 갯수 크기의 truckOnBridge 배열 생성
// 2. 차례대로 truck_weights에서 트럭을 하나씩 truckOnBridge에 추가 후, totalWeight에 해당 무게를 더함
// 3. 다음 트럭과 totalBridge의 합이 weight보다 작을 경우 해당 트럭도 건너게 함
// 4. 해당 경우마다 timeElapsed를 증가시킴
// 5. 모든 트럭이 지나간, 즉 totalWeight이 0일때까지 2~4를 반복함

function solution(bridge_length, weight, truck_weights) {
  let timeElapsed = 0;

  // 다리 위에 올라갈 수 있는 최대 트럭의 갯수 크기의 truckOnBridge 배열 생성
  let truckOnBridge = new Array(bridge_length).fill(0);

  let totalWeight = 0;
  let currentTruck = truck_weights.shift();

  // 차례대로 truck_weights에서 트럭을 하나씩 truckOnBridge에 추가
  truckOnBridge.unshift(currentTruck);
  truckOnBridge.pop();

  // totalWeight에 해당 무게를 더함
  totalWeight += currentTruck;
  timeElapsed++;

  while (totalWeight) {
    totalWeight -= truckOnBridge.pop();
    currentTruck = truck_weights.shift();

    // 다음 트럭과 totalBridge의 합이 weight보다 작을 경우 해당 트럭도 건너게 함
    if (currentTruck + totalWeight <= weight) {
      truckOnBridge.unshift(currentTruck);
      totalWeight += currentTruck;
    } else {
      truckOnBridge.unshift(0);
      truck_weights.unshift(currentTruck);
    }
    timeElapsed++; // 해당 경우마다 timeElapsed를 증가시킴
  }

  return timeElapsed;
}

console.log(solution(2, 10, [7, 4, 5, 6]));
console.log(solution(100, 100, [10]));
console.log(solution(100, 100, [10, 10, 10, 10, 10, 10, 10, 10, 10, 10]));
console.log(solution(3, 7, [3, 4, 5]));
