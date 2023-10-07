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

    this.head.prev = newNode;
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
	
	addByIndex(value, index) {
		if (index === 0) {
			return this.addToBegin(value);
		}

		if (this.size === 0 || index >= this.size) {
			return this.addToEnd(value);
		}

		const isStartFromBegin = Math.floor(this.size / 2) <= index;
		
		let currentNode  = isStartFromBegin ? this.head : this.tail;
		let currentIndex = isStartFromBegin ? 0 : this.size - 1;

		while (currentNode) {
			if (currentIndex === index) {
				console.log("currentNode: ", currentNode);
				const newNode = new Node(value, currentNode.prev, currentNode);
				currentNode.prev.next = newNode;
				currentNode.prev = newNode;
				this.size ++;
				
				return this
			}

			currentNode  = isStartFromBegin ? currentNode.next : currentNode.prev;
			currentIndex = isStartFromBegin ? currentIndex + 1 : currentIndex - 1;
		}

	}

	removeFromBegin() {
		if (this.size === 0) {
			return this;
		}

		this.head.next.prev = null; 
		this.head = this.head.next;
		this.size --;

		return this;

	}

	removeFromEnd() {
		if (this.size === 0) {
			return this;
		}

		if (this.size === 1) {
			this.head = null;
			this.tail = null;
			this.size --;
			
			return this;
		}

		this.tail.prev.next = null;
		this.tail = this.tail.prev;
		this.size --;

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
    
    console.log('Double linked list: ', list.toString());
  }          
}


function main() {
  const list = new DoubleLinkedList();

  list.addToBegin(1);
  list.addToBegin(0);

  list.addToEnd(2);
  list.addToEnd(3);

	list.removeFromBegin();
	list.removeFromEnd();

	list.addByIndex(4,1);
  list.printList();

  list.addByIndex(5,2);
  list.printList();
  
	list.addByIndex(6,4)
	list.printList();

	list.addByIndex(0,0);
	list.printList();

	list.addByIndex(1,1);
	list.printList();

	console.log('Double linked list size:', list.getSize());
	console.log('Double linked list value:', list.getByValue(2).toString());
}

main();


