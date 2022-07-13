const bfs = function (graph, Start) {
    var queue = [];
    queue.push(Start);
    var visited = [];
    visited[Start] = true;
    var distances = [];
    distances[Start] = 0;
    while (queue.length > 0) {
        console.log("Visited nodes: " + visited);
        console.log("Distances: " + distances);
        var node = queue.shift();
        console.log("Removing node " + node + " from the queue...");
        for (var j = 1; j < graph[node].length; j++) {
            if (graph[node][j] && !visited[j]) {
                visited[j] = true;
                distances[j] = distances[node] + 1;
                queue.push(j);
                console.log("Visiting node " + j + ", setting its distance to " + distances[j] + " and adding it to the queue");

            }
        }
    }
    console.log("No more nodes in the queue. Distances: " + distances);
    return distances;
};

module.exports = {bfs};
