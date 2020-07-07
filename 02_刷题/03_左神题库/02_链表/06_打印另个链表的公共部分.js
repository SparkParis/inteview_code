/**
 * 遍历,链表不为空,head1的值小于head2,head1++,反之head2++,相等打印二者同时++
 */
function printCommonNode(head1, head2) {
  if (!head1 && !head2) return null;
  if (!head1 || !head2) return null
  var res = []
  while (head1 && head2) {
    if (head1.val < head2.val)
      head1 = head1.next;
    else if (head1.val > head2.val)
      head2 = head2.next;
    else {
      res.push(head1.val);
      head1 = head1.next;
      head2 = head2.next;
    }
  }
  return res
}