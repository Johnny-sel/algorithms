const MaxHeap = require('../structures/max-heap');
const MinHeap = require('../structures/min-heap');

function heapSort(arr = [], sortBy = 'asc') {
  let i = arr.length;

  const sortedArray = [];
  const heap = sortBy === 'desc' ? new MinHeap() : new MaxHeap();

  heap.buildHeap(arr);

  while (i--) {
    sortedArray.push(heap.peak);
    heap.remove();
  }

  return sortedArray;
}

module.exports = heapSort;
