// 节点定义
function Node(data) {
  this.val = data;
  this.left = null;
  this.right = null;
}
// 递归实现
function preOrder(root, arr = []) {
  if (root) {
    arr.push(root.val);
    preOrder(root.left, arr);
    preOrder(root.right, arr)
  }
  return arr;
}

// 非递归实现
function preOrder2(root) {
  if (root) {
    var stack = [];
    var res = []
    stack.push(root);
    while (stack.length) {
      var cur = stack.pop();
      res.push(cur.val);
      //右子树先栈(后出栈)
      if (cur.right) {
        stack.push(cur.right);
      }
      //左子树入栈
      if (cur.left) {
        stack.push(cur.left)
      }
    }
    return res
  }
  return null

}