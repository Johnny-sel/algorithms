const MinHeap = require('./min-heap');

describe('minHeap', () => {
  const minHeap = new MinHeap();

  beforeEach(() => {
    minHeap.clear();
  });

  it('add and remove', () => {
    // ADD

    minHeap.add(20);
    expect(minHeap.root).toBe(20);

    minHeap.add(30);
    expect(minHeap.root).toBe(20);

    minHeap.add(15);
    expect(minHeap.root).toBe(15);

    minHeap.add(10);
    expect(minHeap.root).toBe(10);

    minHeap.add(20);
    expect(minHeap.root).toBe(10);

    minHeap.add(100);
    expect(minHeap.root).toBe(10);

    minHeap.add(0);
    expect(minHeap.root).toBe(0);

    minHeap.add(200);
    expect(minHeap.root).toBe(0);

    minHeap.add(1);
    expect(minHeap.root).toBe(0);

    minHeap.add(1);
    expect(minHeap.root).toBe(0);

    minHeap.add(5);
    expect(minHeap.root).toBe(0);

    minHeap.add(3);
    expect(minHeap.root).toBe(0);

    minHeap.add(1);
    expect(minHeap.root).toBe(0);

    // REMOVE
    minHeap.remove();
    expect(minHeap.root).toBe(1);

    minHeap.remove();
    expect(minHeap.root).toBe(1);

    minHeap.remove();
    expect(minHeap.root).toBe(1);

    minHeap.remove();
    expect(minHeap.root).toBe(3);

    minHeap.remove();
    expect(minHeap.root).toBe(5);

    minHeap.remove();
    expect(minHeap.root).toBe(10);

    minHeap.remove();
    expect(minHeap.root).toBe(15);

    minHeap.remove();
    expect(minHeap.root).toBe(20);

    minHeap.remove();
    expect(minHeap.root).toBe(20);

    minHeap.remove();
    expect(minHeap.root).toBe(30);

    minHeap.remove();
    expect(minHeap.root).toBe(100);

    minHeap.remove();
    expect(minHeap.root).toBe(200);
  });
});
