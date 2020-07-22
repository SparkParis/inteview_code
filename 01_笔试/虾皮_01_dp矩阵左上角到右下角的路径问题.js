function uniquePath(obstacleGrid) {
  if (!obstacleGrid) return 0
  var m = obstacleGrid.length;
  var n = obstacleGrid[0] ? obstacleGrid[0].length : 0;
  var cur = Array(m).fill(Array(n).fill(0));
  cur[0][0] = obstacleGrid[0][0] == 0 ? 1 : 0;
  for (var i = 0; i < m; ++i) {
    for (var j = 0; j < n; ++j) {
      if (obstacleGrid[i][j] == 1) {
        cur[i][j] = 0
      } else if (j - 1 >= 0 && obstacleGrid[i][j - 1] == 0) {
        cur[i][j] += cur[i][j - 1];
      }
    }
  }
  return cur[m - 1][n - 1]
}
// 牛客网中字符串的输入和输出
var line1 = readline().split(" ");
var m = parseInt(line1[0])
var n = parseInt(line1[1])
console.log(m);
console.log(n);
var matrix = Array(m).fill(Array(n).fill(0))
for (var j = 0; j < m; j++) {
  lines = readline().split(" ")
  for (var k = 0; k < lines.length; k++) {
    matrix[j][k] = parseInt(lines[k]);
  }
}