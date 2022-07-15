
// 1.经典解法
function minCost1(str1, str2, ic, dc, rc) {
  if (!str1 && !str2) {
    return 0
  }
  if (!str1) return ic * str2.length;
  if (!str2) return dc * str1.length;
  var s1 = str1.match(/./g);
  var s2 = str2.match(/./g);
  // 初始化dp表
  var row = s1.length + 1;//添加了空串
  var col = s2.length + 1;
  var dp = new Array(row);
  for (var i = 0; i < row; i++) {
    dp[i] = new Array(col);
  }

  // 初始化0,0
  dp[0][0] = 0;
  // 初始化第一行和第一列
  for (var i = 0; i < row; i++) {
    dp[i][0] = i * dc;
  }
  for (var j = 0; j < col; j++) {
    dp[0][j] = j * ic;
  }
  console.log(dp, 'dp')
  // 其他节点依赖三个位置
  for (var i = 1; i < row; i++) {
    for (var j = 1; j < col; j++) {
      if (s1[i - 1] == s2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1]
      } else {
        dp[i][j] = dp[i - 1][j - 1] + rc;
      }
      dp[i][j] = Math.min(dp[i][j], dp[i - 1][j] + dc)
      dp[i][j] = Math.min(dp[i][j], dp[i][j - 1] + ic)
    }
  }
  return dp[row - 1][col - 1]
}
var str1 = '', str2 = 'a'
console.log(minCost1(str1, str2, 1, 1, 1));