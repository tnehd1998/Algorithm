// 생각한 풀이 방법
// 1. 각 직선의 교점들을 계산한다.
// 2. 중복된 교점을 제거한다.
// 3. 교점 중 최대 값과 최소 값을 기준으로 필요한 공간 만큼의 범위를 .로 채워 넣는다.
// 4. 교점인 부분만 *으로 교체한다.

function calculateX(a, b, c, d, e, f) {
  if (a * d - b * c === 0) {
    return false;
  }

  return (b * f - e * d) / (a * d - b * c);
}

function calculateY(a, b, c, d, e, f) {
  if (a * d - b * c === 0) {
    return false;
  }

  return (e * c - a * f) / (a * d - b * c);
}

function solution(line) {
  let arr = [];
  let currentIndex = 0;
  let maxX = Number.MIN_SAFE_INTEGER;
  let minX = Number.MAX_SAFE_INTEGER;
  let maxY = Number.MIN_SAFE_INTEGER;
  let minY = Number.MAX_SAFE_INTEGER;

  while (currentIndex !== line.length) {
    // 각 직선의 교점들을 계산
    for (let i = 0; i < line.length; i++) {
      if (currentIndex !== i) {
        let existingValue = line[currentIndex];
        let currentValue = line[i];
        let currentX = calculateX(
          existingValue[0],
          existingValue[1],
          currentValue[0],
          currentValue[1],
          existingValue[2],
          currentValue[2]
        );
        let currentY = calculateY(
          existingValue[0],
          existingValue[1],
          currentValue[0],
          currentValue[1],
          existingValue[2],
          currentValue[2]
        );
        if (
          currentX !== false &&
          currentY !== false &&
          Number.isInteger(currentX) &&
          Number.isInteger(currentY)
        ) {
          if (currentX === -0) {
            currentX = 0;
          }
          if (currentY === -0) {
            currentY = 0;
          }
          maxX = Math.max(maxX, currentX);
          minX = Math.min(minX, currentX);
          maxY = Math.max(maxY, currentY);
          minY = Math.min(minY, currentY);
          arr.push([currentX, currentY]);
        }
      }
    }
    currentIndex++;
  }

  arr = arr.sort().filter((_, index) => index % 2 === 0); // 중복된 교점을 제거

  for (let i = 0; i < arr.length; i++) {
    arr[i][0] = arr[i][0] - minX;
    arr[i][1] = arr[i][1] - minY;
  }

  let answer = [];

  for (let i = 0; i <= maxY - minY; i++) {
    // 교점 중 최대 값과 최소 값을 기준으로 필요한 공간 만큼의 범위를 .로 채워 넣는다
    let currentStr = [];
    for (let j = 0; j <= maxX - minX; j++) {
      currentStr.push(".");
    }
    answer.push(currentStr);
  }

  for (let i = 0; i < arr.length; i++) {
    // 교점인 부분만 *으로 교체
    let currentPoint = arr[i];
    answer[currentPoint[1]][currentPoint[0]] = "*";
  }

  for (let i = 0; i < answer.length; i++) {
    answer[i] = answer[i].join("");
  }

  return answer.reverse();
}

console.log(
  solution([
    [2, -1, 4],
    [-2, -1, 4],
    [0, -1, 1],
    [5, -8, -12],
    [5, 8, 12],
  ])
);
console.log(
  solution([
    [0, 1, -1],
    [1, 0, -1],
    [1, 0, 1],
  ])
);
