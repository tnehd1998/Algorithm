// My Answer

class MyGraph {
  constructor() {
    this.numberOfNodes = 0;
    this.adjacentList = {};
  }

  addVertex(node) {
    this.adjacentList[node] = [];
    this.numberOfNodes++;
  }

  addEdge(node1, node2) {
    // Undirected Graph
    this.adjacentList[node1].push(node2);
    this.adjacentList[node2].push(node1);
  }

  showConnections() {
    const allNodes = Object.keys(this.adjacentList);
    for (let node of allNodes) {
      let nodeConnections = this.adjacentList[node];
      let connections = "";
      let vertex;
      for (vertex of nodeConnections) {
        connections += vertex + " ";
      }
      console.log(node + "-->" + connections);
    }
  }
}

// Solution Code

class Graph {
  constructor() {
    this.numberOfNodes = 0;
    this.adjacentList = {};
  }

  addVertex(node) {
    this.adjacentList[node] = [];
    this.numberOfNodes++;
  }

  addEdge(node1, node2) {
    // Undirected Graph
    this.adjacentList[node1].push(node2);
    this.adjacentList[node2].push(node1);
  }

  showConnections() {
    const allNodes = Object.keys(this.adjacentList);
    for (let node of allNodes) {
      let nodeConnections = this.adjacentList[node];
      let connections = "";
      let vertex;
      for (vertex of nodeConnections) {
        connections += vertex + " ";
      }
      console.log(node + "-->" + connections);
    }
  }
}

const myGraph = new MyGraph();
myGraph.addVertex("0");
myGraph.addVertex("1");
myGraph.addVertex("2");
myGraph.addVertex("3");
myGraph.addVertex("4");
myGraph.addVertex("5");
myGraph.addVertex("6");
myGraph.addEdge("3", "1");
myGraph.addEdge("3", "4");
myGraph.addEdge("4", "2");
myGraph.addEdge("4", "5");
myGraph.addEdge("1", "2");
myGraph.addEdge("1", "0");
myGraph.addEdge("0", "2");
myGraph.addEdge("6", "5");
myGraph.showConnections();

const myGraph2 = new Graph();
myGraph2.addVertex("0");
myGraph2.addVertex("1");
myGraph2.addVertex("2");
myGraph2.addVertex("3");
myGraph2.addVertex("4");
myGraph2.addVertex("5");
myGraph2.addVertex("6");
myGraph2.addEdge("3", "1");
myGraph2.addEdge("3", "4");
myGraph2.addEdge("4", "2");
myGraph2.addEdge("4", "5");
myGraph2.addEdge("1", "2");
myGraph2.addEdge("1", "0");
myGraph2.addEdge("0", "2");
myGraph2.addEdge("6", "5");
myGraph2.showConnections();
