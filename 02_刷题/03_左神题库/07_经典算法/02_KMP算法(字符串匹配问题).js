// next数组存放的是当前字符之前的最长前缀的长度
/**
 * 最长前缀的长度不超过i-1
 */
// 获取next数组,和match长度相等,,求match对应的next数组
function getNext(match) {
  if (match.length == 1) {
    return [-1]
  }
  var next = new Array(match.length);
  //第一个和第二个是人为规定的
  next[0] = -1;
  next[1] = 0;
  var pos = 2;//pos表示下标索引
  var cn = 0;//当前字符最长前缀的下一个字符,match中第cn个字符,next[cn]就是最长前缀和后缀匹配的长度
  while (pos < next.length) {
    if (match[pos - 1] == match[cn]) {
      // 如果当前字符的前一个字符和最长前缀子串的下一个字符相等,长度加1
      next[pos++] = ++cn;
    } else if (cn > 0) {
      cn = next[cn];//如果不相等,cn继续往前跳
    } else {
      next[pos++] = 0;//cn跳出还没有找到,表示不存在
    }
  }
  return next;
}
// 通过next加速
function getIndexOf(str, match) {
  if (!str || str.length < 1 || !match || match.length < 1) {
    return -1
  }
  var s = str.match(/./g);
  var m = match.match(/./g);
  var si = 0;
  var mi = 0;
  var next = getNext(m);
  while (si < s.length && mi < m.length) {
    if (s[si] == m[mi]) {//当前值相等,二者同时向前移动
      si++;
      mi++;
    } else if (next[mi] == -1) {//mi的最长子串已经出去了,str向前移动si++
      si++
    } else {
      mi = next[mi]//mi的最长子串没有出去,mi跳到最长子串的最后位置
    }
  }
  return mi == m.length ? si - mi : -1;
}
var str = '123aaaabc1abc1'
var match = 'abc1'
// console.log(getNext(match));
console.log(getIndexOf(str, match));