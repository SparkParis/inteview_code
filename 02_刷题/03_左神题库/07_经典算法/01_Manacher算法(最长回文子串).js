// 字符串都添加辅助字符函数
function manacheString(str) {
  var charArr = str.match(/./g);
  var res = new Array(str.length * 2 + 1);
  var index = 0;
  for (var i = 0; i != res.length; i++) {
    res[i] = (i & 1) == 0 ? '#' : charArr[index++];
  }
  return res;
}

function maxLcpsLength(str) {
  if (str == null || str.length == 0) return null;
  var charArr = manacheString(str);
  var pArr = new Array(charArr.length);
  var index = -1;
  var pR = -1;
  var max = Number.MIN_VALUE;
  for (var i = 0; i != charArr.length; i++) {
    pArr[i] = pR > i ? Math.min(pArr[2 * index - i], pR - i) : 1;
    while (i + pArr[i] < charArr.length && i - pArr[i] > -1) {
      if (charArr[i + pArr[i]] == charArr[i - pArr[i]]) {
        pArr[i]++
      } else
        break
    }
    if (i + pArr[i] > pR) {
      pR = i + pArr[i];
      index = i
    }
    max = Math.max(max, pArr[i])
  }
  return max - 1
}
var str = '12343214'
console.log(maxLcpsLength(str));