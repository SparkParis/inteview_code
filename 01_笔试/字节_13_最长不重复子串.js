/**
 * 给定一个字符串，找出不含有重复字符的 最长子串
给定 “abcabcbb” ，没有重复字符的最长子串是 “abc” ，
给定 “bbbbb” ，最长的子串就是 “b” ，
给定 “pwwkew” ，最长子串是 “wke”
请注意答案必须是一个子串，
“pwke” 是 子序列 而不是子串。
 */
function foo(str) {
  if (!str) return ''
  str = str.match(/./g);
  var len = str.length;
  var max = 0;
  var i = 0;
  var j = 0;
  var set = new Set();
  var res = [];
  while (i < len && j < len) {
    if (!set.has(str[j])) {
      set.add(str[j++]);
      if (max >= (j - i)) {
        continue;
      } else {
        max = j - i;
        res = [i, j];
      }
    } else {
      set.delete(str[i++]);
    }
  }
  return str.slice(res[0], res[1]).join('')
}
var str = 'pwwkew';
console.log(foo(str));