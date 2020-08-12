
function isSubStr(str, target) {
  if (str.length < target.length) return false
  var i = 0;
  var j = 0;
  while (i < str.length && j < target.length) {
    if (str[i] == target[j]) {
      i++;
      j++;
    } else {
      i++;
    }
  }
  return j == target.length ? true : false
}

var findLongestWord = function (s, d) {
  var res = [];
  if (!s) return '';
  for (var item of d) {
    if (isSubStr(s, item)) {
      res.push(item);
    }
  }
  res.sort();
  var max = res.length ? res[0] : '';
  for (var i = 0; i < res.length; i++) {
    max = res[i].length > max.length ? res[i] : max;
  }
  return max
};
// console.log(isSubStr('abccccd', 'acda'));
var s = "abpcplea", d = ["ale", "apple", "monkey", "plea"]
console.log(findLongestWord(s, d));