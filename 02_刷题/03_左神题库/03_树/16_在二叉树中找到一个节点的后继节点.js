// 中序遍历,根据定制的规则进行判断
function Node(data) {
  this.val = data;
  this.left = null;
  this.right = null;
  this.parent = null;
}
// 求的是任意节点的后继节点
function getNextNode(node) {
  if (!node) {
    return node;
  }
  if (node.right) {
    //如果右子树存在,==右子树的左边界的值
    return getLeftMost(node.right);
  } else {
    //没有右孩子,通过parent查找(node的父节点存在,并且父节点的左孩子不等于当前节点继续向上递归遍历)
    while (node.parent != null && node.parent.left != node) {
      node = node.parent;
    }
    return node.parent;
  }
}
// 获取节点的最左边界的节点
function getLeftMost(node) {
  if (!node) return node;
  while (node.left) {
    node = node.left
  }
  return node
}