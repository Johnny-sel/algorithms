const quickSort = require('./quick-sort');

describe('quick sort test', () => {
  it('should be [0,1,2,3,4,5,6,7,8,9]', () => {
    const list = [2, 6, 4, 5, 8, 9, 1, 3, 7, 0];
    console.log('quickSort(list):', quickSort(list))
    expect(quickSort(list)).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });
});
