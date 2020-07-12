// 方案1
function Node(data) {
  this.val = data;
  this.next = null
}
function addLink(head1, head2) {
  if (!head1 && !head2) return null
  if (!head1) return head2;
  if (!head2) return head1;
  var stack1 = []
  while (hea1) {
    stack1.push(head1.val)
    head1 = head1.next;
  }
  var stack2 = [];
  while (head2) {
    stack2.push(head2.val);
    head2 = head2.next
  }
  var cal = 0;
  var n1 = 0;
  var n2 = 0;
  var n = 0;
  var pre = null;
  var node = null
  while (stack1.length || stack2.length) {
    n1 = stack1.length ? stack1.pop().val : 0;
    n2 = stack2.length ? stack2.pop().val : 0;
    n = n1 + n2 + cal;
    pre = node;
    node = new Node(n % 10);
    node.next = pre;///头差法
    cal = n / 10;
  }
  if (cal == 1) {
    pre = node;
    node = new Node(cal);
    node.next = pre;
  }
  return node
}