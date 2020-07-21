function Node(data) {
  this.val = data;
  this.left = null;
  this.right = null;
}
function BinarySortTree() {
  this.root = null;
}
// 二叉搜索树查找插入新节点的速度位置并插插入元素
function insertNode(node, newNode) {
  //比较当前节点和待插入节点的val的大小
  if (node.val > newNode.val) {//插入节点小于,插入在左节点
    //判断左节点是否存在
    if (!node.left) {
      node.left = newNode
    } else {
      insertNode(node.left, newNode);
    }
  } else {
    if (!node.right) {
      node.right = newNode;
    } else {
      insertNode(node.right, newNode)
    }
  }
}
// 1.对外暴露的插入方法
BinarySortTree.prototype.insert = function (data) {
  // 创建新的节点
  var newNode = new Node(data);
  if (!this.root) {
    this.root = newNode
  }
  else {
    //二叉搜索插在root树种合适的位置并插入节点newNode
    insertNode(this.root, newNode);
  }
}
// 2.排序二叉树的遍历(中序)
function inOrderTraverse(node, arr = []) {
  if (node) {
    inOrderTraverse(node.left, arr);
    arr.push(node.val);
    inOrderTraverse(node.right, arr)
  }
  return arr;
}
BinarySortTree.prototype.inOrder = function () {
  return inOrderTraverse(this.root)
}
// 3.排序二叉树的遍历(先序)
function preOrderTraverse(node, arr = []) {
  if (node) {
    arr.push(node.val);
    preOrderTraverse(node.left, arr);
    preOrderTraverse(node.right, arr);
  }
  return arr
}
BinarySortTree.prototype.preOrder = function () {
  return preOrderTraverse(this.root);
}
// 4.排序二叉树的遍历(后序)辅助函数
function postOrderTraverse(node, arr = []) {
  if (node) {
    postOrderTraverse(node.left, arr);
    postOrderTraverse(node.right, arr);
    arr.push(node.val);
  }
  return arr;
}
BinarySortTree.prototype.postOrder = function () {
  return postOrderTraverse(this.root)
}
// 5.二叉搜索树的查找(最大值,最小值,是否存在)
//最小值
function getMinNode(node) {
  if (node) {
    while (node && node.left) {
      node = node.left
    }
    return node.val
  }
  return null
}
BinarySortTree.prototype.getMin = function () {
  return getMinNode(this.root)
}
// 最大值
function getMaxNode(node) {
  if (node) {
    while (node && node.right) {
      node = node.right
    }
    return node.val
  }
  return null;
}
BinarySortTree.prototype.getMax = function () {
  return getMaxNode(this.root)
}
//查找是否存在
function searchNode(node, key) {
  if (!node) return false
  if (key < node.val) {
    return searchNode(node.left, key)
  } else if (key > node.val) {
    return searchNode(node.right, key)
  } else {
    return true
  }
}
BinarySortTree.prototype.search = function (key) {
  return searchNode(this.root, key)
}

var nodes = [4, 7, 9, 0, 3, 6];
var tree = new BinarySortTree();
nodes.forEach((item) => {
  tree.insert(item)

})
console.log(tree.inOrder());// [ 0, 3, 4, 6, 7, 9 ]
console.log(tree.preOrder());//[ 4, 0, 3, 7, 6, 9 ]
// console.log(tree.postOrder());/[ 3, 0, 6, 9, 7, 4 ]
console.log(tree.search(6));//true
console.log(tree.search(32));//false
console.log(tree.getMax());///9
console.log(tree.getMin());//0
//注意在函数内部书写的辅助函数直接写成函数的形式不用添加在原型中,原型中的方法都是暴露在外部的方法