function Node(data) {
  this.val = data;
  this.left = null;
  this.right = null;
}
// 后序遍历,要回到自己三次,并在递归回到自己三次的时候判断当前节点是否是最大搜索子树
function BiggestBST(root) {
  //定义数组存储信息,record[0]->size二叉搜索树的节点个数,record[1]->二叉搜索子树的最小值,record[2]->二叉搜索子树的最大值
  var record = new Array(3);
  return postOrder(root, record);
}
function postOrder(head, record) {
  if (!head) {
    record[0] = 0;
    record[1] = Number.MAX_VALUE;//给最小值赋值系统的最大值
    record[2] = Number.MIN_VALUE;//给最大值赋值系统的最小值
    return null;
  }
  //定义变量来保存值
  var value = head.val;
  var left = head.left;
  var right = head.right;
  var lBST = postOrder(left, record);
  var lSize = record[0];
  var lMax = record[1];
  var lMin = record[2];
  var rBST = postOrder(right, record);
  var rSize = record[0];
  var rMax = record[1];
  var rMin = record[2];
  record[1] = Math.min(lMin, value);
  record[2] = Math.max(rMax, value);
  //此时当前节点就是最大的搜索二叉子树
  if (left == lBST && right == rBST && lMax < value && rMin > value) {
    record[0] = lSize + rSize + 1;
    return head;
  }
  //如果不满足上述条件,此时的最大节点就是左右子树中size最大的值
  record[0] = Math.max(lSize, rSize);
  return lSize > rSize ? lBST : rBST;
}
