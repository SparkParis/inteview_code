/*
给定数组n
*/
function getSquareCount(num) {
  if (num < 0) return 0
  var k = parseInt(Math.sqrt(num));
  var dp = new Array(num + 1);
  var square = new Array(k + 1);
  for (var i = 1; i < k + 1; i++) {
    square[i] = i * i
  }
  for (var i = 0; i < num + 1; i++) {
    dp[i] = i
  }
  for (var i = 2; i < num + 1; i++) {
    for (var j = 2; j < k + 1; j++) {
      if (square[j] > i) continue;
      if (square[j] <= i) {
        var index = parseInt(i / square[j]);
        dp[i] = Math.min(dp[i], dp[i - index * square[j]] + index);
      }
    }
  }
  return dp[num]
}
// console.log(getSquareCount(12));

//方法2:通过bfs(深度优先遍历来解决),问题转化为从n到0的最短路径
function Node(val, step) {
  this.val = val;
  this.step = step;
}
function numSquare(n) {
  var queue = [];
  queue.push(new Node(n, 0));
  var visit = new Array(n + 1);
  while (queue.length) {
    var cur = queue.shift();
    var val = cur.val;
    var step = cur.step;
    for (var i = 1; ; i++) {
      var newNum = val - i * i;
      if (newNum < 0) {
        break;
      }
      if (newNum == 0) {
        return step + 1;
      }
      if (!visit[newNum]) {
        queue.push(new Node(newNum, step + 1));
        visit[newNum] = true
      }
    }
  }
  return -1
}
console.log(numSquare(12));