// 经典动态规划解决
function isCross(str1, str2, aim) {
  if (!str1 || !str2 || !aim) return false
  var s1 = str1.match(/./g);
  var s2 = str2.match(/./g);
  var chaim = aim.match(/./g);
  // 字符串的个数不相等直接返回false
  if (chaim.length != (s1.length + s2.length)) {
    return false;
  }
  //声明dp table初始化
  var dp = new Array(s1.length + 1);
  for (var i = 0; i <= s1.length; i++) {
    dp[i] = new Array(s2.length + 1);
  }
  //添加空串作为str1和str2的第一个字符
  dp[0][0] = true;
  // 初始化第一行和第一列
  for (var i = 1; i <= s1.length; i++) {
    if (s1[i - 1] == chaim[i - 1])
      dp[i][0] = true
    else
      dp[i][0] = false
  }
  for (var j = 1; j <= s2.length; j++) {
    if (s2[j - 1] == chaim[j - 1])
      dp[0][j] = true;
    else
      dp[0][j] = false
  }
  // 中间位置填写,依赖上和左,注意这里的dp长度多1
  for (var i = 1; i <= s1.length; i++) {
    for (var j = 1; j <= s2.length; j++) {
      //如果s1[i-1]和chaim的最后[i+j-1]相等(比较两个元素相等)并且左边的dp为true,当前dp为true,上面的类似
      if ((s1[i - 1] == chaim[i + j - 1] && dp[i - 1][j]) || (s2[j - 1] == chaim[i + j - 1] && dp[i][j - 1]))
        dp[i][j] = true
      else
        dp[i][j] = false
    }
  }
  // 最终位置右下角
  return dp[s1.length][s2.length]
}
var str1 = 'AB', str2 = '12cd', aim = 'A12Bcd'
console.log(isCross(str1, str2, aim));