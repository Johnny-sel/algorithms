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
      this.size ++;

      return this;
    }

    this.head = newNode;
    this.size ++;

    return this;
  }

  addToEnd(value) {
    const newNode = new Node(value, this.tail, null);

    if (this.size === 0) {
      this.head = newNode;
      this.tail = newNode;
      this.size ++;

      return this;
    }
    
    this.tail.next = newNode;
    this.tail = newNode;
    this.size ++;

    return this;

  }

  getSize() {
    return this.size;
  }
 
  printList() {
    const list = [];
    let currentNode = this.head;
    
    while(currentNode) {
      list.push(currentNode);
      currentNode = currentNode.next;
    }
    
    console.log('Double linked list: ', list.toString());
  }          
}


function main() {
  const list = new DoubleLinkedList();

  list.addToBegin(1);
  list.addToBegin(0);

  list.addToEnd(2);
  list.addToEnd(3);

  list.printList();
  console.log('Double linked list size:', list.getSize());
}

main();






