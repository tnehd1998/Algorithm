// Stack with Linked List

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// My Answer

class MyStack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  peek() {
    return this.top;
  }

  push(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      const previousNode = this.top;
      this.top = newNode;
      this.top.next = previousNode;
    }
    this.length++;
  }

  pop() {
    const deletingNode = this.top;
    if (this.top === this.bottom) {
      this.top = null;
      this.bottom = null;
    } else {
      this.top = deletingNode.next;
    }
    this.length--;
    return deletingNode;
  }
}

// Solution Code

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  peek() {
    return this.top;
  }

  push(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      const holdingPointer = this.top;
      this.top = newNode;
      this.top.next = holdingPointer;
    }
    this.length++;
  }

  pop() {
    if (!this.top) {
      return null;
    }
    if (this.top === this.bottom) {
      this.bottom = null;
    }
    const holdingPointer = this.top;
    this.top = this.top.next;
    this.length--;
    return holdingPointer;
  }
}

const myStack = new MyStack();
myStack.push("Google");
myStack.push("Udemy");
myStack.push("Discord");
myStack.pop();
myStack.pop();
myStack.pop();
console.log(myStack.peek());
console.log(myStack);

const stack = new Stack();
stack.push("Google");
stack.push("Udemy");
stack.push("Discord");
stack.pop();
stack.pop();
stack.pop();
console.log(stack.peek());
console.log(stack);
