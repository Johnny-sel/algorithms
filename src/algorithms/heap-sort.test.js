const heapSort = require('./heap-sort');

const notSortedArray = [3, 2, 3, 10, 99, 56, 34, 23, 78, 4, 78, 65, 33, 31];

describe('heap-sort', () => {
  it('heap sort by asc', () => {
    expect(heapSort(notSortedArray, 'asc')).toEqual([
      99, 78, 78, 65, 56, 34, 33, 31, 23, 10, 4, 3, 3, 2,
    ]);
  });

  it('heap sort by asc', () => {
    expect(heapSort(notSortedArray, 'desc')).toEqual([
      2, 3, 3, 4, 10, 23, 31, 33, 34, 56, 65, 78, 78, 99,
    ]);
  });

});
