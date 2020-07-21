function lowerAncestor(head, node1, node2) {
  if (!head || head == node1 || head == node2) {
    return head
  }
  var left = lowerAncestor(head.left, node1, node2);
  var right = lowerAncestor(head.right, node1, node2);
  if (left && right) {
    //存在两个子树上返回头节点
    return head
  }
  //在一棵子树上直接返回最近的祖先节点,该祖先节点会进行传递(两个节点如果在一棵子树上那么当前节点的另一个子树返回为null)
  return left ? left : right;
}