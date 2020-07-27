// 1.暴力递归解法
function win1(arr) {
  if (arr == null || arr.length == 0) {
    return 0;
  }
  return Math.max(f(arr, 0, arr.length - 1), s(arr, 0, arr.length - 1))
}
function f(arr, i, j) {//先拿得人的函数
  if (i == j) {
    return arr[i]
  }
  return Math.max(arr[i] + s(arr, i + 1, j), arr[j] + s(arr, i, j - 1))
}
function s(arr, i, j) {//后拿的人的函数
  if (i == j) {
    return 0
  }
  //后拿的人只能拿先拿的人中可选择的最小值
  return Math.min(f(arr, i + 1, j), f(arr, i, j - 1))
}
// 2.动态规划解法
function win2(arr) {
  if (!arr || arr.length == 0) return 0;
  //初始化两个二维的动态规划表
  var f = new Array(arr.length)
  for (var i = 0; i < f.length; i++) {
    f[i] = new Array(f.length)
  }
  var s = new Array(arr.length);
  for (var i = 0; i < s.length; i++) {
    s[i] = new Array(s.length)
  }
  for (var j = 0; j < arr.length; j++) {
    // 对角线位置不受影响
    f[j][j] = arr[j];
    s[j][j] = 0;
    for (var i = j - 1; i >= 0; i--) {
      f[i][j] = Math.max(arr[i] + s[i + 1][j], arr[j] + s[i][j - 1]);
      s[i][j] = Math.min(f[i + 1][j], f[i][j - 1])
    }
  }
  // 返回最终位置
  return Math.max(f[0][arr.length - 1], s[0][arr.length - 1])
}
var arr = [1, 2, 100, 4]
// console.log(win1(arr));
console.log(win2(arr));