function traverseGraphBFS(graph, user, cb) {
  const visited = new Map();
  const queue = [];

  visited.set(user, true);
  queue.push(user);

  while (queue.length > 0) {
    const user = queue.shift();
    const friends = graph.relations.get(user);

    for (let i = 0; i < friends?.length; i++) {
      const friend = friends[i];

      if (!visited.get(friend)) {
        visited.set(friend, true);
        queue.push(friend);
      }
    }

    cb(user);
  }
}

module.exports = traverseGraphBFS;
