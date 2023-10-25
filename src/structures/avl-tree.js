const h = node => node?.h || 0;

class Node {
  constructor(value) {
    this.v = value;
    this.l = null;
    this.r = null;
    this.h = 1;
  }
}

class AVLTree {
  constructor() {
    this.root = null;
    this.asc = [];
    this.desc = [];
  }

  getDiffHeight(node) {
    return h(node?.l) - h(node?.r);
  }

  getNodeWithMinValue(tree) {
    let currentNode = tree;
    while (currentNode.l !== null) {
      currentNode = currentNode.l;
    }
    return currentNode;
  }

  rightRotate(node) {
    let leftSubtree = node.l;
    let rightSubtreeOfLeftSubtree = leftSubtree.r;

    leftSubtree.r = node;
    node.l = rightSubtreeOfLeftSubtree;

    node.h = Math.max(h(node.l), h(node.r)) + 1;
    leftSubtree.h = Math.max(h(leftSubtree.l), h(leftSubtree.r)) + 1;

    return leftSubtree;
  }

  leftRotate(node) {
    let rightSubtree = node.r;
    let leftSubTreeOfRightSubtree = rightSubtree.l;

    rightSubtree.l = node;
    node.r = leftSubTreeOfRightSubtree;

    node.h = Math.max(h(node.l), h(node.r)) + 1;
    rightSubtree.h = Math.max(h(rightSubtree.l), h(rightSubtree.r)) + 1;

    return rightSubtree;
  }

  insert(node, value) {
    if (node === null) {
      return new Node(value);
    }

    if (value < node.v) {
      node.l = this.insert(node.l, value);
    } else if (value > node.v) {
      node.r = this.insert(node.r, value);
    } else {
      throw 'Duplicate values not allowed';
    }

    node.h = Math.max(h(node.l), h(node.r)) + 1;
    const diffHeight = this.getDiffHeight(node);

    if (diffHeight > 1) {
      if (value < node.l.v) {
        return this.rightRotate(node);
      }

      if (value > node.l.v) {
        node.l = this.leftRotate(node.l);
        return this.rightRotate(node);
      }
    }

    if (diffHeight < -1) {
      if (value > node.r.v) {
        return this.leftRotate(node);
      }

      if (value < node.r.v) {
        node.r = this.rightRotate(node.r);
        return this.leftRotate(node);
      }
    }

    return node;
  }

  delete(node, value) {
    if (node === null) {
      return node;
    }

    if (value < node.v) {
      node.l = this.delete(node.l, value);
    } else if (value > node.v) {
      node.r = this.delete(node.r, value);
    } else {
      if (node.l === null || node.r === null) {
        node = node.l || node.r;
      } else {
        let nodeWithMinValue = this.getNodeWithMinValue(node.r);
        node.v = nodeWithMinValue.v;
        node.r = this.delete(node.r, nodeWithMinValue.v);
      }
    }

    if (node === null) {
      return node;
    }

    node.h = Math.max(h(node.l), h(node.r)) + 1;
    const diffHeight = this.getDiffHeight(node);

    if (diffHeight > 1) {
      if (this.getDiffHeight(node.l) >= 0) {
        return this.rightRotate(node);
      }

      if (this.getDiffHeight(node.l) < 0) {
        node.l = this.leftRotate(node.l);
        return this.rightRotate(node);
      }
    }

    if (diffHeight < -1) {
      if (this.getDiffHeight(node.r) <= 0) {
        return this.leftRotate(node);
      }

      if (this.getDiffHeight(node.r) > 0) {
        node.r = this.rightRotate(node.r);
        return this.leftRotate(node);
      }
    }

    return node;
  }

  isBalance(tree) {
    const stack = [tree];

    while (stack.length > 0) {
      const node = stack.pop();

      if (this.getDiffHeight(node) > 1) {
        return false;
      }

      if (node?.l) {
        stack.push(node.l);
      }

      if (node?.r) {
        stack.push(node.r);
      }
    }

    return true;
  }

  sort(sortBy) {
    if (sortBy === 'asc') {
      const sortAcs = node => {
        if (node != null) {
          sortAcs(node.l);
          this.asc.push(node.v);
          sortAcs(node.r);
        }
        return this.asc;
      };

      this.asc = [];
      return sortAcs(this.root);
    }

    if (sortBy === 'desc') {
      const sortDesc = node => {
        if (node != null) {
          sortDesc(node.r);
          this.desc.push(node.v);
          sortDesc(node.l);
        }
        return this.desc;
      };

      this.desc = [];
      return sortDesc(this.root);
    }
  }

  print() {
    if (this.root === null) {
      console.log('Дерево пусто');
      return;
    }

    const lines = this.printTree(this.root, '', true);
    console.log(lines.join('\n'));
  }

  printTree(node, prefix, isTail) {
    if (node === null) {
      return [];
    }

    const nodeStr = `${prefix}${isTail ? '└── ' : '├── '}${node.v}`;
    const lines = [nodeStr];
    const children = [];

    if (node.l !== null || node.r !== null) {
      const str = `${prefix}${isTail ? '    ' : '│   '}`;
      if (node.l !== null) {
        children.push(this.printTree(node.l, str, false));
      }
      if (node.r !== null) {
        children.push(this.printTree(node.r, str, true));
      }
    }

    for (let i = 0; i < children.length; i++) {
      lines.push(...children[i]);
    }

    return lines;
  }
}

function main() {
  const tree = new AVLTree();

  let i = 100;
  while (i--) {
    tree.root = tree.insert(tree.root, i);
  }
  tree.print(tree.root);
  console.log('------------------------------------------');

  // i = 250;
  // while (i--) {
  //   tree.root = tree.delete(tree.root, i);
  // }
  // tree.print(tree.root);
  // console.log('------------------------------------------');

  console.log('sortAcs: ', tree.sort('asc'));
  console.log('sortDesc: ', tree.sort('desc'));
  console.log('is balance', tree.isBalance());

}

main();

// module.exports = AVLTree;
