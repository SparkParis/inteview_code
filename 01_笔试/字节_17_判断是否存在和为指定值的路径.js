/**
 * 给一棵二叉树 和 一个值，检查二叉树中的是否存在一条路径
 * ，这条路径上所有节点的值加起来等于给的那个初始值。
 * 例如，对于下面的二叉树，如果初始值是 22，
 * 那么存在一条路径 5->4->11->2
 */
function Node(data) {
  this.val = data;
  this.left = null;
  this.right = null;
}
function hasPath(root, target) {
  if (!root) return false;
  var sum = 0;
  return backPath(root, sum, target);
}
function backPath(node, sum, target) {
  sum += node.val;
  if (!node.left && !node.right && sum == target) {
    return true;
  }
  if (node.left) {
    backPath(node.left, sum, target)
  }
  if (node.right) {
    backPath(node.right, sum, target);
  }
}
