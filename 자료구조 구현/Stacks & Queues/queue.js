// Queue with Linked List

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class MyQueue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  peek() {
    return this.first;
  }

  enqueue(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.first = newNode;
    } else {
      this.last.next = newNode;
    }
    this.last = newNode;
    this.length++;
  }

  dequeue() {
    if (this.length !== 0) {
      this.first = this.first.next;
      this.length--;
      if (this.length === 0) {
        this.last = null;
      }
    }
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  peek() {
    return this.first;
  }

  enqueue(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.first = newNode;
    } else {
      this.last.next = newNode;
    }
    this.last = newNode;
    this.length++;
  }

  dequeue() {
    if (!this.first) {
      return null;
    }
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.length--;
  }
}

const myQueue = new MyQueue();
myQueue.enqueue("Mary");
myQueue.enqueue("Billy");
myQueue.enqueue("Zoe");
console.log(myQueue.peek());
myQueue.dequeue();
myQueue.dequeue();
myQueue.dequeue();
console.log(myQueue);

const myQueue2 = new Queue();
myQueue2.enqueue("Mary");
myQueue2.enqueue("Billy");
myQueue2.enqueue("Zoe");
console.log(myQueue2.peek());
myQueue2.dequeue();
myQueue2.dequeue();
myQueue2.dequeue();
console.log(myQueue2);
