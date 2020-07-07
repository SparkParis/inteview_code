//判断链表是否有环,有环返回链表的入口节点
function getLoopNode(head) {
  if (!head || head.next == null || head.next.next == null) return null
  // 设置双指针
  var fast = head.next.next
  var slow = next;
  while (fast != slow) {
    if (!fast || !slow) return null//表示无环
    fast = fast.next.next;
    slow = slow.next;
  }
  // 执行到这里表示有环,此时需要寻找环的入口节点
  fast = head;
  while (fast != slow) {
    fast = fast.next;
    slow = slow.next;
  }
  //此时相遇的节点就是入口节点
  return fast
}