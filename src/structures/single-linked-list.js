class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }

  toString() {
    return `${this.value}`;
  }
}

class SingleLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  get lastIndex() {
    return this.size - 1;
  }

  addToBegin(value) {
    const newNode = new Node(value, this.head);

    if (this.size === 0) {
      this.head = newNode;
      this.tail = newNode;
      this.size++;

      return this;
    }

    this.head = newNode;
    this.size++;

    return this;
  }

  addToEnd(value) {
    const newNode = new Node(value);

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
    if (this.size === 0 || index === 0) {
      return this.addToBegin(value);
    }

    if (index > this.lastIndex) {
      return this.addToEnd(value);
    }

    let currentNode = this.head;
    let previousNode = null;
    let currentIndex = 0;

    while (currentNode) {
      if (currentIndex !== index) {
        previousNode = currentNode;
        currentNode = currentNode.next;
        currentIndex++;
        continue;
      }

      previousNode.next = new Node(value, currentNode);
      this.size++;

      return this;
    }

    return this;
  }

  removeByIndex(index) {
    if (this.size === 0 || index === 0) {
      return this.removeFromBegin();
    }

    if (index >= this.lastIndex) {
      return this.removeFromEnd();
    }

    let currentNode = this.head;
    let previousNode = null;
    let currentIndex = 0;

    while (currentNode) {
      if (currentIndex !== index) {
        previousNode = currentNode;
        currentNode = currentNode.next;
        currentIndex++;
        continue;
      }

      previousNode.next = currentNode.next;
      this.size--;

      return this;
    }

    return this;
  }

  removeFromBegin() {
    if (this.size === 0) {
      return this;
    }

    this.head = this.head.next;
    this.size--;

    return this;
  }

  removeFromEnd() {
    if (this.size === 1) {
      this.head = null;
      this.tail = null;
      this.size--;

      return this;
    }

    let currentNode = this.head;

    while (currentNode) {
      if (!currentNode.next.next) {
        currentNode.next = null;
        this.tail = currentNode;
        this.size--;

        return this;
      }

      currentNode = currentNode.next;
    }

    return this;
  }

  removeByValue(value) {
    if (this.size === 0) {
      return this;
    }

    let currentNode = this.head;
    let previousNode = null;

    while (currentNode) {
      if (currentNode.value !== value) {
        previousNode = currentNode;
        currentNode = currentNode.next;
        continue;
      }

      if (currentNode === this.head) {
        return this.removeFromBegin();
      }

      if (currentNode === this.tail) {
        return this.removeFromEnd();
      }

      previousNode.next = currentNode.next;
      this.size--;

      return this;
    }

    return this;
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
    let currentNode = this.head;
    let currentIndex = 0;

    while (currentNode) {
      if (currentIndex === index) {
        return currentNode;
      }

      currentNode = currentNode.next;
      currentIndex++;
    }
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
        currentNode.next = null;
      }
    }

    this.head = null;
    this.tail = null;
    this.size = 0;
  }
}

module.exports = SingleLinkedList;
