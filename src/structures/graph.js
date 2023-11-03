class Graph {
  constructor() {
    this.relations = new Map();
  }

  addRelation(item1, item2) {
    const prev1 = this.relations.get(item1) || [];
    const prev2 = this.relations.get(item2) || [];
    this.relations.set(item1, [...prev1, item2]);
    this.relations.set(item2, [...prev2, item1]);
  }
}

module.exports = Graph;
