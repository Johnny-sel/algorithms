const traverseTreeDFS = require('./traverse-btree-dfs');
const AVLTree = require('../structures/avl-tree');

describe('traverseDFS tests', () => {
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

  it('preOrder', () => {
    const preOrder = [];
    traverseTreeDFS('preOrder', tree.root, node => preOrder.push(node.v));
    expect(preOrder).toEqual([10, 1, 0, 9, 8, 56, 12, 23, 90, 80, 105]);
  });
  it('inOrder', () => {
    const inOrder = [];
    traverseTreeDFS('inOrder', tree.root, node => inOrder.push(node.v));
    expect(inOrder).toEqual([0, 1, 8, 9, 10, 12, 23, 56, 80, 90, 105]);
  });
  it('postOrder', () => {
    const postOrder = [];
    traverseTreeDFS('postOrder', tree.root, node => postOrder.push(node.v));
    expect(postOrder).toEqual([0, 8, 9, 1, 23, 12, 80, 105, 90, 56, 10]);
  });
});
