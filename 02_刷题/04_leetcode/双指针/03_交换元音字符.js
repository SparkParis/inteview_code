var reverseVowels = function (s) {
  if (!s) return '';
  var dict = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];//
  var i = 0;
  var j = s.length - 1;
  var res = new Array(s.length);//存储数据,从两头开始遍历
  while (i < j) {
    if (!dict.includes(s[i])) {
      res[i++] = s[i];
    } else if (!dict.includes(s[j])) {
      res[j--] = s[j];
    } else {
      res[i++] = s[j];
      res[j--] = s[i]
    }

  }
  return res
};
var s = 'hello'
console.log(reverseVowels(s));