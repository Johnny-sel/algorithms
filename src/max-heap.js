class maxHeap {
  constructor() {
    this.heap = [];
  }

  get root() {
    return this.heap[0];
  }

  clear() {
    this.heap = [];
  }

  add(item) {
    let index = this.heap.push(item) - 1; // last index

    while (this.hasParent(index) && this.parent(index) < this.heap[index]) {
      this.doSwap(this.getParentIndex(index), index);
      index = this.getParentIndex(index);
    }
  }

  remove() {
    this.heap[0] = this.heap.pop();

    let index = 0;

    while (this.hasLeftChild(index)) {
      const largerChildIndex = this.getLargerChildrenIndex(index);

      if (this.heap[index] > this.heap[largerChildIndex]) {
        break;
      }

      this.doSwap(index, largerChildIndex);
      index = largerChildIndex;
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
    return this.heap[this.getLeftChildIndex(index)];
  }

  rightChild(index) {
    return this.heap[this.getRightChildIndex(index)];
  }

  parent(index) {
    return this.heap[this.getParentIndex(index)];
  }

  hasLeftChild(parentIndex) {
    return this.getLeftChildIndex(parentIndex) < this.heap.length;
  }

  hasRightChild(parentIndex) {
    return this.getRightChildIndex(parentIndex) < this.heap.length;
  }

  hasParent(childIndex) {
    return this.getParentIndex(childIndex) >= 0;
  }

  doSwap(oneIndex, twoIndex) {
    const temp = this.heap[oneIndex];
    this.heap[oneIndex] = this.heap[twoIndex];
    this.heap[twoIndex] = temp;
  }

  getLargerChildrenIndex(parentIndex) {
    if (!this.hasRightChild(parentIndex)) {
      return this.getLeftChildIndex(parentIndex);
    }

    if (this.rightChild(parentIndex) > this.leftChild(parentIndex)) {
      return this.getRightChildIndex(parentIndex);
    }

    return this.getLeftChildIndex(parentIndex);
  }
}

module.exports = maxHeap;
