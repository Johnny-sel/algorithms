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

  insert(node, value) {
    if (node === null) {
      return new Node(value);
    }

    if (value < node.v) {
      node.l = this.insert(node.l, value);
    } else if (value > node.v) {
      node.r = this.insert(node.r, value);
    } else {
      throw new Error('Duplicate values not allowed');
    }

    node.h = Math.max(h(node.l), h(node.r)) + 1;
    const diffHeight = this._getDiffHeight(node);

    if (diffHeight > 1) {
      if (value < node.l.v) {
        return this._rightRotate(node);
      }

      if (value > node.l.v) {
        node.l = this._leftRotate(node.l);
        return this._rightRotate(node);
      }
    }

    if (diffHeight < -1) {
      if (value > node.r.v) {
        return this._leftRotate(node);
      }

      if (value < node.r.v) {
        node.r = this._rightRotate(node.r);
        return this._leftRotate(node);
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
        let nodeWithMinValue = this.min(node.r);
        node.v = nodeWithMinValue.v;
        node.r = this.delete(node.r, nodeWithMinValue.v);
      }
    }

    if (node === null) {
      return node;
    }

    node.h = Math.max(h(node.l), h(node.r)) + 1;
    const diffHeight = this._getDiffHeight(node);

    if (diffHeight > 1) {
      if (this._getDiffHeight(node.l) >= 0) {
        return this._rightRotate(node);
      }

      if (this._getDiffHeight(node.l) < 0) {
        node.l = this._leftRotate(node.l);
        return this._rightRotate(node);
      }
    }

    if (diffHeight < -1) {
      if (this._getDiffHeight(node.r) <= 0) {
        return this._leftRotate(node);
      }

      if (this._getDiffHeight(node.r) > 0) {
        node.r = this._rightRotate(node.r);
        return this._leftRotate(node);
      }
    }

    return node;
  }

  isBalance() {
    const stack = [this.root];

    while (stack.length > 0) {
      const node = stack.pop();
      const diffHeight = this._getDiffHeight(node);

      if (diffHeight > 1 || diffHeight < -1) {
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

  find(node, value) {
    if (!node) {
      return null;
    }

    if (value === node.v) {
      return node;
    }

    if (value < node.v) {
      return this.find(node.l, value);
    }

    if (value > node.v) {
      return this.find(node.r, value);
    }

    return null;
  }

  min(node) {
    if (node?.l) {
      return this.min(node.l);
    }
    return node;
  }

  max(node) {
    if (node?.r) {
      return this.max(node.r);
    }
    return node;
  }

  print() {
    if (this.root === null) {
      console.log('Tree is empty');
      return;
    }

    const lines = this._printTree(this.root, '', true);
    console.log(lines.join('\n'));
  }

  _getDiffHeight(node) {
    return h(node?.l) - h(node?.r);
  }

  _rightRotate(node) {
    let leftSubtree = node.l;
    let rightSubtreeOfLeftSubtree = leftSubtree.r;

    leftSubtree.r = node;
    node.l = rightSubtreeOfLeftSubtree;

    node.h = Math.max(h(node.l), h(node.r)) + 1;
    leftSubtree.h = Math.max(h(leftSubtree.l), h(leftSubtree.r)) + 1;

    return leftSubtree;
  }

  _leftRotate(node) {
    let rightSubtree = node.r;
    let leftSubTreeOfRightSubtree = rightSubtree.l;

    rightSubtree.l = node;
    node.r = leftSubTreeOfRightSubtree;

    node.h = Math.max(h(node.l), h(node.r)) + 1;
    rightSubtree.h = Math.max(h(rightSubtree.l), h(rightSubtree.r)) + 1;

    return rightSubtree;
  }

  _printTree(node, prefix, isTail) {
    if (node === null) {
      return [];
    }

    const nodeStr = `${prefix}${isTail ? '└── ' : '├── '}${node.v}`;
    const lines = [nodeStr];
    const children = [];

    if (node.l !== null || node.r !== null) {
      const str = `${prefix}${isTail ? '    ' : '│   '}`;
      if (node.l !== null) {
        children.push(this._printTree(node.l, str, false));
      }
      if (node.r !== null) {
        children.push(this._printTree(node.r, str, true));
      }
    }

    for (let i = 0; i < children.length; i++) {
      lines.push(...children[i]);
    }

    return lines;
  }
}

module.exports = AVLTree;
