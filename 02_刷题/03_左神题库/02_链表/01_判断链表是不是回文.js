// 1.方案1:全部入栈,出栈元素和链表的起始位置开始遍历
//单链表定义,时间复杂度O(N),空间O(n)
function Node(data) {
  this.val = data;
  this.next = null;
}
function isValid(head) {
  if (!head || !head.next) return true
  var stack = [];
  var cur = head
  while (cur) {
    stack.push(cur);
    cur = cur.next;
  }
  while (head != null) {
    if (head.val !== stack.pop().val) {
      return false
    }
    head = head.next;
  }
  return true
}
// 方案2:设置快慢指针(快指针走两步,满指针走一步)
function isValid2(head) {
  if (!head || !head.next) return true
  //设置快慢指针
  var slow = head.next;
  var fast = head;
  while (slow.next && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  var stack = [];
  while (slow) {
    //后半部分入栈
    stack.push(slow);
    slow = slow.next;
  }
  //逆序的后半部分和链表的起始位置比较知道栈为空
  while (stack.length) {
    if (stack.pop().val !== head.val) {
      return false
    }
  }
  return true
}
// 3.将链表的后半部分逆序,