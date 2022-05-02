// 생각한 풀이 방법
// 1. 차량을 번호, 시각 순으로 정렬을 한다.
// 2. 현재 차량을 저장한 current와 다음 차량이 존재하거나, 번호가 같은지 확인한다.
// 3. 번호가 같은 경우
// 3-1. 입차하는 경우 previousTime에 현재 차량의 시각을 저장한다.
// 3-2. 출차하는 경우 totalCostTime에 현재 시간을 나타내는 totalTime - previousTime을 더한다.
// 4. 번호가 다르거나 다음 차량이 없는 경우
// 4-1. 입차하는 경우 출차한 기록이 없으므로 23:59에서 totalTime을 뺀 값을 totalCostTime에 더한다.
// 4-1. 출차하는 경우 totalCostTime에 현재 시간을 나타내는 totalTime - previousTime을 더한다.
// 5. totalCostTime에 따른 값을 answer에 추가한다.
// 5-1. 기본 시간보다 totalCostTime이 작거나 같을 경우 기본요금을 answer에 push한다.
// 5-2. 기본 시간보다 클 경우 조건에 맞는 값을 answer에 push한다.
// 6. 2~5를 입/출차 기록이 존재할 때까지 반복한다.

// function solution(fees, records) {
//   let answer = [];
//   let recordsArr = [];
//   for (let i = 0; i < records.length; i++) {
//     let current = records[i].split(" ");
//     recordsArr.push(current);
//   }

//   recordsArr.sort((a, b) => {
//     // 차량을 번호, 시각 순으로 정렬
//     if (a[1] === b[1]) {
//       return a[0] - b[0];
//     }
//     return a[1] - b[1];
//   });

//   let previousTime = 0;
//   let totalCostTime = 0;

//   while (recordsArr.length) {
//     // 입/출차 기록이 존재할 때까지 반복
//     let current = recordsArr.shift();
//     let time = current[0].split(":");
//     let totalTime = Number(time[0]) * 60 + Number(time[1]);
//     if (recordsArr.length && recordsArr[0][1] === current[1]) {
//       // 현재 차량을 저장한 current와 다음 차량이 존재하거나, 번호가 같은지 확인
//       if (current[2] === "IN") {
//         // 입차하는 경우 previousTime에 현재 차량의 시각을 저장
//         previousTime = totalTime;
//       } else {
//         // 출차하는 경우 totalCostTime에 현재 시간을 나타내는 totalTime - previousTime을 더한다
//         let usedTime = totalTime - previousTime;
//         totalCostTime += usedTime;
//       }
//     } else {
//       // 번호가 다르거나 다음 차량이 없는 경우
//       if (current[2] === "IN") {
//         // 입차하는 경우 출차한 기록이 없으므로 23:59에서 totalTime을 뺀 값을 totalCostTime에 더한다
//         let usedTime = 1439 - totalTime;
//         totalCostTime += usedTime;
//       } else {
//         // 출차하는 경우 totalCostTime에 현재 시간을 나타내는 totalTime - previousTime을 더한다
//         let usedTime = totalTime - previousTime;
//         totalCostTime += usedTime;
//       }
//       if (totalCostTime <= fees[0]) {
//         // 기본 시간보다 totalCostTime이 작거나 같을 경우 기본요금을 answer에 push
//         answer.push(fees[1]);
//       } else {
//         // 기본 시간보다 클 경우 조건에 맞는 값을 answer에 push
//         let cost =
//           fees[1] + Math.ceil((totalCostTime - fees[0]) / fees[2]) * fees[3];
//         answer.push(cost);
//       }
//       totalCostTime = 0;
//     }
//   }

//   return answer;
// }

function solution(fees, records) {
  let answer = [];

  records = records.sort((a, b) => {
    return a.split(" ")[1] - b.split(" ")[1];
  });

  let allTimeArr = [];

  let previousCarNum = "";
  let previousTime = 0;
  let totalTime = 0;
  let isIn = false;

  for (let i = 0; i <= records.length; i++) {
    if (i === records.length) {
      if (isIn) {
        let timeDiff = 23 * 60 + 59 - previousTime + totalTime;
        allTimeArr.push(timeDiff);
      } else {
        if (totalTime > 0) {
          allTimeArr.push(totalTime);
        }
      }
    } else {
      let currentCar = records[i].split(" ");
      let currentTime = currentCar[0].split(":");
      let timeToMinutes = Number(currentTime[0]) * 60 + Number(currentTime[1]);
      if (previousCarNum === currentCar[1]) {
        if (isIn) {
          let timeDiff = timeToMinutes - previousTime;
          totalTime += timeDiff;
          isIn = false;
        } else {
          isIn = true;
        }
      } else {
        if (isIn) {
          let timeDiff = 23 * 60 + 59 - previousTime + totalTime;
          allTimeArr.push(timeDiff);
        } else {
          if (previousCarNum !== "") {
            allTimeArr.push(totalTime);
          }
        }
        isIn = true;
        previousCarNum = currentCar[1];
        totalTime = 0;
      }
      previousTime = timeToMinutes;
    }
  }

  for (let i = 0; i < allTimeArr.length; i++) {
    if (allTimeArr[i] <= fees[0]) {
      answer.push(fees[1]);
    } else {
      let elapsedTime = allTimeArr[i] - fees[0];
      let count = Math.ceil(elapsedTime / fees[2]);
      answer.push(fees[1] + fees[3] * count);
    }
  }

  return answer;
}

solution(
  [180, 5000, 10, 600],
  [
    "05:34 5961 IN",
    "06:00 0000 IN",
    "06:34 0000 OUT",
    "07:59 5961 OUT",
    "07:59 0148 IN",
    "18:59 0000 IN",
    "19:09 0148 OUT",
    "22:59 5961 IN",
    "23:00 5961 OUT",
  ]
);
solution(
  [120, 0, 60, 591],
  [
    "16:00 3961 IN",
    "16:00 0202 IN",
    "18:00 3961 OUT",
    "18:00 0202 OUT",
    "23:58 3961 IN",
  ]
);
solution([1, 461, 1, 10], ["00:00 1234 IN"]);
