// 方案1
function count(n) {
  var res = 0
  while (n != 0) {
    res += n & 1;
    n >>> 1;
  }
  return res
}

// 方案2
function count2(n) {
  var res = 0;
  while (n != 0) {
    n &= (n - 1);//进行几次抹0的操作就有几个1
    res++;
  }
  return res
}
// 方案3
function count3(n) {
  var res = 0;
  while (n != 0) {
    n -= n & (~n + 1);
    res++;
  }
  return res
}