// 顺序计算的方式解答
function count(str) {
  if (!str || str == '')
    return 0
  var s = str.match(/./g);
  var cur = s[s.length - 1] == '0' ? 0 : 1;
  var next = 1;
  var tmp = 0;
  for (var i = s.length - 2; i >= 0; i--) {
    if (s[i] == '0') {
      next = cur;
      cur = 0;
    } else {
      tmp = cur;
      // 两位数的时候判断是不是超出界限,
      if (parseInt(s[i] * 10) + parseInt(s[i + 1]) < 27) {//没有超出p(i)=p(i+1)+p(i+2)
        cur += next;
      }
      // 超出p(i)=p(i+1),一位数的情况
      next = tmp;
    }
  }
  return cur
}
var str = '1111'
console.log(count(str));