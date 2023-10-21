const DoubleLinkedList = require('./double-linked-list.js');

describe('Double linked list test: ', () => {
  let list = undefined;

  beforeEach(() => {
    list = new DoubleLinkedList();

    Array.from(Array(10).keys()).forEach(number => list.addToEnd(number));
  });

  it('init for test', () => {
    expect(list.size).toBe(10);
    expect(list.toString()).toBe('0,1,2,3,4,5,6,7,8,9');
  });

  it('add to begin', () => {
    list.removeAll();

    list.addToBegin(0);
    expect(list.size).toBe(1);
    expect(list.toString()).toBe('0');

    list.addToBegin(1);
    expect(list.size).toBe(2);
    expect(list.toString()).toBe('1,0');

    list.addToBegin(2);
    expect(list.size).toBe(3);
    expect(list.toString()).toBe('2,1,0');
  });

  it('add to end', () => {
    list.removeAll();

    list.addToEnd(0);
    expect(list.size).toBe(1);
    expect(list.toString()).toBe('0');

    list.addToEnd(1);
    expect(list.size).toBe(2);
    expect(list.toString()).toBe('0,1');

    list.addToEnd(2);
    expect(list.size).toBe(3);
    expect(list.toString()).toBe('0,1,2');
  });

  it('add by index', () => {
    list.removeAll();

    list.addByIndex(0, 0);
    expect(list.size).toBe(1);
    expect(list.toString()).toBe('0');

    list.addByIndex(1, 1);
    expect(list.size).toBe(2);
    expect(list.toString()).toBe('0,1');

    list.addByIndex(2, 2);
    expect(list.size).toBe(3);
    expect(list.toString()).toBe('0,1,2');

    list.addByIndex(4, 0);
    expect(list.size).toBe(4);
    expect(list.toString()).toBe('4,0,1,2');

    list.addByIndex(5, 5);
    expect(list.size).toBe(5);
    expect(list.toString()).toBe('4,0,1,2,5');

    list.addByIndex(3, 4);
    expect(list.size).toBe(6);
    expect(list.toString()).toBe('4,0,1,2,3,5');

    list.addByIndex(100, 100);
    expect(list.size).toBe(7);
    expect(list.toString()).toBe('4,0,1,2,3,5,100');

    list.addByIndex(99, 1);
    expect(list.size).toBe(8);
    expect(list.toString()).toBe('4,99,0,1,2,3,5,100');
  });

  it('remove from begin', () => {
    list.removeFromBegin();
    expect(list.size).toBe(9);
    expect(list.toString()).toBe('1,2,3,4,5,6,7,8,9');

    list.removeFromBegin();
    expect(list.size).toBe(8);
    expect(list.toString()).toBe('2,3,4,5,6,7,8,9');
  });

  it('remove from end', () => {
    list.removeFromEnd();
    expect(list.size).toBe(9);
    expect(list.toString()).toBe('0,1,2,3,4,5,6,7,8');

    list.removeFromEnd();
    expect(list.size).toBe(8);
    expect(list.toString()).toBe('0,1,2,3,4,5,6,7');
  });

  it('removeByIndex', () => {
    list.removeByIndex(0);
    expect(list.size).toBe(9);
    expect(list.toString()).toBe('1,2,3,4,5,6,7,8,9');

    list.removeByIndex(8);
    expect(list.size).toBe(8);
    expect(list.toString()).toBe('1,2,3,4,5,6,7,8');

    list.removeByIndex(3);
    expect(list.size).toBe(7);
    expect(list.toString()).toBe('1,2,3,5,6,7,8');

    list.removeByIndex(100);
    expect(list.size).toBe(6);
    expect(list.toString()).toBe('1,2,3,5,6,7');

    list.removeAll();
    list.removeByIndex(3);
    expect(list.size).toBe(0);
    expect(list.toString()).toBe('');
  });

  it('get by value', () => {
    expect(list.getByValue(0).toString()).toBe('0');
    expect(list.getByValue(1).toString()).toBe('1');
    expect(list.getByValue(2).toString()).toBe('2');
    expect(list.getByValue(3).toString()).toBe('3');
    expect(list.getByValue(4).toString()).toBe('4');
    expect(list.getByValue(5).toString()).toBe('5');
    expect(list.getByValue(6).toString()).toBe('6');
    expect(list.getByValue(7).toString()).toBe('7');
    expect(list.getByValue(8).toString()).toBe('8');
    expect(list.getByValue(9).toString()).toBe('9');
  });

  it('get by index', () => {
    expect(list.getByIndex(0).toString()).toBe('0');
    expect(list.getByIndex(1).toString()).toBe('1');
    expect(list.getByIndex(2).toString()).toBe('2');
    expect(list.getByIndex(3).toString()).toBe('3');
    expect(list.getByIndex(4).toString()).toBe('4');
    expect(list.getByIndex(5).toString()).toBe('5');
    expect(list.getByIndex(6).toString()).toBe('6');
    expect(list.getByIndex(7).toString()).toBe('7');
    expect(list.getByIndex(8).toString()).toBe('8');
    expect(list.getByIndex(9).toString()).toBe('9');
  });
});
