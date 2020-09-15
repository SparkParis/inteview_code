/**
 * 题目:给定n*m的网格,每个格子上有三个概率pd,ps,pr
 */

var n = parseInt(readline());
var m = parseInt(readline());
var d, r, s;
function G(i, j) {
  return m * (i - 1) + j;
}

for (var i = 1; i <= n; i++) {
  while (m = readline()) {
    var tmp = m.split('');
    while (tmp.length > 0) {
      for (var j = 1; j <= m; j++) {
        d[G(i, j)] = tmp.shift();
        r[G(i, j)] = tmp.shift();
        s[G(i, j)] = tmp.shift();
      }
    }
  }
}
//动态规划递推式dp[G(i,j)]=(dp[G(i+1,j)]*d[G(i,j)]+dp[G(i,j+1)]*r[G(i,j)]+1)/(1.0-s[G(i,j)]);
function getExpectStep(n, m, d, r) {
  var dp = new Array(1000);
  for (var i = n; i >= 1; i--) {
    for (var j = m; j >= 1; j--) {
      if (i == n && j == m) continue;
      dp[G(i, j)] = (dp[G(i + 1, j)] * d[G(i, j)] + dp[G(i, j + 1)] * r[G(i, j)] + 1) / (1.0 - s[G(i, j)]);

    }
  }
  return dp[G(1, 1)];
}
console.log(getExpectStep(n, m, d, r));
