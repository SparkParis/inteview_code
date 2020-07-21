//边界打印函数(打印的是左子树的右边界以及整棵树的右边界)
function printEdge(head) {
  var tail = reverseEdge(head);//将节点开始的右边界逆序,并返回逆序后的首个节点(也就是逆序前的尾结点)
  var cur = tail;
  var res = []
  while (cur) {
    //打印逆序后的节点
    res.push(cur.val);
    cur = cur.right;
  }
  //打印完成之后还原逆序之前的结构
  reverseEdge(tail);
  return res
}
// 链表逆序操作
function reverseEdge(head) {
  var pre = null;
  var next = null;
  while (head) {
    next = head.right;
    head.right = pre;
    pre = head;
    head = next;
  }
  return pre;
}
//morris后序遍历
function postOrder(root) {
  if (!root) return null;
  var cur1 = root;
  var cur2 = null;
  var res = [];
  while (cur1) {
    cur2 = cur1.left;
    if (cur2) {
      while (cur2 && cur2.right != cur1) {
        cur2 = cur2.right;
      }
      //表示该节点是第一次访问
      if (cur2.right == null) {
        cur2.right = cur1;
        cur1 = cur1.left;
        continue
      } else {
        //第二次访问
        cur2.right = null;
        res.push(...printEdge(cur1.left));
      }
    }
    //不存在则转右子树,第二次访问转右子树
    cur1 = cur1.right;
  }
  //遍历结束还要添加整棵树的右边界
  res.push(...printEdge(root))
  //返回后序遍历的结果
  return res
}