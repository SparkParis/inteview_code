// 节点定义
function Node(data) {
  this.val = data;
  this.left = null;
  this.right = null;
}
// 递归
function inOrder(root, arr = []) {
  if (root) {
    inOrder(root.left, arr);
    arr.push(root.val);
    inOrder(root.right, arr);
  }
  return arr
}
// 非递归实现
function inOrder2(root) {
  if (!root) return null
  var stack = [];
  var res = [];
  var head = root;
  while (stack.length || head) {
    if (head) {//遍历左边界
      //当前节点存在入栈,head=head.left
      stack.push(head);
      head = head.left;
    } else {
      head = stack.pop();//head指向栈顶元素
      res.push(head.val);
      if (head.right) {//栈顶元素有右子树入栈,head指向head.right,继续遍历左边界
        stack.push(head.right);
        head = head.right;
      }
    }
  }
  return res
}