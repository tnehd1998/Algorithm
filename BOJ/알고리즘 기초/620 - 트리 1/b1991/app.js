const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let testCase = input.shift();
let tree = {};
for (let i = 0; i < testCase; i++) {
  const [node, left, right] = input[i].split(" ");
  tree[node] = [left, right];
}
solution(+testCase, tree);

function solution(T, tree) {
  let result = "";

  function preOrder(node) {
    if (node === ".") return;
    const [lt, rt] = tree[node];
    result += node;
    preOrder(lt);
    preOrder(rt);
  }

  function inOrder(node) {
    if (node === ".") return;
    const [lt, rt] = tree[node];
    inOrder(lt);
    result += node;
    inOrder(rt);
  }

  function postOrder(node) {
    if (node === ".") return;
    const [lt, rt] = tree[node];
    postOrder(lt);
    postOrder(rt);
    result += node;
  }

  preOrder("A");
  result += "\n";
  inOrder("A");
  result += "\n";
  postOrder("A");

  console.log(result);
}
