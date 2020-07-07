//通过方式2实现
function Node(data){
  this.val = data;
  this.rand = null;
  this.next = null;
}
function copyRandLink(head){
  if(!head||!head.next) return head
  var cur = head
  //首次遍历将所有的节点赋值并放在被复制节点的下一个节点
  while(cur){
    var node = new Node(cur.val);
    node.next = cur.next
    cur.next = node;
    cur = cur.next.next
  }
  //第二次遍历添加随机指针的
  while(head){
    head.next.rand = head.rand.next;
  }
  //将新旧链表分离出来
  var newHead = null
  var flag = false
  while(head){
    if(flag){
      if(!newHead){
        newHead = head
      }
      newHead.next = head
    }
    head = head.next;
  }
  return  newHead
}