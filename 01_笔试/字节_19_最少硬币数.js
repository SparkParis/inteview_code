
function leastCount(arr, aim) {
  if (arr == null || arr.length == 0 || aim < 0) {
    return [];
  }
  var n = arr.length;
  var max = Number.MAX_VALUE;
  var dp = new Array(aim + 1);
  for (var i = 1; i <= aim; i++) {
    dp[i] = max;
  }
  if (arr[0] <= aim) {
    dp[arr[0]] = 1;
  }
  var leftup = 0;
  for (var i = 1; i < n; i++) {
    for (var j = aim; j >= 0; j--) {
      leftup = max;
      if (j - arr[i] >= 0 && dp[j - arr[i]] != max) {
        leftup = dp[j - arr[i]] + 1;
      }
      dp[j] = Math.min(leftup, dp[j])
    }
  }
  return dp[aim] != max ? dp[aim] : []
}
console.log(leastCount([1, 2, 5], 18));