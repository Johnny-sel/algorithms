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
    const newNode = new Node(value);

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

  addAfterAt(value, index) {
    if (this.size === 0 || index > this.size) {
      return this.addToEnd(value);
    }

    let currentIndex = 0;
    let currentNode = this.head;
    
    while(currentNode) {
      if (currentIndex === index) {
        const newNode = new Node(value, currentNode.next);
        currentNode.next = newNode;
        this.size ++;
        
        return this;
      }

      currentIndex ++;
      currentNode = currentNode.next;
    }
  }

  removeAfterAt(index) {
    if (this.size < 2 || index >= this.size) {
      return this;
    }

    let currentIndex = 0;
    let currentNode = this.head;

    while (currentNode) {
      if (index === currentIndex) {
        currentNode.next = currentNode.next.next;
        this.size --;

        return this;
      }

      currentIndex ++;
      currentNode = currentNode.next;
    }

    return this;
  }

  removeFromBegin() {
    if (this.size === 0) {
      return this;
    }

    this.head = this.head.next;
    this.size --;

    return this;
  }

  removeFromEnd() {
    if(this.size < 2) {
      this.head = null;
      this.tail = null;
      this.size --;
      
      return this;
    }
    
    let currentNode = this.head;

    while (currentNode) {
      if (!currentNode.next.next) {
        currentNode.next = null;
        this.tail = currentNode;
        this.size --;
      
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
      if (currentNode.value !== value) {
        prevNode = currentNode;
        currentNode = currentNode.next;
        continue;
      }
        
      if (currentNode === this.head) {
        return this.removeFromBegin();
      }

      if (currentNode === this.tail) {
        return this.removeFromEnd();
      }
        
      prevNode.next = currentNode.next;
      this.size --;
      
      return this;
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
