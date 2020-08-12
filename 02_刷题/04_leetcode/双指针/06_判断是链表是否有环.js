function isCycle(head) {
  if (!head) return false;
  var low = head;
  var fast = head.next;
  while (low && fast && fast.next) {
    if (low == fast) {
      return true
    }
    low = low.next;
    fast = fast.next.next;
  }
  return false
}