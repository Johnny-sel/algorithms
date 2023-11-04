const binarySearch = require('./binary-search');

describe('binarySearch test', () => {
  it('should be found value null', () => {
    const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    expect(binarySearch(list, 0)).toBe(null);
  });
  it('should be found value 3', () => {
    const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    expect(binarySearch(list, 3)).toBe(3);
  });
  it('should be found value 12', () => {
    const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    expect(binarySearch(list, 12)).toBe(12);
  });
  it('should be found value 1', () => {
    const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    expect(binarySearch(list, 1)).toBe(1);
  });
  it('should be found value 1, 2, null', () => {
    const list = [1, 2];
    expect(binarySearch(list, 1)).toBe(1);
    expect(binarySearch(list, 2)).toBe(2);
    expect(binarySearch(list, 3)).toBe(null);
  });
  it('should be found value 1, 2, 3, null', () => {
    const list = [1, 2, 3];
    expect(binarySearch(list, 1)).toBe(1);
    expect(binarySearch(list, 2)).toBe(2);
    expect(binarySearch(list, 3)).toBe(3);
    expect(binarySearch(list, 4)).toBe(null);
  });
  it('should be found value null', () => {
    const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    expect(binarySearch(list, 100)).toBe(null);
  });
  it('should be found value null', () => {
    const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    expect(binarySearch(list, -100)).toBe(null);
  });
});
