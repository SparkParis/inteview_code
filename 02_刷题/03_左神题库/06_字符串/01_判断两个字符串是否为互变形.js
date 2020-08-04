// 字符串总出现的种类和个数都一样称为变形词
function isChange(s1, s2) {
  if (!s1 || !s2 || s1.length != s2.length) {
    return false
  }
  var map = {};
  var i = s1.length - 1;
  var j = s2.length - 1
  while (i >= 0 && j >= 0) {
    if (!map[s1[i]]) {
      map[s1[i]] = 1
    } else {
      map[s1[i]]++
    }
    if (!map[s2[j]]) {
      map[s2[j]] = -1
    } else {
      map[s2[j]]--
    }
    i--;
    j--;
  }

  console.log(map);
  console.log(Object.values(map));
  for (var item in map) {
    if (map[item] != 0) {
      return false
    }
  }
  return true
}
var str1 = 'abc'
var str2 = 'adb'
console.log(isChange(str1, str2));