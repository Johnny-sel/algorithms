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

  addToBegin(value) {
    const newNode = new Node(value, this.head);
    this.size = this.size + 1;

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;

      return this;
    }

    this.head = newNode;

    return this;

  }

  addToEnd(value) {
    const newNode = new Node(value);
    this.size = this.size + 1;

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;

      return this;
    }

    this.tail.next = newNode;
    this.tail = newNode;
    
    return this;
  }

  addAfterAt(value, index) {
    if (!this.head || index > this.size) {
      return this.addToEnd(value);
    }

    let currentIndex = 0;
    let currentNode = this.head;
    
    while(currentNode) {
      if (currentIndex === index) {
        const newNode = new Node(value, currentNode.next);
        this.size  = this.size + 1;
        currentNode.next = newNode;
        
        return this;
      }

      currentIndex = currentIndex + 1;
      currentNode = currentNode.next;
    }
  }

  removeAfterAt(index) {
    if (this.size < 2 || index > this.size) {
      return this;
    }

    let currentIndex = 0;
    let currentNode = this.head;

    while (currentNode) {
      if (index === currentIndex) {
        if (currentNode === this.tail) {
          return this;
        }

        currentNode.next = currentNode.next.next;
        this.size = this.size - 1;

        return this;
      }

      currentIndex = currentIndex + 1;
      currentNode = currentNode.next;
    }

    return this;
  }

  removeFromBegin() {
    if (!this.head) {
      return this;
    }

    this.head = this.head.next;
    this.size = this.size - 1;

    return this;
  }

  removeFromEnd() {
    if(this.size < 2) {
      this.head = null;
      this.tail = null;
      this.size = this.size - 1;
      
      return this;
    }
    
    let currentNode = this.head;

    while (currentNode) {
      if (!currentNode.next.next) {
        currentNode.next = null;
        this.tail = currentNode;
        this.size = this.size -1;
      
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
    let prevNode = null;

    while (currentNode) {
      if (currentNode.value === value) {
        if (currentNode === this.head) {
          return this.removeFromBegin();
        }

        if (currentNode === this.tail) {
          return this.removeFromEnd();
        }
        
        prevNode.next = currentNode.next;
        this.size = this.size - 1;
        
        return this;
      }

      prevNode = currentNode;
      currentNode = currentNode.next;
    }

    return this;
  }

  getByValue(value) {
    let currentNode = this.head;

    while(currentNode) {
      if (currentNode.value === value) {
        return currentNode;
      }

      currentNode = currentNode.next;
    }

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
    
    console.log('Single linked list: ', list.toString());
  }          
}

function main() {
  const list = new SingleLinkedList();
 
  list.addToBegin(1)
  list.addToEnd(5);
  list.addToEnd(6);
  list.addToBegin(0);
  list.addToEnd(7);
  list.addToEnd(8);
  list.addToEnd(9);
  list.addToBegin(10);

  list.addAfterAt(11, 0);
  list.addAfterAt(13, 7);
  
  list.removeFromBegin();
  list.removeFromEnd();

  list.removeByValue(7);
  list.removeByValue(11);
  list.removeByValue(13);

  list.removeAfterAt(2);

  list.printList();

  console.log(`Single linked list size: ${list.getSize()}`);
  console.log(`Node:`, list.getByValue(9));
}

main();
