// 생각한 방법 (1차 시도 -> 효율성 실패)
// 1. 현재 index위치를 기반으로 번호가 더 작은건 front, 큰건 back에 값을 저장한다
// 2. 명령에 따라 값을 이동시킨다.
// 3. 삭제된 인덱스는 임시로 deleteArr에 저장한다.
// 4. 다시 복구할때는 deleteArr를 pop시켜 해당 값을 다시 넣는다.

// function solution(n, k, cmd) {
//   let answer = Array(n).fill("O");
//   let deletedArr = [];
//   let currentIndex = k;
//   let front = Array.from({ length: k }, (_, index) => index);
//   let back = Array.from({ length: n - k - 1 }, (_, index) => index + k + 1);

//   function handleInput(input) {
//     let current = input.split(" ");
//     switch (current[0]) {
//       case "D":
//         for (let i = 0; i < Number(current[1]); i++) {
//           front.push(currentIndex);
//           currentIndex = back.shift();
//         }
//         break;
//       case "U":
//         for (let i = 0; i < Number(current[1]); i++) {
//           back.unshift(currentIndex);
//           currentIndex = front.pop();
//         }
//         break;
//       case "C":
//         deletedArr.push(currentIndex);
//         if (back.length === 0) {
//           currentIndex = front.pop();
//         } else {
//           currentIndex = back.shift();
//         }
//         break;
//       case "Z":
//         let goBack = deletedArr.pop();
//         if (goBack < currentIndex) {
//           front.push(goBack);
//           front.sort((a, b) => a - b);
//         } else {
//           back.push(goBack);
//           back.sort((a, b) => a - b);
//         }
//         break;
//     }
//   }

//   for (let i = 0; i < cmd.length; i++) {
//     handleInput(cmd[i]);
//   }

//   for (let i = 0; i < deletedArr.length; i++) {
//     answer[deletedArr[i]] = "X";
//   }

//   return answer.join("");
// }

// 생각한 방법 (2차시도 -> 성공)
// 1. 양방향 링크드리스크를 k만큼 생성 후, n지점을 currentNode로 설정한다.
// 2. 명령에 맞는 작업을 진행한다.

// const Node = function (index, prevNode) {
//   this.index = index;
//   this.prev = prevNode;
//   this.next;
// };

// function solution(n, k, cmd) {
//   let answer = Array(n).fill("O");
//   let root = new Node(0);
//   let currentNode = root;
//   let prevNode = root;

//   for (let i = 1; i < n; i++) {
//     const newNode = new Node(i, prevNode);
//     prevNode.next = newNode;
//     prevNode = newNode;

//     if (i === k) {
//       currentNode = newNode;
//     }
//   }

//   const history = [];
//   cmd.map((current) => {
//     const [command, count] = current.split(" ");
//     let i = 0;
//     switch (command) {
//       case "U":
//         while (i < count && currentNode.prev) {
//           currentNode = currentNode.prev;
//           i++;
//         }
//         break;
//       case "D":
//         while (i < count && currentNode.next) {
//           currentNode = currentNode.next;
//           i++;
//         }
//         break;
//       case "C":
//         history.push(currentNode);
//         const prev = currentNode.prev;
//         const next = currentNode.next;
//         if (prev && next) {
//           prev.next = next;
//           next.prev = prev;
//           currentNode = next;
//         } else if (prev) {
//           prev.next = null;
//           currentNode = prev;
//         } else if (next) {
//           next.prev = null;
//           currentNode = next;
//         }
//         break;
//       case "Z":
//         const node = history.pop();
//         const prevNode = node.prev;
//         const nextNode = node.next;
//         if (prevNode) {
//           prevNode.next = node;
//         }
//         if (nextNode) {
//           nextNode.prev = node;
//         }
//         break;
//     }
//   });

//   history.map((node) => {
//     answer[node.index] = "X";
//   });

//   return answer.join("");
// }

// function solution(n, k, cmd) {
//   let answer = Array(n).fill("O");
//   let totalArr = Array.from({ length: n }, (_, index) => index);
//   let deletedArr = [];
//   let currentPoint = k;

//   for (let i = 0; i < cmd.length; i++) {
//     let currentCmd = cmd[i].split(" ");
//     switch (currentCmd[0]) {
//       case "U":
//         currentPoint -= Number(currentCmd[1]);
//         break;
//       case "D":
//         currentPoint += Number(currentCmd[1]);
//         break;
//       case "C":
//         n--;
//         let value = totalArr.splice(currentPoint, 1);
//         deletedArr.push(...value);
//         if (currentPoint === n) {
//           currentPoint--;
//         }
//         break;
//       case "Z":
//         let poppedValue = deletedArr.pop();
//         n++;
//         if (totalArr[currentPoint] >= poppedValue) {
//           currentPoint++;
//         }
//         totalArr.push(poppedValue);
//         totalArr.sort((a, b) => a - b);
//         break;
//       default:
//         break;
//     }
//   }

//   for (let i = 0; i < deletedArr.length; i++) {
//     answer[deletedArr[i]] = "X";
//   }

//   return answer.join("");
// }

const Node = function (value, prevNode) {
  this.value = value;
  this.prevNode = prevNode;
  this.nextNode;
};

function solution(n, k, cmd) {
  let answer = Array(n).fill("O");
  let root = new Node(0);
  let currentNode = root;
  let previousNode = root;

  for (let i = 1; i < n; i++) {
    let newNode = new Node(i, previousNode);
    previousNode.nextNode = newNode;
    previousNode = newNode;

    if (i === k) {
      currentNode = newNode;
    }
  }

  let deletedNode = [];

  for (let i = 0; i < cmd.length; i++) {
    let currentCmd = cmd[i].split(" ");
    switch (currentCmd[0]) {
      case "U":
        for (let j = 0; j < Number(currentCmd[1]); j++) {
          currentNode = currentNode.prevNode;
        }
        break;
      case "D":
        for (let j = 0; j < Number(currentCmd[1]); j++) {
          currentNode = currentNode.nextNode;
        }
        break;
      case "C":
        deletedNode.push(currentNode);
        let prevNode = currentNode.prevNode;
        let nextNode = currentNode.nextNode;
        if (prevNode && nextNode) {
          prevNode.nextNode = nextNode;
          nextNode.prevNode = prevNode;
          currentNode = nextNode;
        } else if (prevNode) {
          prevNode.nextNode = null;
          currentNode = prevNode;
        } else if (nextNode) {
          nextNode.prevNode = null;
          currentNode = nextNode;
        }
        break;
      case "Z":
        let poppedNode = deletedNode.pop();
        let poppedNodePrev = poppedNode.prevNode;
        let poppedNodeNext = poppedNode.nextNode;
        if (poppedNodePrev) {
          poppedNodePrev.nextNode = poppedNode;
        }
        if (poppedNodeNext) {
          poppedNodeNext.prevNode = poppedNode;
        }
        break;
    }
  }

  for (let i = 0; i < deletedNode.length; i++) {
    let current = deletedNode[i];
    answer[current.value] = "X";
  }

  return answer.join("");
}

solution(8, 2, ["D 2", "C", "U 3", "C", "D 4", "C", "U 2", "Z", "Z"]);
solution(8, 2, [
  "D 2",
  "C",
  "U 3",
  "C",
  "D 4",
  "C",
  "U 2",
  "Z",
  "Z",
  "U 1",
  "C",
]);
