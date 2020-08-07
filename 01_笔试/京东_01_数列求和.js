
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
function lsce(str1, str2) {
  if (!str1 || str1 == '' || !str2 || str2 == '') return ''
  var s1 = str1.replace(/\s/g, '').match(/./g);
  var s2 = str2.replace(/\s/g, '').match(/./g);

  var dp = getdp(s1, s2);
  var m = s1.length - 1;
  var n = s2.length - 1;
  var res = new Array(dp[m][n]);
  index = res.length - 1;
  while (index >= 0) {
    if (n > 0 && dp[m][n] == dp[m][n - 1]) {
      n--;
    } else if (m > 0 && dp[m][n] == dp[m - 1][n]) {
      m--;
    } else {
      res[index--] = s1[m];
      m--;
      n--;
    }
  }
  return res.join('')
}

function getResult(n, str1, str2) {
  if (n < 1 || str1.length != str2.length || n != str1.replace(/\s/g, '').length)
    return 0 + ' ' + 'No';
  var m = lsce(str1, str2).length;
  var res = parseFloat(m / n).toFixed(2);
  var flag = 'Yes'
  if (res > 0.5) {
    var flag = 'No'
  }
  return res + ' ' + flag;
}

var str1 = 'A B C D E E', str2 = 'A E D C B B';

// console.log(lsce(str1, str2));
console.log(getResult(6, str1, str2));