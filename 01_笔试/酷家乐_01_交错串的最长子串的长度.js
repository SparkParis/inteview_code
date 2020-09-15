/**
 *交错串:字符串任意两个位置的字符都是不一样,
 有一个01串s需要找出最长的连续子串,这个连续串是一个01交错串
 输出给定字符串的最长的交错串个数
 */
function getMaxSubStr(s) {
  let max = 1;
  let total = 1;
  for (let i = 1; i < s.length; i++) {
    if (parseInt(s[i]) ^ parseInt(s[i - 1])) {
      total++;
    } else {
      max = total > max ? total : max;
      total = 1;
    }
  }
  max = total > max ? total : max;
  return max;
}
let s = '111101111';
console.log(getMaxSubStr(s));