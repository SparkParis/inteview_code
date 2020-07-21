// 加法实现=无进位相加+进位相加(直到进位为0)
function add(a, b) {
  var sum = a;
  while (b != 0) {
    sum = a ^ b;
    b = (a & b) << 1;//b表示进位相加的结果
    a = sum;//a表示最终相加的结果
  }
  return sum
}
//取反+1,补码的计算
function negNum(n) {
  return add(~n, 1)
}
//减法,a+(b的补码)
function subtraction(a, b) {
  return add(a, negNum(b))
}