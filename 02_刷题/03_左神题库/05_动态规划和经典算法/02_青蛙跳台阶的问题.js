// 1暴力
function s1(n) {
  if (n < 1) return 0
  if (n == 1 || n == 2) return n
  return s1(n - 1) + s1(n - 2)
}
// 2顺序求解
function s2(n) {
  if (n < 1) return 0
  if (n == 1 || n == 2) return n
  var pre = 1;
  var res = 2;
  var tmp = 0
  for (var i = 3; i <= n; i++) {
    tmp = res;
    res = res + pre;
    pre = tmp;
  }
  return res
}
// 3.矩阵求解
function s3(n) {
  if (n < 1) return 0;
  if (n == 1 || n == 2) return n;
  var base = [[1, 1], [1, 0]]
  var res = matrixPower(base, n - 2);
  // (f2,f1)=[2,1]
  return 2 * res[0][0] + res[1][0];

}
// 矩阵的p次方
function matrixPower(m, p) {
  // 初始化单位矩阵
  var res = new Array(m.length);
  for (var i = 0; i < res.length; i++) {
    res[i] = new Array(m[0].length)
    for (var j = 0; j < m[0].length; j++) {
      res[i][j] = i == j ? 1 : 0
    }
  }
  var tmp = m;
  for (; p != 0; p >>= 1) {
    if ((p & 1) != 0) {
      res = mutiMatrix(res, tmp)
    } else {
      tmp = mutiMatrix(tmp, tmp);
    }
  }
  return res
}
// 两个矩阵相乘
function mutiMatrix(m1, m2) {
  // 矩阵初始化为0
  var res = new Array(m1.length);
  for (var i = 0; i < res.length; i++) {
    res[i] = new Array(m2[0].length);
    for (var j = 0; j < m2[0].length; j++) {
      res[i][j] = 0
    }
  }
  //矩阵相乘
  for (var i = 0; i < m1.length; i++) {
    for (var j = 0; j < m2[0].length; j++) {
      for (var k = 0; k < m2.length; k++) {
        res[i][j] += m1[i][k] * m2[k][j]
      }
    }
  }
  return res
}
// console.log(s1(6));
console.log(s2(6));
console.log(s3(6));
// var arr1 = [[1, 1], [1, 0]]
// console.log(mutiMatrix(arr1, arr1));
// console.log(matrixPower(arr1, 1));