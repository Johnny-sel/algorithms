const Graph = require('../structures/graph');

function traverseGraphDFS(graph, user, cb) {
  const visited = new Map();

  const traverse = (user, visited) => {
    cb(user);
    visited.set(user, true);
    const friends = graph.relations.get(user);

    for (let i = 0; i < friends?.length; i++) {
      const friend = friends[i];
      if (!visited.get(friend)) {
        traverse(friend, visited);
      }
    }
  };

  traverse(user, visited);
}

module.exports = traverseGraphDFS;
