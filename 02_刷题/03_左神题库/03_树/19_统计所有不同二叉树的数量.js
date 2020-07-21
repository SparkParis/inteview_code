
/**
 * @param {二叉树的节点数} n 
 */
function numTrees(n) {
  if (n < 2) {
    return 1
  }
  var num = new Array(n + 1);
  num[0] = 1;
  for (var i = 1; i < n + 1; i++) {
    for (var j = 1; j < i + 1; j++) {
      num[i] = num[j - 1] * num[i - j];//全排序列的思想,num[i]表示节点为i的种树有num[i]个
    }
  }
  return num[n]
}