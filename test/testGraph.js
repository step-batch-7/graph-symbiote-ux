const { assert } = require('chai');
const { bfs } = require('../src/graph');

describe('bfs', () => {
  it('should return true when single node connected to itself', () => {
    const pairs = [
      ['a', 'b'],
      ['b', 'a']
    ];
    assert.isTrue(bfs(pairs, 'a', 'a'));
  });
  it('should return false  when single node not connected to itself', () => {
    const pairs = [
      ['a', 'b'],
      ['b', 'c']
    ];
    assert.isFalse(bfs(pairs, 'a', 'a'));
  });
  it('should return true when two nodes are connected', () => {
    const pairs = [
      ['a', 'b'],
      ['b', 'c'],['c','a']
    ];
    assert.isTrue(bfs(pairs, 'a', 'c'));
  });
  it('should return false when two nodes are not connected', () => {
    const pairs = [
      ['a', 'b'],
      ['b', 'd'],
      ['c', 'e'],
      ['a','d']
    ];
    assert.isFalse(bfs(pairs, 'a', 'c'));
  });
   it('should return false when nodes has no edges', () => {
     const pairs = [
       ['a', 'b'],
       ['b', 'c'],
     ];
     assert.isFalse(bfs(pairs, 'c', 'a'));
   });
});
