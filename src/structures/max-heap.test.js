const MaxHeap = require('./max-heap');

describe('maxHeap', () => {
  const maxHeap = new MaxHeap();

  beforeEach(() => {
    maxHeap.clear();
  });

  it('add and remove', () => {
    // ADD
    maxHeap.add(0);
    expect(maxHeap.peak).toBe(0);

    maxHeap.add(2);
    expect(maxHeap.peak).toBe(2);

    maxHeap.add(1);
    expect(maxHeap.peak).toBe(2);

    maxHeap.add(5);
    expect(maxHeap.peak).toBe(5);

    maxHeap.add(10);
    expect(maxHeap.peak).toBe(10);

    maxHeap.add(20);
    expect(maxHeap.peak).toBe(20);

    maxHeap.add(100);
    expect(maxHeap.peak).toBe(100);

    maxHeap.add(200);
    expect(maxHeap.peak).toBe(200);

    maxHeap.add(1);
    expect(maxHeap.peak).toBe(200);

    maxHeap.add(1);
    expect(maxHeap.peak).toBe(200);

    maxHeap.add(5);
    expect(maxHeap.peak).toBe(200);

    maxHeap.add(3);
    expect(maxHeap.peak).toBe(200);

    maxHeap.add(1);
    expect(maxHeap.peak).toBe(200);

    // REMOVE
    maxHeap.remove();
    expect(maxHeap.peak).toBe(100);

    maxHeap.remove();
    expect(maxHeap.peak).toBe(20);

    maxHeap.remove();
    expect(maxHeap.peak).toBe(10);

    maxHeap.remove();
    expect(maxHeap.peak).toBe(5);

    maxHeap.remove();
    expect(maxHeap.peak).toBe(5);

    maxHeap.remove();
    expect(maxHeap.peak).toBe(3);

    maxHeap.remove();
    expect(maxHeap.peak).toBe(2);

    maxHeap.remove();
    expect(maxHeap.peak).toBe(1);

    maxHeap.remove();
    expect(maxHeap.peak).toBe(1);

    maxHeap.remove();
    expect(maxHeap.peak).toBe(1);

    maxHeap.remove();
    expect(maxHeap.peak).toBe(1);

    maxHeap.remove();
    expect(maxHeap.peak).toBe(0);
  });
});
