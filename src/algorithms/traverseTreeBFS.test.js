const traverseTreeBFS = require('./traverseTreeBFS');
const AVLTree = require('../structures/avl-tree');

describe('traverseTreeBFS test', () => {
  const tree = new AVLTree();

  tree.root = tree.insert(tree.root, 56);
  tree.root = tree.insert(tree.root, 23);
  tree.root = tree.insert(tree.root, 80);
  tree.root = tree.insert(tree.root, 90);
  tree.root = tree.insert(tree.root, 105);
  tree.root = tree.insert(tree.root, 12);
  tree.root = tree.insert(tree.root, 0);
  tree.root = tree.insert(tree.root, 10);
  tree.root = tree.insert(tree.root, 1);
  tree.root = tree.insert(tree.root, 9);
  tree.root = tree.insert(tree.root, 8);

  tree.print();

  it('Level Order Traversal', () => {
    const bfs = [];
    traverseTreeBFS(tree.root, node => bfs.push(node.v));
    expect(bfs).toEqual([10, 1, 56, 0, 9, 12, 90, 8, 23, 80, 105]);
  });
});
