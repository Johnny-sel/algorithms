const Graph = require('./graph');

describe('Graph', () => {
  const graph = new Graph();
  it('addRelation test', () => {
    const user1 = {id: '1'};
    const user2 = {id: '2'};
    const user3 = {id: '3'};
    const user4 = {id: '4'};
    const user5 = {id: '5'};
    const user6 = {id: '6'};
    const user7 = {id: '7'};

    graph.addRelation(user1, user2);
    graph.addRelation(user1, user3);
    graph.addRelation(user1, user4);

    graph.addRelation(user2, user4);
    graph.addRelation(user2, user5);
    graph.addRelation(user2, user6);

    graph.addRelation(user3, user7);

    expect(graph.relations.get(user1)).toEqual([user2, user3, user4]);
    expect(graph.relations.get(user2)).toEqual([user1, user4, user5, user6]);
    expect(graph.relations.get(user3)).toEqual([user1, user7]);
    expect(graph.relations.get(user4)).toEqual([user1, user2]);
    expect(graph.relations.get(user5)).toEqual([user2]);
    expect(graph.relations.get(user6)).toEqual([user2]);
    expect(graph.relations.get(user7)).toEqual([user3]);
  });
});
