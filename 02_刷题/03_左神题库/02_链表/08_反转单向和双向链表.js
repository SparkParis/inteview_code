
//反转单向和双向链表,时间复杂度O(n),空间复杂度O(1)
/*
以链表的头部节点为基准节点

将基准节点的下一个节点挪到头部作为头节点

当基准节点的next为null，则其已经成为最后一个节点，链表已经反转完成
*/
function reverse(head) {
  if (!head || !head.next) return head
  var headNode = head;
  var cur = null
  while (head && head.next) {
    cur = head.next;//表示当前正在操作的节点
    head.next = cur.next;//删除当前操作的节点
    cur.next = headNode;//将当前节点连接到头结点前面
    headNode = cur;//将头结点指向当前节点
  }
  return headNode
}