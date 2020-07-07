/*
方式2:通过递归实现左右子树的双向链表,返回左右子树的第一个节点和最后一个节点,这里采用每次返回一个节点,将最后一个节点指向自链表的头结点
*/
// 二叉树的节点定义
function TreeNode(data) {
  this.val = data;
  this.left = null;
  this.right = null
}
//链表节点定义
function LinkNode(data) {
  this.val = data;
  this.pre = null;
  this.next = null
}
//将二叉树转化为链表
function convertToLink(head) {
  if (!head) return null
  var pre = process(head);
  head = pre.right;
  pre.right = null;
  return head;
}
//递归实现左右子树的转化
function process(head) {
  if (!head) return null
  var leftE = process(head.left);//左边结束
  var rightE = process(head.right);//右边结束
  var leftS = leftE ? leftE.right : null;//左边开始
  var rightS = rightE ? rightE.left : null; 右边开始
  if (leftE && rightE) {
    // 左右两边都存在
    leftE.right = head;
    head.left = leftE;
    head.right = rightS;
    rightS.left = head
    rightE.right = leftS//指向了第一个节点
    return rightE//返回的都是尾节点
  } else if (leftE) {
    leftE.right = head;
    head.left = leftE
    head.right = leftS//指向第一个节点
    return head
  } else if (rightE) {
    head.right = rightS;
    rightS.left = head;
    rightE.right = head;//右子树的第一个节点是head
    return rightE;
  } else {
    // 左右子树都不存在,返回自己
    head.right = head;
    return head
  }
}