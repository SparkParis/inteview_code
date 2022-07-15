// 注意最长公共子序列可以是不连续
// 1.dp解决
// 求dp数组
function getdp(str1, str2) {
  var dp = new Array(str1.length);
  for (var i = 0; i < str1.length; i++) {
    dp[i] = new Array(str2.length);
  }
  dp[0][0] = str1[0] == str2[0] ? 1 : 0;
  // 第一行和第一列填写
  for (var i = 1; i < str1.length; i++) {
    dp[i][0] = Math.max(dp[i - 1][0], str1[i] == str2[0] ? 1 : 0);
  }
  for (var j = 1; j < str2.length; j++) {
    dp[0][j] = Math.max(dp[0][j - 1], str2[i] == str1[0] ? 1 : 0);
  }

  // 其他位置填写
  for (var i = 1; i < str1.length; i++) {
    for (var j = 1; j < str2.length; j++) {
      //上左最值
      dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      if (str1[i] == str2[j]) {
        dp[i][j] = Math.max(dp[i][j], dp[i - 1][j - 1] + 1)
      }
    }
  }
  return dp
}
//根据dp求出最长公共子序列,从右下角获取最长子序列的长度这里逆着往上推
function lsce(str1, str2) {
  if (!str1 || str1 == '' || !str2 || str2 == '') return ''
  // 将字符转化为字符数组
  var s1 = str1.match(/./g);
  var s2 = str2.match(/./g);
  var dp = getdp(s1, s2);
  console.log(dp, 'dp')
  var m = s1.length - 1;
  var n = s2.length - 1;
  //右下角位置开始,(右下角存放的是最长公共子序列的长度)
  var res = new Array(dp[m][n]);
  index = res.length - 1;//res末尾的索引
  while (index >= 0) {
    if (n > 0 && dp[m][n] == dp[m][n - 1]) {
      n--;//左移
    } else if (m > 0 && dp[m][n] == dp[m - 1][n]) {
      m--;//上移
    } else {
      //对角线+1相等保存
      res[index--] = s1[m];
      m--;
      n--;
    }
  }
  return res.join('')
}

var str1 = '1A2C3D4B56', str2 = 'B1D23CA45B6A';
// console.log(getdp(str1, str2))
// console.log(str1.match(/./g));//匹配所有的字符并返回字符数组
console.log(lsce(str1, str2));

// 2.dp优化-空间压缩