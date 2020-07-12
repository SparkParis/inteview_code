// 节点定义
function Node(data) {
  this.val = data;
  this.left = null;
  this.right = null;
}
// 递归
function postOrder(root, arr = []) {
  if (root) {
    postOrder(root.left, arr);
    postOrder(root.right, arr);
    arr.push(root.val);
  }
  return arr
}
// 非递归实现:方案1:通过先序遍历转化出栈顺序中右左,入栈逆序转化出栈顺序左右中
function postOrder1(root) {
  if (!root) return null
  var stack1 = []
  var stack2 = []
  stack1.push(root)
  while (stack1.length) {
    var cur = stack1.pop();
    stack2.push(cur);//这里通过stack2逆序暂存,最后输出stack2中的顺序就是后序遍历的顺序
    //注意这里是左子树先入栈
    if (cur.left) {
      stack1.push(cur.left)
    }
    if (cur.right) {
      stack1.push(cur.right);
    }
  }
  //stack2中的出栈顺序就是后序遍历
  var res = []
  while (stack2.length) {
    res.push(stack2.pop())
  }
  return res;
}
// 方案2:通过一个栈实现,借助两个指针h:记录上一个遍历过的节点,cur表示当前节点
function postOrder2(root) {
  if (!root) return null;
  var h = root;
  var cur = null;
  var stack = [];
  stack.push(h);
  var res = []
  while (stack.length) {
    //取出栈顶元素
    cur = stack[stack.length - 1]
    //表示还未开始打印直接进站
    if (cur.left && cur.left != h && cur.right != h) {
      stack.push(cur.left);
    } else if (cur.right && cur.right != h) {
      stack.push(cur.right);
    } else {
      res.push(cur.val);
      //此时将h指向遍历过的节点
      h = cur;
    }
  }
}