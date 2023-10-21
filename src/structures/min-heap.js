class minHeap {
  constructor() {
    this.arr = [];
  }

  get peak() {
    return this.arr[0];
  }

  clear() {
    this.arr = [];
  }

  buildHeap(rawArray) {
    this.arr = [...rawArray];

    let i = Math.round((this.arr.length - 1) / 2);

    while (i--) {
      this.siftDown(i);
    }

    return this.arr;
  }

  add(item) {
    this.arr.push(item);
    this.siftUp(this.arr.length - 1);
  }

  remove() {
    this.arr[0] = this.arr.pop();
    this.siftDown(0);
  }

  siftDown(index) {
    while (this.hasLeftChild(index)) {
      const smallerChildIndex = this.getIndexOfMinChild(index);

      if (this.arr[index] < this.arr[smallerChildIndex]) {
        break;
      }

      this.swap(index, smallerChildIndex);
      index = smallerChildIndex;
    }
  }

  siftUp(index) {
    while (this.hasParent(index) && this.parent(index) > this.arr[index]) {
      this.swap(this.getParentIndex(index), index);
      index = this.getParentIndex(index);
    }
  }

  getLeftChildIndex(parentIndex) {
    return 2 * parentIndex + 1;
  }

  getRightChildIndex(parentIndex) {
    return 2 * parentIndex + 2;
  }

  getParentIndex(childIndex) {
    return Math.floor((childIndex - 1) / 2);
  }

  leftChild(index) {
    return this.arr[this.getLeftChildIndex(index)];
  }

  rightChild(index) {
    return this.arr[this.getRightChildIndex(index)];
  }

  parent(index) {
    return this.arr[this.getParentIndex(index)];
  }

  hasLeftChild(parentIndex) {
    return this.getLeftChildIndex(parentIndex) < this.arr.length;
  }

  hasRightChild(parentIndex) {
    return this.getRightChildIndex(parentIndex) < this.arr.length;
  }

  hasParent(childIndex) {
    return this.getParentIndex(childIndex) >= 0;
  }

  swap(oneIndex, twoIndex) {
    const temp = this.arr[oneIndex];
    this.arr[oneIndex] = this.arr[twoIndex];
    this.arr[twoIndex] = temp;
  }

  getIndexOfMinChild(parentIndex) {
    if (!this.hasRightChild(parentIndex)) {
      return this.getLeftChildIndex(parentIndex);
    }

    if (this.rightChild(parentIndex) < this.leftChild(parentIndex)) {
      return this.getRightChildIndex(parentIndex);
    }

    return this.getLeftChildIndex(parentIndex);
  }
}

module.exports = minHeap;
