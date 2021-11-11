// My Answer

class MyLinkedList {
  constructor(value) {
    this.head = {
      value,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    if (this.length === 1) {
      this.head.next = {
        value,
        next: null,
      };
    } else {
      let current = this.head;
      for (let i = 0; i < this.length - 1; i++) {
        current = current.next;
      }
      current.next = {
        value,
        next: null,
      };
    }
    this.tail = {
      value,
      next: null,
    };
    this.length++;
  }

  prepend(value) {
    const newNode = {
      value,
      next: this.head,
    };
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
      };
      this.length++;
    }
  }

  remove(index) {
    if (index === 0) {
      this.head = this.head.next;
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
    }
    this.length--;
  }

  reverse() {
    const array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return console.log(array.reverse());
  }
}

// Solution Code

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = {
      value,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = new Node(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
  }

  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
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
    const holdingPointer = leader.next;
    leader.next = newNode;
    newNode.next = holdingPointer;
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
    } else {
      if (index >= this.length) {
        index = this.length - 1;
      }
      const leader = this.traverseToIndex(index - 1);
      const unwantedNode = leader.next;
      leader.next = unwantedNode.next;
      this.length--;
    }
  }

  reverse() {
    if (!this.head.next) {
      return this.head;
    }
    let first = this.head;
    this.tail = this.head;
    let second = first.next;
    while (second) {
      const temp = second.next;
      second.next = first;
      first = second;
      second = temp;
    }
    this.head.next = null;
    this.head = first;
    return this.printList();
  }
}

const myLinkedList = new MyLinkedList(10);
myLinkedList.append(16);
myLinkedList.prepend(1);
myLinkedList.insert(2, 99);
myLinkedList.insert(20, 88);
myLinkedList.insert(0, 22);
myLinkedList.remove(0);
myLinkedList.remove(3);
myLinkedList.remove(100);
myLinkedList.printList();
myLinkedList.reverse();

const myLinkedList2 = new LinkedList(10);
myLinkedList2.append(16);
myLinkedList2.prepend(1);
myLinkedList2.insert(2, 99);
myLinkedList2.insert(20, 88);
myLinkedList2.insert(0, 22);
myLinkedList2.remove(0);
myLinkedList2.remove(3);
myLinkedList2.remove(100);
myLinkedList2.printList();
myLinkedList2.reverse();
