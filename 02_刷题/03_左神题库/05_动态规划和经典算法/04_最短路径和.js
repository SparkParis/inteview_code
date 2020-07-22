// 1.暴力解法(穷举所有的情况)
/**
 * 
 * @param {二维矩阵} m 
 */
function minPathSum1(m) {
  if (!m || m.length == 0 || !m[0] || m[0].length == 0) {
    return 0
  }
  // 初始化dp表
  var row = m.length;
  var col = m[0].length;
  var dp = new Array(row);
  for (var i = 0; i < row; i++) {
    dp[i] = new Array(col);
  }
  // 第一个行元素只依赖左边的
  dp[0][0] = m[0][0];
  for (var j = 1; j < col; j++) {
    dp[0][j] = dp[0][j - 1] + m[0][j];
  }
  // 第一列元素
  for (var i = 1; i < row; i++) {
    dp[i][0] = dp[i - 1][0] + m[i][0]
  }
  // 中间元素
  for (var i = 1; i < row; i++) {
    for (var j = 1; j < col; j++)
      dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + m[i][j]
  }
  return dp[row - 1][col - 1]
}
// 2.空间压缩的方式
function minPathSum2(m) {
  if (!m || m.length == 0 || !m[0] || m[0].length == 0) {
    return 0
  }
  var more = Math.max(m.length, m[0].length);
  var less = Math.min(m.length, m[0].length);
  var bool = more == m.length;//判断行数是不是大于列数
  var res = new Array(less);
  res[0] = m[0][0]
  // 初始化arr
  for (var i = 1; i < less; i++) {
    res[i] = res[i - 1] + (bool ? m[0][i] : m[i][0]);
  }
  //滚动更新,注意下标从1开始
  for (var k = 1; k < more; k++) {
    res[0] = res[0] + (bool ? m[k][0] : m[0][k]);
    for (var j = 1; j < less; j++) {
      res[j] = Math.min(res[j - 1], res[j]) + (bool ? m[k][j] : m[j][k]);
    }
  }
  return res[less - 1]
}
var arr = [[1, 3, 5, 9], [8, 1, 3, 4], [5, 0, 6, 1], [8, 8, 4, 0]]
console.log(minPathSum1(arr));
console.log(minPathSum2(arr));