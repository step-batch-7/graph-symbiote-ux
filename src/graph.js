const isNotVisited = (path, visitedList, queue) => {
  const isInVisitedList = visitedList.includes(path);
  const isInQueue = queue.includes(path);
  return !isInVisitedList && !isInQueue;
};

const addToQueue = (children, visitedList, queue) => {
  if (children) {
    children.forEach(path => {
      if (isNotVisited(path, visitedList, queue)) queue.push(path);
    });
  }
};

const createList = content => {
  const list = {};
  content.forEach(pair => {
    const from = pair[0];
    const to = pair[1];
    if (!list[from]) list[from] = [to];
    else list[from].push(to);
  });
  return list;
};

const bfs = (pairs, source, target) => {
  const adjacentList = createList(pairs);
  const visitedList = [];
  const queue = [];
  addToQueue(adjacentList[source], visitedList, queue);
  while (queue.length != 0) {
    const currentPath = queue.shift();
    if (currentPath === target) return true;
    visitedList.push(currentPath);
    addToQueue(adjacentList[currentPath], visitedList, queue);
  }
  return false;
};

module.exports = { bfs };
