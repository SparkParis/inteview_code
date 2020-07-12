/*
注意这里是环形单链表的约瑟夫环问题,有链表的链接问题
*/
function Node(data) {
  this.val = data;
  this.next = null;
}
function josephusKill(head, m) {
  if (!head || !head.next || m < 1) return head
  // 判断是不是环,遍历结束last.next=head,last始终是head的前一个元素
  var last = head
  while (last.next != head) {
    last = last.next;
  }
  //暴力破解,遇到m就kill,
  var count = 0;
  while (head != last) {
    if (++count == m) {
      last.next = head.next;
      count = 0;
    } else {
      last = last.next;
    }
    head = last.next;
  }
  return head
}

// 方案2:数学公式(注意链表中是以1开始)
function josephusKill2(head, m) {
  if (!head || !head.next || m < 1) return head;
  //计算链表的长度
  var size = 0;
  var cur = head.next;
  while (cur != head) {
    size++;
    cur = cur.next;
  }
  //获取待删除的元素编号
  size = getLive(size, m);
  //遍历找到存活的节点,返回
  while (--size != 0) {
    head = head.next;
  }
  //找到当前的节点head,从环形链表中取出来
  head.next = head;
  return head
}
function getLive(n, m) {
  //判断第几个是存活的编号返回,在上面的函数中遍历截取并返回即可
  if (n < 1) return 1;
  return (getLive(n - 1, m) + m - 1) % n + 1;
}