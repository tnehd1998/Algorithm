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
    arr.push(binaryTree.index);
    preOrder(binaryTree.left, arr);
    preOrder(binaryTree.right, arr);
  }
}

function postOrder(binaryTree, arr) {
  if (binaryTree !== null) {
    postOrder(binaryTree.left, arr);
    postOrder(binaryTree.right, arr);
    arr.push(binaryTree.index);
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
    binaryTree.insert(sortedNode[i][0], sortedNode[i][1]);
  }

  preOrder(binaryTree, preArr);
  postOrder(binaryTree, postArr);

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
