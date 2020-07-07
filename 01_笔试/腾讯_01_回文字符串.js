
//判断字符串是不是回文字符串
function isTrue(s) {
  if (!s) return true
  var left = 0;
  var right = s.length - 1;
  while (left < right) {
    if (s[left] != s[right]) {
      return false
    }
    left++;
    right--
  }
  return true
}