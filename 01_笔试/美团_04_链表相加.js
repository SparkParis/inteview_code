function Node(data) {
  this.val = data;
  this.next = null;
}
function add(head1, head2) {
  if (!head1) return head2;
  if (!head2) return head1;
  var cur1 = head1;
  var cur2 = head2;
  var sum = 0;
  var cal = 0;
  var head, cur;
  cur = head;

  while (cur1 !== null || cur2 !== null || cal != 0) {
    var n1 = 0;
    var n2 = 0
    if (cur1) {
      n1 = cur1.val;
      cur1 = cur1.next;
    }
    if (cur2) {
      n2 = cur2.val;
      cur2 = cur2.next;
    }
    sum = (cal + n1 + n2) % 10;
    var node = new Node(sum);
    if (!cur) {
      cur = node;
    }
    cur.next = node;
    cur = cur.next;
    cal = (cal + n1 + n2) / 10;
  }
  return head;
}
function add(head1, head2) {
  if (head1 == null && head2.val < 10) return head2;
  else if (head2 == null && head1.val < 10) return head1;
  else {
    if (head1 == null) head1 = new Node(0);
    if (head2 == null) head2 = new Node(0);
    var node = new Node(0);
    var temp = head1.val + head2.val;
    if (temp > 9) {
      temp = temp % 10;
      if (head1.next != null) {
        head1.val += 1;
      } else {
        head1.next = new Node(1);
      }
      node.val = temp;
    } else {
      node.val = temp;
    }
    node.next = add(head1.next, head2.next)
    return node;
  }
}
console.log(20 / 8);