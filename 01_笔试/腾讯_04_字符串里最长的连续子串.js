/**
 * 这里指的是aabbbbbcc->bbbbb重复的连续子串
 * 注意这里是连续的,所以在map中只用保存一个
*/
function foo(s) {
  if (!s || s.length < 2) return s
  //通过空间换时间的方式
  var map = {}
  for (var i = 0; i < s.length; i++) {
    if (i + 1 < s.length) {
      if (s[i] == s[i + 1]) {
        map[s[i]] = map[s[i]] ? ++map[s[i]] : 2;//这里等于2是为了处理第一个元素和第二个元素相同的情况
      } else {
        map[s[i + 1]] = 1
      }
    }

  }
  console.log(map, 123)
  var targetCount = 0
  var target = null;
  for (item in map) {
    if (map[item] > targetCount) {
      targetCount = map[item]
      target = item
    }
  }
  return target.repeat(targetCount)

}
var s = 'aaabbbbcccccddd'
console.log(foo(s));
/**
 * { a: 3, b: 4, c: 4, d: 3 } 123
bbbb
 */

