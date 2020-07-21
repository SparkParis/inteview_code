//十进制转k进制
function getKsysFromNum(value, k) {
  //通过32位保存k进制的数
  var res = new Array(32);
  var index = 0
  while (value != 0) {
    res[index++] = value % k;
    value = value / k;
  }
  return res
}
// k进制转化为十进制
function getNumFromKsys(eo, k) {
  var res = 0;
  for (var i = eo.length - 1; i > -1; i--) {
    res = eo[i] + res * k;
  }
  return res;
}
// 异或计算函数
function setExclusiveOr(eo, value, k) {
  var curK = getKsysFromNum(value, k);
  for (var i = 0; i < eo.length; i++) {
    eo[i] = (eo[i] + curK[i]) % k;//每个位异或,eo是两个数异或的结果
  }
}
//计算只出现一次的结果
function printOneTime(arr) {
  var eo = new Array(32);
  for (var i = 0; i < arr.length; i++) {
    setExclusiveOr(eo, arr[i], k)
  }
  var res = getNumFromKsys(eo, k);//将最后的结果右k进制转化为十进制
  return res
}