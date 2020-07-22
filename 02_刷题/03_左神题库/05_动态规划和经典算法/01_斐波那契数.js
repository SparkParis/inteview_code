// 1.暴力破解法f(n) = f(n-1)+f(n-2),时间复杂度2的n次方
function facci(n) {
  if (n < 1) {
    return 0;
  }
  if (n == 1 || n == 2) {
    return 1;
  }
  return facci(n - 1) + facci(n - 2);
}
// 2.时间复杂度O(N)的方法,通过依次计算每一项的值,知道求出第n项的值
function facci2(n) {
  if (n < 1) return 0;
  if (n == 1 || n == 2) {
    return 1
  }
  var pre = 1;
  var res = 1;
  var tmp = 0;
  for (var i = 3; i <= n; i++) {
    tmp = res;
    res = res + pre;
    pre = tmp;
  }
  return res;
}
// 3.时间复杂度O(logN),矩阵乘法的解法
function f3(n) {
  if (n < 1) {
    return 0
  }
  if (n == 1 || n == 2) {
    return 1;
  }
  var base = [[1, 1], [1, 0]]
  var res = matrixPower(base, n - 2);
  // (f1,f2)=[1,1],第一列加和就是fn的结果
  return res[0][0] + res[1][0]

}
// 矩阵乘法,求矩阵m的p次方
function matrixPower(m, p) {
  //先声明行的长度,注意这里初始化的是一个单位矩阵
  var res = new Array(m.length);
  for (var i = 0; i < m.length; i++) {
    res[i] = new Array(m[0].length);
    for (var j = 0; j < m[0].length; j++) {
      if (i != j)
        res[i][j] = 0;
      else
        res[i][j] = 1
    }
  }
  var tmp = m;
  for (; p != 0; p >>= 1) {
    if ((p & 1) != 0) {//表示p为1的时候进行乘法运算
      res = multiMatrix(res, tmp);
    }
    tmp = multiMatrix(tmp, tmp)
  }
  return res
}
// 连个矩阵相乘
function multiMatrix(m1, m2) {
  // 注意这里初始化只能通过new的方式进行初始化,fill方法会同步进行修改,这里需要注意m1内部不是数组的情况
  var res = new Array(m1.length);
  for (var i = 0; i < res.length; i++) {
    res[i] = new Array(m2[0].length);
    for (var j = 0; j < m2[0].length; j++) {
      res[i][j] = 0;
    }
  }
  for (var i = 0; i < res.length; i++) {
    for (var j = 0; j < m2[0].length; j++) {
      for (var k = 0; k < m2.length; k++) {
        res[i][j] += m1[i][k] * m2[k][j]
      }
    }
  }
  return res
}


console.log(f3(8));
console.log(facci(8));
// console.log(facci2(8));
// console.log(Array(3).fill(Array(4).fill(0)));该方法修改一个另外一个变量也会受到影响,建议使用new的方式进行创建
