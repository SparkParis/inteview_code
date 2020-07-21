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
        continue;//这里会跳出本次循环
      } else {
        cur2.right = null;
      }
    } else {
      //没有左子树向右移动(没有左子树的节点只遇到自己一次,这时候直接打印)
      // 先序遍历打印位置
      res.push(cur1.val)
    }
    //公共的
    cur1 = cur1.right;//注意这里的向右移动 在没有左子树和将右子树设置为空的情况下都执行

  }
  return res
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
      //最右指针为空,第一次遇到,
      if (cur2.right == null) {
        cur2.right = cur1;
        cur1 = cur1.left;//向左移动
        continue;//跳出本次循环执行下次循环
      } else {
        cur2.right = null;//将第二次访问将右子树设置为空,同时向右移动(执行下面的代码)
      }
    }
    //没有左子树向右移动
    // 中序遍历打印位置(打印第二次访问的顺序就是中序)
    res.push(cur1.val)
    cur1 = cur1.right;//这块代码都会执行
  }
  return res
}