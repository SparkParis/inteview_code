// 判断二叉树是搜索二叉树,采用morris遍历(中序遍历)
function Node(data) {
  this.val = data;
  this.left = null;
  this.right = null;
}
// morris中序遍历
function isBST(head) {
  if (!head) {
    return true;
  }
  var cur1 = head
  var cur2 = null;
  var pre = null;
  var res = true
  while (cur1) {
    if (cur2) {
      while (cur2.right && cur2.right != cur1) {
        cur2 = cur2.right;
      }
      // 第一次访问
      if (cur2.right == null) {
        cur2.right = cur1;
        cur1 = cur1.left;//向左移动并终止本次循环
        continue;
      } else {//第二次访问
        cur2.right = null
      }
    }
    //没有左子树只会访问一次,这里多了判断条件
    if (pre != null && pre.val > cu1.val) {
      return res = false
    }
    pre = cur1;
    cur1 = cur1.right;//向左移动
  }
  return res
}

// 判断一棵树是不是完全二叉树,这里采用层次遍历的方式借助队列的方式(从后面进从前面出)
function isCBT(head) {
  if (!head) {
    return true
  }
  var leaf = false;//用于标记当前节点是不是有右孩子
  var queue = [];
  var left = null;
  var right = null;
  //根节点进队列
  queue.push(head)
  while (queue.length) {
    // 取出队头元素
    var cur = queue.shift();
    left = cur.left;
    right = cur.right;
    if ((leaf && (left != null || right != null)) || (left == null && right != null)) {
      return false;
    }
    if (left) {
      queue.push(left)
    }
    if (right) {
      queue.push(right);
    } else {
      leaf = true;//表示当前节点是只有一个节点的
    }
  }
  return true
}