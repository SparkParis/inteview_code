function maxInstance(head) {
  //保存head的深度
  var record = new Array(1);
  return postOrder(head, record)
}
function postOrder(head, record) {
  if (!head) {
    record[0] = 0;
    return 0
  }
  var lMax = postOrder(head.left, record);
  var maxFromLeft = record[0];
  var rMax = postOrder(head.right, record);
  var maxFromRight = record[0];
  var curNodeMax = maxFromLeft + maxFromRight + 1;
  record[0] = Math.max(maxFromLeft, maxFromRight) + 1;
  return Math.max(Math.max(lMax, rMax), curNodeMax);//返回当前节点的最大距离
}