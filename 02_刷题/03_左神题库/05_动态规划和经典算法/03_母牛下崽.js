
// 1.暴力
function c1(n) {
  if (n < 1) return 0
  if (n == 1 || n == 2 || n == 3) return n
  return c1(n - 1) + c1(n - 3)
}

// 3.矩阵乘法
function c3(n) {
  if (n < 1) return 0
  if (n == 1 || n == 2 || n == 3) return n
  var base = [[1, 1, 0], [0, 0, 1], [1, 0, 0]]
  var res = matrixPower(base, n - 3)
  // [f3,f2,f1]=[3,2,1]
  return 3 * res[0][0] + 2 * res[1][0] + res[2][0]
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
console.log(c1(5));
console.log(c3(5));