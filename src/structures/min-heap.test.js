const MinHeap = require('./min-heap');

describe('minHeap', () => {
  const minHeap = new MinHeap();

  beforeEach(() => {
    minHeap.clear();
  });

  it('add and remove', () => {
    // ADD

    minHeap.add(20);
    expect(minHeap.peak).toBe(20);

    minHeap.add(30);
    expect(minHeap.peak).toBe(20);

    minHeap.add(15);
    expect(minHeap.peak).toBe(15);

    minHeap.add(10);
    expect(minHeap.peak).toBe(10);

    minHeap.add(20);
    expect(minHeap.peak).toBe(10);

    minHeap.add(100);
    expect(minHeap.peak).toBe(10);

    minHeap.add(0);
    expect(minHeap.peak).toBe(0);

    minHeap.add(200);
    expect(minHeap.peak).toBe(0);

    minHeap.add(1);
    expect(minHeap.peak).toBe(0);

    minHeap.add(1);
    expect(minHeap.peak).toBe(0);

    minHeap.add(5);
    expect(minHeap.peak).toBe(0);

    minHeap.add(3);
    expect(minHeap.peak).toBe(0);

    minHeap.add(1);
    expect(minHeap.peak).toBe(0);

    // REMOVE
    minHeap.remove();
    expect(minHeap.peak).toBe(1);

    minHeap.remove();
    expect(minHeap.peak).toBe(1);

    minHeap.remove();
    expect(minHeap.peak).toBe(1);

    minHeap.remove();
    expect(minHeap.peak).toBe(3);

    minHeap.remove();
    expect(minHeap.peak).toBe(5);

    minHeap.remove();
    expect(minHeap.peak).toBe(10);

    minHeap.remove();
    expect(minHeap.peak).toBe(15);

    minHeap.remove();
    expect(minHeap.peak).toBe(20);

    minHeap.remove();
    expect(minHeap.peak).toBe(20);

    minHeap.remove();
    expect(minHeap.peak).toBe(30);

    minHeap.remove();
    expect(minHeap.peak).toBe(100);

    minHeap.remove();
    expect(minHeap.peak).toBe(200);
  });
});
