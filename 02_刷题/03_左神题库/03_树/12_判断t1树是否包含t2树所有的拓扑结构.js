function Node(data) {
  this.val = data;
  this.left = null;
  this.right = null;
}
function contains(t1, t2) {
  return check(t1, t2) || contains(t1.left, t2) || contains(t1.right, t2);
}
// 递归检查相同的头结点
function check(h, t2) {
  if (t2 == null) {
    return true
  }
  if (h == null || h.val != t2.val) {
    return false
  }
  return check(h.left, t2.left) && check(h.right, t2.right)
}