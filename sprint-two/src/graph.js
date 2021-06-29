

// Instantiate a new graph
var Graph = function() {
  this.values = [];
  this.connections = [];
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.values.push(node);
  this.connections.push([]);
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  return this.values.includes(node);
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  let nodeIndex = this.values.indexOf(node);
  if(nodeIndex !== -1) {
    this.values.splice(nodeIndex, 1);
    this.connections.splice(nodeIndex, 1);
  }

};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  let node1 = this.values.indexOf(fromNode);
  let node2 = this.values.indexOf(toNode);
  if(node1 === -1 || node2 === -1) {
    return false;
  }
  return this.connections[node1].includes(node2) ||
         this.connections[node2].includes(node1);
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  let node1 = this.values.indexOf(fromNode);
  let node2 = this.values.indexOf(toNode);
  if(node1 !== -1 && node2 !== -1) {
    this.connections[node1].push(node2);
    this.connections[node2].push(node1);
  }
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  let node1 = this.values.indexOf(fromNode);
  let node1Conn = this.connections[node1];
  let node2 = this.values.indexOf(toNode);
  let node2Conn = this.connections[node2];
  if(node1 !== -1 && node2 !== -1) {
    if(node1Conn.indexOf(node2) !== -1) { //contains connection to node 2
      node1Conn.splice(node1Conn.indexOf(node2), 1);
    }
    if(node2Conn.indexOf(node1) !== -1) { //contains connection to node 1
      node2Conn.splice(node2Conn.indexOf(node1), 1);
    }
  }
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for(let value of this.values) {
    value = cb(value);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


