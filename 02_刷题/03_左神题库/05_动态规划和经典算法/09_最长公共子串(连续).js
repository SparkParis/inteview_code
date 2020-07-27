// 方案1:经典解法
// 先求dp
function getdp(str1, str2) {
  var dp = new Array(str1.length);
  for (var i = 0; i < str1.length; i++) {
    dp[i] = new Array(str2.length)
  }
  dp[0][0] = str1[0] == str2[0] ? 1 : 0;
  //第一行和第一列
  for (var i = 0; i < str1.length; i++) {
    dp[i][0] = str1[i] == str2[0] ? 1 : 0;
  }
  for (var j = 0; j < str2.length; j++) {
    dp[0][j] = str2[j] == str1[0] ? 1 : 0
  }
  // 中间位置填写,只依赖对角线
  for (var i = 1; i < str1.length; i++) {
    for (var j = 1; j < str2.length; j++) {
      dp[i][j] = str1[i] == str2[j] ? dp[i - 1][j - 1] + 1 : 0
    }
  }
  return dp
}
// dp中的最大值就是最长子序列的长度,并且最长串在对角线上,截取字符串中指定位置的长度即可
function cst1(str1, str2) {
  if (!str1 || !str2 || str1 == '' || str2 == '') {
    return '';
  }
  var s1 = str1.match(/./g)
  var s2 = str2.match(/./g)
  var dp = getdp(s1, s2);//注意这里不转换直接输入也是可以的
  var max = 0
  var end = 0
  for (var i = 1; i < s1.length; i++) {
    for (var j = 1; j < s2.length; j++) {
      if (dp[i][j] > max) {
        max = dp[i][j]
        end = i;//记录末尾位置,取指定字符串
      }
    }
  }
  return str1.substr(end - max + 1, end)//第二个参数表示截取的长度
}


// 方案2:不采用dp table,空间复杂度O(1),需要三个变量开始位置i,j,对角线元素的值,滚动进行
function cst2(str1, str2) {
  if (!str1 || !str2 || str1 == '' || str2 == '') {
    return '';
  }
  var s1 = str1.match(/./g);
  var s2 = str2.match(/./g);
  // 从右上角的位置开始斜线
  var row = 0;//斜线位置开始的行
  var col = s2.length - 1;//斜线位置开始的列
  var max = 0;//记录最大值
  var end = 0;//最长长度更新时记录子串结尾的位置

  while (row < s1.length) {
    var i = row;
    var j = col;
    var len = 0;//记录当前位置的连续子数组的长度
    // 遍历每一条斜线
    while (i < s1.length && j < s2.length) {
      if (s1[i] == s2[j]) {
        len++;
      } else {
        len = 0
      }
      // 记录最大值
      if (len > max) {
        max = len;
        end = i;
      }
      i++;
      j++
    }
    //列向左移动
    if (col > 0) {
      col--
    } else {//移动到最左之后,行向下移动
      row++
    }
  }

  return str1.substr(end - max + 1, max);
}
var str1 = 'abcde', str2 = 'bebcd';
// console.log(getdp(str1, str2));
console.log(cst1(str1, str2));
console.log(cst2(str1, str2));