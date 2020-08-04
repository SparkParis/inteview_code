// 判断s2是不是s1的旋转词
function isRotation(s1, s2) {
  if (!s1 || !s2 || s1.length != s2.length) {
    return false
  }
  var s1 = s1 + s1
  var index = getIndexOf(s1, s2);//kmp算法
  return index == -1 ? false : true
}
function getNext(match) {
  if (match.length == 1) {
    return [-1]
  }
  var next = new Array(match.length);
  next[0] = -1;
  next[1] = 0;
  var pos = 2;
  var cn = 0;//前一个字符对应的最长前缀的最后一个字符
  while (pos < next.length) {
    if (match[pos - 1] == match[cn]) {
      next[pos++] = ++cn;
    } else if (cn > 0) {
      cn = next[cn];
    } else {
      next[pos++] = 0
    }
  }
  return next
}
function getIndexOf(s, match) {
  if (!s || s.length < 1 || !match || match.length < 1) {
    return -1
  }
  var si = 0;
  var mi = 0;
  var next = getNext(match);
  console.log(next);
  while (si < s.length && mi < match.length) {
    if (s[si] == match[mi]) {
      si++;
      mi++
    } else if (next[mi] == -1) {//最长串出去了,
      si++
    } else {
      mi = next[mi]//mi相同子串的最后位置
    }
  }
  return mi == match.length ? si - mi : -1
}
console.log(isRotation('abcd123', 'cd123ab'));