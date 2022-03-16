// 생각한 풀이 방법
// 1. 이진 트리를 조건에 맞게 구현한다.
// 2. Node를 연결할 때 기준을 x좌표를 기준으로 left, right를 판단한다.
// 3. 이진 트리를 생성한 후, 전위 순회, 후위 순회를 한다.
// 4. 각각의 결과를 preArr, postArr에 저장한 후 [preArr,postArr]를 반환한다.

class Node {
  constructor(index, valueX) {
    this.index = index;
    this.valueX = valueX;
    this.left = null;
    this.right = null;
  }

  insert(index, valueX) {
    this.valueX > valueX
      ? this.addLeft(index, valueX)
      : this.addRight(index, valueX);
  }

  addLeft(index, valueX) {
    this.left
      ? this.left.insert(index, valueX)
      : (this.left = new Node(index, valueX));
  }

  addRight(index, valueX) {
    this.right
      ? this.right.insert(index, valueX)
      : (this.right = new Node(index, valueX));
  }
}

function preOrder(binaryTree, arr) {
  if (binaryTree !== null) {
    arr.push(binaryTree.index); // 각각의 결과를 preArr에 저장
    preOrder(binaryTree.left, arr);
    preOrder(binaryTree.right, arr);
  }
}

function postOrder(binaryTree, arr) {
  if (binaryTree !== null) {
    postOrder(binaryTree.left, arr);
    postOrder(binaryTree.right, arr);
    arr.push(binaryTree.index); // 각각의 결과를 postArr에 저장
  }
}

function solution(nodeinfo) {
  let preArr = [];
  let postArr = [];

  let nodeWithIndex = nodeinfo.map((node, index) => [
    index + 1,
    node[0],
    node[1],
  ]);
  let sortedNode = nodeWithIndex.sort((a, b) => b[2] - a[2]);

  const binaryTree = new Node(sortedNode[0][0], sortedNode[0][1]);
  for (let i = 1; i < sortedNode.length; i++) {
    // 이진 트리를 조건에 맞게 구현
    binaryTree.insert(sortedNode[i][0], sortedNode[i][1]); // Node를 연결할 때 기준을 x좌표를 기준으로 left, right를 판단
  }

  preOrder(binaryTree, preArr); // 전위 순회
  postOrder(binaryTree, postArr); // 후위 순회

  return [preArr, postArr];
}

console.log(
  solution([
    [5, 3],
    [11, 5],
    [13, 3],
    [3, 5],
    [6, 1],
    [1, 3],
    [8, 6],
    [7, 2],
    [2, 2],
  ])
);
