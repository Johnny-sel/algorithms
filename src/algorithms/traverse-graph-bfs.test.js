const Graph = require('../structures/graph');
const traverseGraphBFS = require('./traverse-graph-bfs');

describe('traverseGraphBFS tests', () => {
  const graph = new Graph();

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

  graph.addRelation(user3, user1);
  graph.addRelation(user3, user7);

  console.log('\ntraverseGraphBFS Graph:', graph.relations);

  it('traverseGraphBFS from 1', () => {
    const order = [];
    traverseGraphBFS(graph, user1, user => order.push(user));
    expect(order).toEqual([user1, user2, user3, user4, user5, user6, user7]);
  });
  it('traverseGraphBFS from 2', () => {
    const order = [];
    traverseGraphBFS(graph, user2, user => order.push(user));
    expect(order).toEqual([user2, user1, user4, user5, user6, user3, user7]);
  });
  it('traverseGraphBFS from 3', () => {
    const order = [];
    traverseGraphBFS(graph, user3, user => order.push(user));
    expect(order).toEqual([user3, user1, user7, user2, user4, user5, user6]);
  });
  it('traverseGraphBFS from 4', () => {
    const order = [];
    traverseGraphBFS(graph, user4, user => order.push(user));
    expect(order).toEqual([user4, user1, user2, user3, user5, user6, user7]);
  });
  it('traverseGraphBFS from 5', () => {
    const order = [];
    traverseGraphBFS(graph, user5, user => order.push(user));
    expect(order).toEqual([user5, user2, user1, user4, user6, user3, user7]);
  });
  it('traverseGraphBFS from 6', () => {
    const order = [];
    traverseGraphBFS(graph, user6, user => order.push(user));
    expect(order).toEqual([user6, user2, user1, user4, user5, user3, user7]);
  });
  it('traverseGraphBFS from 7', () => {
    const order = [];
    traverseGraphBFS(graph, user7, user => order.push(user));
    expect(order).toEqual([user7, user3, user1, user2, user4, user5, user6]);
  });
});
