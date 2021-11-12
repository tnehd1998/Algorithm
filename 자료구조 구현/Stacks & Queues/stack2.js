// Stack with Array

// My Answer

class MyStack {
  constructor() {
    this.array = [];
  }

  peek() {
    return this.array[this.array.length - 1];
  }

  push(value) {
    this.array = [...this.array, value];
  }

  pop() {
    if (this.array.length) {
      const deletedItem = this.array[this.array.length - 1];
      delete this.array[this.array.length - 1];
      this.array.length--;
      return deletedItem;
    }
  }
}

// Solution Code

class Stack {
  constructor() {
    this.array = [];
  }

  peek() {
    return this.array[this.array.length - 1];
  }

  push(value) {
    this.array.push(value);
  }

  pop() {
    this.array.pop();
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

const myStack2 = new Stack();
myStack2.push("Google");
myStack2.push("Udemy");
myStack2.push("Discord");
myStack2.pop();
myStack2.pop();
myStack2.pop();
console.log(myStack2.peek());
console.log(myStack2);
