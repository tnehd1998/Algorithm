// 생각한 풀이 방법
// 1. 항상 ICN으로 시작하기 때문에 ICN을 기준으로 tickets을 정렬함
// 2. BFS를 활용하여 모든 경우의 수를 탐색함
// 3. 현재 저장된 값이 tickets의 길이와 같을 때는
// 모든 여행경로를 돌고 마지막 공항에 도착한 경우이기 때문에
// 해당 경우가 존재하면 값을 반환함

function solution(tickets) {
  let answer = [];
  let correctCount = tickets.length;

  let withICN = [];
  let withoutICN = [];

  for (let i = 0; i < tickets.length; i++) {
    if (tickets[i][0] === "ICN") withICN.push(tickets[i]);
    else withoutICN.push(tickets[i]);
  }

  // 항상 ICN으로 시작하기 때문에 ICN을 기준으로 tickets을 정렬함
  tickets = [...withICN.sort(), ...withoutICN.sort()];

  function bfs(i) {
    let visited = [];
    let queue = [];

    queue.push([tickets[i][1], [tickets[i][0]]]);
    visited.push([i]);

    while (queue.length) {
      let current = queue.shift();
      let checkVisited = visited.shift();

      // 현재 저장된 값이 tickets의 길이와 같을 때
      // 모든 여행경로를 돌고 마지막 공항에 도착한 경우
      if (current[1].length === correctCount) {
        // 해당 경우가 존재하면 값을 반환함
        return (answer = [...current[1], current[0]]);
      }

      tickets.forEach((ticket, index) => {
        if (checkVisited.includes(index)) return;
        if (ticket[0] === current[0]) {
          queue.push([ticket[1], [...current[1], ticket[0]]]);
          visited.push([...checkVisited, index]);
        }
      });
    }
  }

  // BFS를 활용하여 모든 경우의 수를 탐색함
  for (let i = 0; i < tickets.length; i++) {
    if (answer.length) {
      return answer;
    }
    bfs(i);
  }
}

console.log(
  solution([
    ["ICN", "JFK"],
    ["HND", "IAD"],
    ["JFK", "HND"],
  ])
);

console.log(
  solution([
    ["ICN", "SFO"],
    ["ICN", "ATL"],
    ["SFO", "ATL"],
    ["ATL", "ICN"],
    ["ATL", "SFO"],
  ])
);
