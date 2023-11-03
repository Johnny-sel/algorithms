function traverseTreeBFS(node, callback) {
  const queue = [node];

  while (queue.length > 0) {
    const node = queue.shift();
    callback(node);

    if (node.l) {
      queue.push(node.l);
    }

    if (node.r) {
      queue.push(node.r);
    }
  }
}

module.exports = traverseTreeBFS;
