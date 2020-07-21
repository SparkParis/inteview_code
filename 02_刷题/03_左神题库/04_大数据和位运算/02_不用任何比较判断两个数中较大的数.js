// 如果n为1返回0,如果n为0返回1
function flip(n) {
  return n ^ 1;//注意这里是异或运算
}
// 正数或者0返回1,负数返回0
function sign(n) {
  // 正数 -> n>>31 00000000 ,flip->00000001
  // 负数-> n>>31 00000001,flip->00000000
  return flip(n >> 31) & 1;
}
function getMax(a, b) {
  var c = a - b;
  var sa = sign(a)
  var sb = sign(b);
  var sc = sign(c);
  var diffSab = sa ^ sb;//符号相同返回0,不同返回1
  var SamSab = flip(diffSab);//相同返回1,不同返回0
  var returnA = diffSab * sa + SamSab * sc;//返回a的两种情况
  var returnB = flip(returnA);//返回b的两种情况
  return returnA * a + returnB * b
}
