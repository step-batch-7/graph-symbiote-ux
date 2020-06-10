const fs = require('fs');
const {bfs} = require('./src/graph');

const main = () => {
  const data = fs.readFileSync('./data.txt', 'utf8').split('\n');
  const content = data.map(e => e .split('|') .map(e => e.trim()) .splice(1, 2) );
  const result = bfs(content,'bb','jj');
  console.log(result);
};

main();
