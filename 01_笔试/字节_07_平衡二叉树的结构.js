// AVL树的实现
function AVLNode(data) {
  this.val = data;
  this.left = this.right = null;
  this.height;//当前节点的高度
}
//LL类型的失衡节点的调整
function BalanceTree() {
  this.root = null
}
//LL调整(右旋),参数node为失衡的节点
BalanceTree.prototype.singleRight = function (node) {
  var leftNode = node.left;//失衡节点的左孩子
  node.left = leftNode.right;
  leftNode.right = node;
  // 更新leftNode和失衡节点的高度
  node.height = Math.max(getHeight(node.left), getHeight(node.right)) + 1;
  leftNode.height = Math.max(getHeight(leftNode.left), getHeight(leftNode.right)) + 1;
  //返回旋转之后的头节点
  return leftNode;
}
// RR调整(左旋),参数node为失衡的节点
BalanceTree.prototype.singleLeft = function (node) {
  var rightNode = node.right;
  node.right = rightNode.left;
  rightNode.left = node
  // 更新节点高度
  node.height = Math.max(getHeight(node.left), getHeight(node.right)) + 1;
  rightNode.height = Math.max(getHeight(rightNode.left), getHeight(rightNode.right)) + 1;
  return rightNode;//返回头节点
}
// LR(先左旋在右旋)node表示失衡节点
BalanceTree.prototype.DoubleLeftRight = function (node) {
  node.left = this.singleLeft(node.left);
  return this.singleRight(node);
}
// RL(先右旋在左旋)node表示失衡节点
BalanceTree.prototype.DoubleRightLeft = function (node) {
  node.right = this.singleRight(node.right);
  return this.singleLeft(node);
}
// 插入操作
/**
 * data:待插入的数据
 * node:表示待插入的节点位置
 */

BalanceTree.prototype.insert = function (data, node) {
  // node为空表示找到了插入的位置,创建值为data的节点
  if (!node) {
    node = new AVLNode(data);
  }
  // 二叉搜索树查找待插入的位置
  if (data < node.val) {//插入的值小于当前节点,插入到左子树中
    node.left = insert(data, node.left);
    //插入后调整左右子树的高度,左右子树的高度==2,表示当前节点时失衡节点
    if (getHeight(node.left) - getHeight(node.right) == 2) {
      //判断插入的节点插入的位置(插入的是左子树,调整的就是左子树)和删除的区别
      if (data < node.left.val) {//左子树上LL类型,右旋
        node = this.singleRight(node);
      } else {//右子树上,则是LR类型
        node = this.DoubleLeftRight(node);
      }
    }
  }
  // 插入到右子树上
  else if (data > node.val) {
    node.right = insert(data, node.right);
    //调整位置,
    if (getHeight(node.left) - getHeight(node.right) == 2) {
      if (data > data.right) {//右子树上,左旋
        node = this.singleLeft(node);
      } else {//左子树上RL
        node = this.DoubleRightLeft(node);
      }
    }
  }
  // 相等的情况
  node.height = Math.max(getHeight(node.left), getHeight(node.right)) + 1;
  return node;
}
// 删除节点
/**
 * 
 * @param {待删除的节点值} data 
 * @param {待删除的位置(通过二叉搜索树的方式进行查找)} node 
 */
BalanceTree.prototype.remove = function (data, node) {
  // 表示当前节点不存在
  if (!node) return null;
  //获取节点值，递归查找==data的节点位置
  if (data < node.val) {
    node.left = this.remove(data, node, left);
    //监测是否平衡
    if (getHeight(node.left) - getHeight(node.right) == 2) {
      var cur = node.right;//注意这里是node的右子树(删除的是左子树,需要调整的就是右子树)
      if (getHeight(cur.right) >= getHeight(cur.left)) {//RR
        node = this.singleLeft(node);
      } else {//RL
        node = this.DoubleRightLeft(node);
      }
    }
  } else if (data > node.val) {
    node.right = this.remove(data, nod.right);
    //监测平衡
    if (getHeight(node.left) - getHeight(node.right) == 2) {
      var cur = node.left;//删除的是右子树调整的就是左子树
      if (getHeight(cur.left) >= getHeight(cur.right)) {//LL
        node = this.singleRight(node);
      } else {//LR
        node = this.DoubleLeftRight(node)
      }
    }
  }
  //找到待删除的节点,并且有两个子节点
  else if (node.left && node.right) {
    //寻找替换节点
    node.val = this.findMin(node.right).val;
    //移除需要替换的节点
    node.right = remove(node.val, node.right);
  } else {//只有一个节点或者当前节点时叶子节点
    node = (node.left) ? node.left : node.right;
  }
  // 更新高度
  if (node) {
    node.height = Math.max(getHeight(node.left), getHeight(node.rigth)) + 1;
  }
  return node;//返回删除的节点

}
// 辅助函数
/**
 * @param {根节点} node 
 */
function findMin(node) {
  if (!node) return null
  else if (!node.left) return node
  return findMin(node.left)
}
function findMax(node) {
  if (!node) return null;
  else if (!node.right) return node
  return findMax(node.right);
}
// 计算当前节点的高度
function getHeight(node) {
  return node == null ? -1 : node.height;//直接返回node节点的属性指针height
}