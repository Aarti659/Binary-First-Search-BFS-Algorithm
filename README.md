# Binary-First-Search-BFS-Algorithm


#include <iostream>
#include <stdlib.h>
#include <list>

using namespace std;

class Gr {
  int numVertices;
  list<int>* adjLi;
  bool* visited;

   public:
  Gr(int vertices);
  void addEdge(int src, int dest);
  void BFS(int startVertex);
};


Gr::Gr(int vertices) {
  numVertices = vertices;
  adjLi = new list<int>[vertices];
}


void Gr::addEdge(int src, int dest) {
  adjLi[src].push_back(dest);
  adjLi[dest].push_back(src);
}


void Gr::BFS(int startVertex) {
  visited = new bool[numVertices];
  for (int i = 0; i < numVertices; i++)
    visited[i] = false;

  list<int> queue;

  visited[startVertex] = true;
  queue.push_back(startVertex);

  list<int>::iterator i;

  while (!queue.empty()) {
    int currVertex = queue.front();
    cout << "Visited " << currVertex << " ";
    queue.pop_front();

    for (i = adjLi[currVertex].begin(); i != adjLi[currVertex].end(); ++i) {
      int adjVertex = *i;
      if (!visited[adjVertex]) {
        visited[adjVertex] = true;
        queue.push_back(adjVertex);
      }
    }
  }
}

int main() {
  Gr g(4);
  g.addEdge(0, 1);
  g.addEdge(0, 2);
  g.addEdge(1, 2);
  g.addEdge(2, 0);
  g.addEdge(2, 3);
  g.addEdge(3, 3);

  g.BFS(2);

  return 0;
}
