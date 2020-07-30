function TrieNode() {
  this.path = 0;
  this.end = 0;
  this.map = new Array(26).fill(null);
}
function Tree() {
  this.root = new TrieNode();
}
Tree.prototype.insert = function (word) {
  if (word == '') return
  var s = word.match(/./g);
  var node = this.root;
  var index = 0;
  for (var i = 0; i < s.length; i++) {
    index = s[i].charCodeAt() - 'a'.charCodeAt();//转化为unicode编码
    if (node.map[index] == null) {
      node.map[index] = new TrieNode();
    }
    node = node.map[index];
    node.path++;
  }
  node.end++;
}
Tree.prototype.search = function (word) {
  if (word == null) return false;
  var s = word.match(/./g);
  var curNode = this.root;
  var index = 0;
  for (var i = 0; i < s.length; i++) {
    index = s[i].charCodeAt() - 'a'.charCodeAt();
    if (curNode.map[index] == null) {
      return false;
    }
    curNode = curNode.map[index];
  }
  return curNode.end != 0;//大于0表示该节点有结尾的字符串
}
Tree.prototype.delete = function (word) {
  if (this.search(word)) {
    var s = word.match(/./g);
    var node = this.root;
    var index = 0;
    for (var i = 0; i < s.length; i++) {
      index = s[i].charCodeAt() - 'a'.charCodeAt();
      if (node.map[index].path-- == 1) {//这里是先判断在--,最后一个元素了直接将当前节点的该位置置空
        node.map[index] = null;
        return
      }
      node = node.map[index];
    }
    node.end--;
  }
}
Tree.prototype.preficNumber = function (pre) {
  if (pre == null) {
    return 0;
  }
  var s = pre.match(/./g);
  var node = this.root;
  var index = 0;
  for (var i = 0; i < s.length; i++) {
    index = s[i].charCodeAt() - 'a'.charCodeAt();
    if (node.map[index] == null) {
      return 0;
    }
    node = node.map[index];
  }
  return node.path
}
var tree = new Tree();
tree.insert('hello');
tree.insert('world');
tree.insert('hekk');
tree.insert('hekk');
console.log(tree.search('hello'));
// console.log(tree.delete('hello'));
// console.log(tree.search('hello'));
console.log(tree.preficNumber('he'));
