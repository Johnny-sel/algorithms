class Node {
  constructor(value, prev = null, next = null) {
    this.value = value;
    this.prev = prev;
    this.next = next;
  }

  toString() {
    return `${this.value}`;
  }
}

class DoubleLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  addToBegin(value) {
    const newNode = new Node(value, null, this.head);

    if (this.size === 0) {
      this.head = newNode;
      this.tail = newNode;
      this.size++;

      return this;
    }

    this.head.prev = newNode;
    this.head = newNode;
    this.size++;

    return this;
  }

  addToEnd(value) {
    const newNode = new Node(value, this.tail, null);

    if (this.size === 0) {
      this.head = newNode;
      this.tail = newNode;
      this.size++;

      return this;
    }

    this.tail.next = newNode;
    this.tail = newNode;
    this.size++;

    return this;
  }

  addByIndex(value, index) {
    if (index === 0 || this.size === 0) {
      return this.addToBegin(value);
    }

    if (index >= this.size) {
      return this.addToEnd(value);
    }

    const isStartFromBegin = Math.floor(this.size / 2) <= index;

    let currentNode = isStartFromBegin ? this.head : this.tail;
    let currentIndex = isStartFromBegin ? 0 : this.size - 1;

    while (currentNode) {
      if (currentIndex === index) {
        const newNode = new Node(value, currentNode.prev, currentNode);
        currentNode.prev.next = newNode;
        currentNode.prev = newNode;
        this.size++;

        return this;
      }

      currentNode = isStartFromBegin ? currentNode.next : currentNode.prev;
      currentIndex = isStartFromBegin ? currentIndex + 1 : currentIndex - 1;
    }
  }

  removeFromBegin() {
    if (this.size === 0) {
      return this;
    }

    this.head.next.prev = null;
    this.head = this.head.next;
    this.size--;

    return this;
  }

  removeFromEnd() {
    if (this.size === 0) {
      return this;
    }

    if (this.size === 1) {
      this.head = null;
      this.tail = null;
      this.size--;

      return this;
    }

    this.tail.prev.next = null;
    this.tail = this.tail.prev;
    this.size--;

    return this;
  }

  removeByIndex(index) {
    if (index === 0 || this.size === 0) {
      return this.removeFromBegin();
    }

    if (index >= this.size - 1) {
      return this.removeFromEnd();
    }

    const isStartFromBegin = Math.floor(this.size / 2) <= index;

    let currentNode = isStartFromBegin ? this.head : this.tail;
    let currentIndex = isStartFromBegin ? 0 : this.size - 1;

    while (currentNode) {
      if (currentIndex === index) {
        currentNode.prev.next = currentNode.next;
        currentNode.next.prev = currentNode.prev;
        this.size--;

        return this;
      }

      currentNode = isStartFromBegin ? currentNode.next : currentNode.prev;
      currentIndex = isStartFromBegin ? currentIndex + 1 : currentIndex - 1;
    }
  }

  getByValue(value) {
    let currentNode = this.head;

    while (currentNode) {
      if (currentNode.value === value) {
        return currentNode;
      }

      currentNode = currentNode.next;
    }
  }

  getByIndex(index) {
    const isStartFromBegin = Math.floor(this.size / 2) <= index;

    let currentNode = isStartFromBegin ? this.head : this.tail;
    let currentIndex = isStartFromBegin ? 0 : this.size - 1;

    while (currentNode) {
      if (currentIndex === index) {
        return currentNode;
      }

      currentNode = isStartFromBegin ? currentNode.next : currentNode.prev;
      currentIndex = isStartFromBegin ? currentIndex + 1 : currentIndex - 1;
    }
  }

  getSize() {
    return this.size;
  }

  toString() {
    const list = [];
    let currentNode = this.head;

    while (currentNode) {
      list.push(currentNode);
      currentNode = currentNode.next;
    }

    return list.toString();
  }

  toArray() {
    const list = [];
    let currentNode = this.head;

    while (currentNode) {
      list.push(currentNode);
      currentNode = currentNode.next;
    }

    return list;
  }

  removeAll() {
    let currentNode = this.head;

    while (currentNode) {
      currentNode = currentNode.next;

      if (currentNode) {
        currentNode.prev = null;
        currentNode.next = null;
      }
    }

    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  initForTest() {
    this.addToEnd(0);
    this.addToEnd(1);
    this.addToEnd(2);
    this.addToEnd(3);
    this.addToEnd(4);
    this.addToEnd(5);
    this.addToEnd(6);
    this.addToEnd(7);
    this.addToEnd(8);
    this.addToEnd(9);
  }
}

module.exports = DoubleLinkedList;
