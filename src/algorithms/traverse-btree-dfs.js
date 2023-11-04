function traverseTreeDFS(method, node, callback) {
  if (method === 'preOrder') {
    return preOrder(node, callback);
  }

  if (method === 'inOrder') {
    return inOrder(node, callback);
  }

  return postOrder(node, callback);
}

function preOrder(node, callback) {
  if (!node) {
    return;
  }

  callback(node);
  preOrder(node.l, callback);
  preOrder(node.r, callback);
}

function inOrder(node, callback) {
  if (!node) {
    return;
  }

  inOrder(node.l, callback);
  callback(node);
  inOrder(node.r, callback);
}

function postOrder(node, callback) {
  if (!node) {
    return;
  }

  postOrder(node.l, callback);
  postOrder(node.r, callback);
  callback(node);
}

module.exports = traverseTreeDFS;
