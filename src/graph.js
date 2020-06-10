const createList = content => {
  const list = {};
  content.forEach(pair => {
    if (!list[pair[0]]) list[pair[0]] = [pair[1]];
    else list[pair[0]].push(pair[1]);
  });
  return list;
};

const bfs = (pairs, source, target) => {
  const adjacentList = createList(pairs);
  const visitedList = [];
  const queue = [];
  queue.push(source);
  while (queue.length != 0) {
    const currentPath = queue.shift();
    if (currentPath === target) return true;
    visitedList.push(currentPath);
    adjacentList[currentPath].forEach(path => {
      if (!visitedList.includes(path) && !queue.includes(path))
        queue.push(path);
    });
  }
  return false;
};

module.exports = { bfs };
