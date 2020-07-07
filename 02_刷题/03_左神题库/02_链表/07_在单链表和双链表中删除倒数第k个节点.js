/*
- 不存在和k<1,不操作,直接返回head
- 从头遍历链表,k开始--,遍历结束之后
  - k==0;倒数第k个节点就是头结点的下一个节点
  - k>0,不存在
  - k<0,继续向后遍历,k++,当k为0时,当前节点就是待删除节点的前一个节点
*/
function Node(data) {
  this.val = data;
  this.next = null
}
function removeKthNode(head, k) {
  if (!head || k < 1) return head
  var cur = head
  while (cur) {
    k--;
    cur = cur.next
  }
  if (k == 0) {
    head = head.next;//第一个节点就是待删除的节点
  }
  if (k < 0) {
    var cur = head
    while (k != 0) {
      k++;
      cur = cur.next;
    }
    //找到待删除的节点的前一个节点
    cur.next = cur.next.next;
  }
  return head
}
// 双链表
function DNode(data) {
  this.val = data;
  this.pre = null;
  this.next = null
}
function removekthDNode(head, k) {
  if (!head || k < 1) return head
  var cur = head
  while (cur) {
    k--;
    cur = cur.next;
  }
  if (k == 0) {
    head = head.next;
    head.pre = null;
  }
  if (k < 0) {
    cur = head
    while (k != 0) {
      k++;
      cur = cur.next;
    }
    var p = cur.next;
    cur.next = p.next;
    p.next.pre = cur;
  }
  return head
}