// 序列化实现
function serialze(root, arr = []) {
  if (!root) {
    return '#'
  } else {
    arr.push(root.val);
    serialze(root.left, arr);
    serialze(root.right, arr);
  }
  return arr.join(',')
}
// 反序列化
function Deserialize(s) {
  if (!s) return null;
  return deserialize(s.split(','));
}
function deserialize(arr) {
  var node = null;
  var cur = arr.shift();
  if (cur !== '#') {
    node = new Node(cur);
    node.left = deserialize(arr);
    node.right = deserialize(arr);
  }
  return node
}
