// 先序遍历
function preOrder(root) {
  if (!root) return
  var cur1 = root;
  var cur2 = null;
  var res = []
  while (cur1) {
    cur2 = cur1.left
    // 有左子树
    if (cur2) {
      //遍历左子树上的最右指针
      while (cur2.right && cur2.right != cur1) {
        cur2 = cur2.right
      }
      //最右指针为空(第一次访问)
      if (cur2.right == null) {
        cur2.right = cur1;
        // 先序遍历打印位置
        res.push(cur1.val)
        cur1 = cur1.left;
      } else {
        cur2.right = null;
      }
    } else {
      //没有左子树向右移动(没有左子树的节点只遇到自己一次,这时候直接打印)
      // 先序遍历打印位置
      res.push(cur1.val)
      cur1 = cur1.right;
    }

  }
}
// 中序遍历
function inOrder(root) {
  if (!root) return
  var cur1 = root;
  var cur2 = null;
  var res = []
  while (cur1) {
    cur2 = cur1.left
    // 有左子树
    if (cur2) {
      //遍历左子树上的最右指针
      while (cur2.right && cur2.right != cur1) {
        cur2 = cur2.right
      }
      //最右指针为空
      if (cur2.right == null) {
        cur2.right = cur1;
        cur1 = cur1.left;
      } else {
        cur2.right = null;
      }
    }
    //没有左子树向右移动
    // 中序遍历打印位置
    res.push(cur1.val)
    cur1 = cur1.right;
  }
}