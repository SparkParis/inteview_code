/**
 * 给定一个非空字符串 s，最多删除一个字符。判断是否能成为回文字符串。
 */
function validPalindrome(s) {
  if (!s) return true
  var left = 0;
  var right = s.length - 1;
  while (left < right) {
    if (s[left] == s[right]) {
      left++;
      right--;
    } else {
      return isValid(s, left + 1, right) || isValid(s, left, right - 1);
    }
  }
  return true
}
function isValid(s, i, j) {
  while (i < j) {
    if (s[i] == s[j]) {
      i++;
      j--;
    } else {
      return false;
    }
  }
  return true
}
var s = "cbaxbcc"
console.log(validPalindrome(s));