// My Answer

class MyDoublyLinkedList {
  constructor(value) {
    this.head = {
      value,
      next: null,
      prev: null,
    };
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    let current = this.head;
    if (this.length === 1) {
      this.head.next = {
        value,
        next: null,
        prev: this.head,
      };
    } else {
      for (let i = 0; i < this.length - 1; i++) {
        current = current.next;
      }
      current.next = {
        value,
        next: null,
        prev: current,
      };
    }
    this.tail = {
      value,
      next: null,
      prev: current,
    };
    this.length++;
  }

  prepend(value) {
    const newNode = {
      value,
      next: this.head,
      prev: null,
    };
    this.head.prev = newNode;
    this.head = newNode;
    this.length++;
  }

  printList() {
    const array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return console.log(array);
  }

  insert(index, value) {
    if (index === 0) {
      this.prepend(value);
    } else if (index > this.length) {
      this.append(value);
    } else {
      let current = this.head;
      for (let i = 0; i < index - 1; i++) {
        current = current.next;
      }
      let initialValue = current.next;
      current.next = {
        value,
        next: initialValue,
        prev: current,
      };
      initialValue.prev = current.next;
      this.length++;
    }
  }

  remove(index) {
    if (index === 0) {
      this.head = this.head.next;
      this.head.prev = null;
    } else {
      if (index >= this.length) {
        index = this.length - 1;
      }
      let current = this.head;
      for (let i = 0; i < index - 1; i++) {
        current = current.next;
      }
      let deletingValue = current.next;
      let nextValue = deletingValue.next;
      current.next = nextValue;
      deletingValue.prev = current;
      if (index === this.length - 1) {
        this.tail = current;
      }
    }
    this.length--;
  }
}

// Solution Code

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor(value) {
    this.head = {
      value,
      next: null,
      prev: null,
    };
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = new Node(value);
    newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
  }

  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head.prev = newNode;
    this.head = newNode;
    this.length++;
  }

  printList() {
    const array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return console.log(array);
  }

  insert(index, value) {
    // Check params
    if (index >= this.length) {
      return this.append(value);
    }
    if (index === 0) {
      return this.prepend(value);
    }
    const newNode = new Node(value);
    const leader = this.traverseToIndex(index - 1);
    const follower = leader.next;
    leader.next = newNode;
    newNode.prev = leader;
    newNode.next = follower;
    follower.prev = newNode;
    this.length++;
  }

  traverseToIndex(index) {
    let counter = 0;
    let currentNode = this.head;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }

  remove(index) {
    // Check params
    if (index === 0) {
      this.head = this.head.next;
      this.head.prev = null;
      this.length--;
    } else {
      if (index >= this.length) {
        index = this.length - 1;
      }
      const leader = this.traverseToIndex(index - 1);
      const unwantedNode = leader.next;
      leader.next = unwantedNode.next;
      unwantedNode.prev = leader;
      if (index === this.length - 1) {
        this.tail = leader;
      } else {
        this.tail.prev = leader;
      }
      this.length--;
    }
  }
}

const myLinkedList = new MyDoublyLinkedList(10);
myLinkedList.append(16);
myLinkedList.prepend(1);
myLinkedList.insert(2, 99);
myLinkedList.insert(20, 88);
myLinkedList.insert(0, 22);
myLinkedList.remove(0);
myLinkedList.remove(3);
myLinkedList.remove(100);
myLinkedList.printList();
console.log(myLinkedList);

const myLinkedList2 = new DoublyLinkedList(10);
myLinkedList2.append(16);
myLinkedList2.prepend(1);
myLinkedList2.insert(2, 99);
myLinkedList2.insert(20, 88);
myLinkedList2.insert(0, 22);
myLinkedList2.remove(0);
myLinkedList2.remove(3);
myLinkedList2.remove(100);
myLinkedList2.printList();
console.log(myLinkedList2);
