// 생각한 풀이 방법 (1차 시도)
// 1. DFS로 탐색을 해 모든 경우를 구함
// 2. 해당 경우에 맞게 모든 총 소요 시간을 result에 저장함
// 3. result중 최소 값을 jobs수 만큼 나눠 반환함

// => 시간 초과
// => 얻은 힌트) 문제의 의도는 Heap을 활용해 푸는 것

// function solution(jobs) {
//   let visited = Array(jobs.length);
//   let output = [];
//   let result = [];

//   function calculateTime(count) {
//     if (count === jobs.length) {
//       let currentTime = 0;
//       let totalTime = 0;
//       for (let i = 0; i < jobs.length; i++) {
//         let targetJob = output[i] - 1;
//         totalTime += currentTime + jobs[targetJob][1] - jobs[targetJob][0];
//         currentTime += jobs[targetJob][1];
//       }
//       result.push(totalTime);
//       return;
//     }
//     for (let i = 0; i < jobs.length; i++) {
//       if (visited[i]) continue;
//       visited[i] = true;
//       output.push(i + 1);
//       calculateTime(count + 1);
//       output.pop();
//       visited[i] = false;
//     }
//   }

//   calculateTime(0);

//   return Math.min(...result) / jobs.length;
// }

// 찾아낸 규칙성
// -> 현재 시간에 실행가능한 Job중 수행시간이 짧은 순으로 진행을 하면 최소시간이 나온다.

// 생각한 풀이 방법 (2차 시도)
// 1. 작업이 요청되는 시점을 기준으로 jobs를 정렬 한다.
// 2. 현재 시간에 실행 가능한 jobs을 모두 handlingJobs에 옮긴다.
// 3. 각 경우를 handlingJobs의 갯수에 따라 다르게 계산한다.

// 4-1. 현재 시간 이전에 요청을 한 작업이 없을 때
// 4-1-1. sortedArray에 맨 앞에 있는 값을 하나 가져온다.

// 4-2. 현재 시간 이전에 요청을 한 작업이 하나일 때
// 4-2-1. 해당 작업을 다룬다.

// 4-3. 현재 시간 이전에 요청을 한 작업이 두개 이상일 때
// 4-3-1. handlingJobs를 작업의 소요시간을 기준으로 정렬 한다.
// 4-3-2. 가장 짧은 소요시간을 가진 작업을 제외하고 다시 sortedArray에 넣는다.

// 5. 해당 작업의 요청부터 종료까지의 소요시간을 계산해 result에 더한다.
// 6. 2~5 작업을 sortedArray에 값이 비워지기 전까지 반복한다.

function solution(jobs) {
  let result = 0;
  let currentTime = 0;
  let sortedArray = [...jobs];

  // 작업이 요청되는 시점을 기준으로 jobs를 정렬 한다.
  sortedArray = sortedArray.sort((a, b) => {
    if (a[0] === b[0]) return a[1] - b[1];
    return a[0] - b[0];
  });

  while (sortedArray.length) {
    let handlingJobs = [];

    // 현재 시간에 실행 가능한 jobs을 모두 handlingJobs에 옮긴다.
    while (sortedArray.length) {
      let currentJob = sortedArray.shift();
      if (currentJob[0] > currentTime) {
        sortedArray.unshift(currentJob);
        break;
      }
      handlingJobs.push(currentJob);
    }

    if (handlingJobs.length <= 1) {
      let currentJob;
      if (handlingJobs.length === 0) {
        // 현재 시간 이전에 요청을 한 작업이 없을 때
        currentJob = sortedArray.shift(); //  sortedArray에 맨 앞에 있는 값을 하나 가져온다
      } else {
        // 현재 시간 이전에 요청을 한 작업이 하나일 때
        currentJob = handlingJobs[0]; // 해당 작업을 다룬다
      }
      if (currentJob[0] > currentTime) {
        result += currentJob[1];
        currentTime += currentJob[1] + (currentJob[0] - currentTime);
      } else {
        result += currentJob[1] + currentTime - currentJob[0];
        currentTime += currentJob[1];
      }
    }

    if (handlingJobs.length > 1) {
      // 현재 시간 이전에 요청을 한 작업이 두개 이상일 때

      // handlingJobs를 작업의 소요시간을 기준으로 정렬 한다.
      handlingJobs = handlingJobs.sort((a, b) => a[1] - b[1]);

      // 가장 짧은 소요시간을 가진 작업을 제외하고 다시 sortedArray에 넣는다.
      for (let i = 1; i < handlingJobs.length; i++) {
        sortedArray.unshift(handlingJobs[i]);
      }

      let currentJob = handlingJobs[0];
      if (currentJob[0] < currentTime) {
        result += currentJob[1] + currentTime - currentJob[0];
      } else {
        result += currentJob[1];
      }
      currentTime += currentJob[1];
    }
  }

  return Math.floor(result / jobs.length);
}

console.log(
  solution([
    [0, 3],
    [2, 6],
    [1, 9],
  ])
);
console.log(
  solution([
    [24, 10],
    [28, 39],
    [43, 20],
    [37, 5],
    [47, 22],
    [20, 47],
    [15, 34],
    [15, 2],
    [35, 43],
    [26, 1],
  ])
);
console.log(
  solution([
    [0, 5],
    [2, 10],
    [10000, 2],
  ])
);
