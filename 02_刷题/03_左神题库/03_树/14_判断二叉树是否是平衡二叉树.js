// 判断一棵树是不是平衡二叉树
function isBalanced(root) {
  var res = new Array(1);
  res[0] = true;//注意这里传入的地址,不会改变
  getHeight(root, 1, res);
  return res[0]
}
/**
 * 
 * @param {当前节点} head 
 * @param {当前节点的层数} level 
 * @param {数组,res[0]保存true/false结果} res 
 */
function getHeight(head, level, res) {
  if (!head) {
    return level
  }
  var lH = getHeight(head.left, level + 1, res);
  if (!res[0]) {
    return level;
  }
  var rH = getHeight(head.right, level + 1, res)
  if (!res[0]) {
    return level
  }
  if (Math.abs(lH - rH) > 1) {
    res[0] = false;
  }
  return Math.max(lH, rH);
}