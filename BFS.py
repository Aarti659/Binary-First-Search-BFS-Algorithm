graph = {
  'A' : ['B','C'],
  'B' : ['D', 'E'],
  'C' : ['F'],
  'D' : [],
  'E' : ['F'],
  'F' : []
}

visited1 = []
queue1 = []

def bre_firs_sear(visited1, graph, node):
  visited1.append(node)
  queue1.append(node)

  while queue1:
    s = queue1.pop(0)
    print (s, end = " ")

    for neighbour in graph[s]:
      if neighbour not in visited1:
        visited1.append(neighbour)
        queue1.append(neighbour)


bre_firs_sear(visited1, graph, 'A')









