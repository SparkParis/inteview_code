//1.时间复杂度O(n^2)的解法
function getdp(arr) {
  var dp = new Array(arr.length);
  for (var i = 0; i < arr.length; i++) {
    dp[i] = 1;
    for (var j = 0; j < i; j++) {
      if (arr[i] > arr[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
  }
  return dp;
}
// 根据dp数组求求出最长子序列
function genLis(arr, dp) {
  var index = 0;
  var len = 0;
  for (var i = 0; i < dp.length; i++) {
    if (dp[i] > len) {
      len = dp[i];
      index = i
    }
  }
  //此时len的长度就是最长子序列的长度
  var res = new Array(len);
  res[--len] = arr[index];
  for (var j = index; j >= 0; j--) {
    if (arr[index] > arr[j] && dp[j] == dp[index] - 1) {
      //找到倒数第二个数
      res[--len] = arr[j];
      index = j;
    }
  }
  return res
}
function longest(arr) {
  if (!arr || arr.length == 0) return null
  var dp = getdp(arr)
  return genLis(arr, dp)
}
var arr = [2, 1, 5, 3, 6, 4, 8, 9, 7]
console.log(longest(arr));