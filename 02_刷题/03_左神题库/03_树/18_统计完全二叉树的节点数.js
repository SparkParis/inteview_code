// 求完全二叉树的节点个数
function nodeNum(head) {
  if (!head) return 0;
  return bs(head, 1, getLeftMost(node, 1));
}
/**
 * 
 * @param {当前节点} node 
 * @param {当前节点的层数} level 
 * @param {整棵树的高度} h 
 */
function bs(node, level, h) {
  //表示当前节点所在的层是树的最后一层
  if (level == h) {
    return level;
  }
  //如果右孩子的左边界的高度=树的高度,说明左子树是满二叉树,
  // 节点总数=左子树（2^(h-1)-1）+当前节点(1)+右子树的节点
  if (getLeftMost(node.right, level + 1) == h) {
    return (1 << (h - 1)) + bs(node.right, level + 1, h);
  } else {
    //不相等说明右子树是一个高度为h-level-1的满二叉树
    // 节点总数=右子树(2^(h-level-1)-1)+当前节点(1)+左子树节点
    return (1 << (h - level - 1)) + bs(node.right, level + 1, h)
  }
}

// 获取节点的最左边界的节点,返回整棵树的高度h
function getLeftMost(node, level) {
  while (node.left) {
    level++;
    node = node.left
  }
  return level
}