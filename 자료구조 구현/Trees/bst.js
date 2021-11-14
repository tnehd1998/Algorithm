class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// My Answer

class MyBinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
    } else {
      let current = this.root;
      while (current != null) {
        if (current.value > value) {
          if (current.left === null) {
            current.left = newNode;
            break;
          }
          current = current.left;
        } else {
          if (current.right === null) {
            current.right = newNode;
            break;
          }
          current = current.right;
        }
      }
    }
  }

  lookup(value) {
    let current = this.root;
    while (current != null) {
      if (current.value === value) {
        return current;
      } else {
        if (current.value > value) {
          current = current.left;
        } else {
          current = current.right;
        }
      }
    }
    return false;
  }

  remove(value) {
    let current = this.lookup(value);
    if (current) {
      if (current.right) {
        let prevChangingNode = current.right;
        if (prevChangingNode.left) {
          while (prevChangingNode.left) {
            if (prevChangingNode.left.left === null) {
              break;
            }
            prevChangingNode = prevChangingNode.left;
          }
          const changingNode = prevChangingNode.left;
          prevChangingNode.left = null;
          current.value = changingNode.value;
        } else {
          current.value = current.right.value;
          current.right = current.right.right;
        }
      } else if (current.left) {
        current.value = current.left.value;
        current.left = current.left.left;
      } else {
        current.value = null;
      }
    }
  }
}

// Solution Code

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
    } else {
      let currentNode = this.root;
      while (true) {
        if (value < currentNode.value) {
          // Left
          if (!currentNode.left) {
            currentNode.left = newNode;
            return;
          }
          currentNode = currentNode.left;
        } else {
          // Right
          if (!currentNode.right) {
            currentNode.right = newNode;
            return;
          }
          currentNode = currentNode.right;
        }
      }
    }
  }

  lookup(value) {
    if (!this.root) {
      return false;
    }
    let currentNode = this.root;
    while (currentNode) {
      if (value < currentNode.value) {
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        currentNode = currentNode.right;
      } else if (currentNode.value === value) {
        return true;
      }
    }
    return false;
  }

  remove(value) {
    if (!this.root) {
      return false;
    }
    let currentNode = this.root;
    let parentNode = null;
    while (currentNode) {
      if (value < currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.right;
      } else if (currentNode.value === value) {
        //We have a match, get to work!

        //Option 1: No right child:
        if (currentNode.right === null) {
          if (parentNode === null) {
            this.root = currentNode.left;
          } else {
            //if parent > current value, make current left child a child of parent
            if (currentNode.value < parentNode.value) {
              parentNode.left = currentNode.left;

              //if parent < current value, make left child a right child of parent
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = currentNode.left;
            }
          }

          //Option 2: Right child which doesnt have a left child
        } else if (currentNode.right.left === null) {
          currentNode.right.left = currentNode.left;
          if (parentNode === null) {
            this.root = currentNode.right;
          } else {
            //if parent > current, make right child of the left the parent
            if (currentNode.value < parentNode.value) {
              parentNode.left = currentNode.right;

              //if parent < current, make right child a right child of the parent
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = currentNode.right;
            }
          }

          //Option 3: Right child that has a left child
        } else {
          //find the Right child's left most child
          let leftmost = currentNode.right.left;
          let leftmostParent = currentNode.right;
          while (leftmost.left !== null) {
            leftmostParent = leftmost;
            leftmost = leftmost.left;
          }

          //Parent's left subtree is now leftmost's right subtree
          leftmostParent.left = leftmost.right;
          leftmost.left = currentNode.left;
          leftmost.right = currentNode.right;

          if (parentNode === null) {
            this.root = leftmost;
          } else {
            if (currentNode.value < parentNode.value) {
              parentNode.left = leftmost;
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = leftmost;
            }
          }
        }
        return true;
      }
    }
  }
}

function traverse(node) {
  const tree = { value: node.value };
  if (tree.value === null) {
    return null;
  }
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}

const tree = new MyBinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);
console.log(tree.lookup(6));
console.log(tree.lookup(3));
console.log(tree.lookup(1));
tree.remove(1);
console.log(tree.lookup(1));
console.log(JSON.stringify(traverse(tree.root)));

const tree2 = new BinarySearchTree();
tree2.insert(9);
tree2.insert(4);
tree2.insert(6);
tree2.insert(20);
tree2.insert(170);
tree2.insert(15);
tree2.insert(1);
console.log(tree2.lookup(6));
console.log(tree2.lookup(3));
console.log(tree2.lookup(1));
tree2.remove(1);
console.log(tree2.lookup(1));
console.log(JSON.stringify(traverse(tree2.root)));
