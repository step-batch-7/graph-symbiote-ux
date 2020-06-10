const fs = require('fs');
const {bfs} = require('./src/graph');

const main = () => {
  const data = fs.readFileSync('./data.txt', 'utf8').split('\n');
  const pairs = data.map(e => e .split('|') .map(e => e.trim()) .splice(1, 2) );
  const result = bfs(pairs,'ee','mm');
  console.log(result);
};

main();
