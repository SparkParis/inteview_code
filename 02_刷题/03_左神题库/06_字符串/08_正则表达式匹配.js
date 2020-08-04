/*
请实现一个函数用来匹配包括'.'和''的正则表达式。 模式中的字符'.'表示任意一个字符，而''表示它前面的字符可以出现任意次（包含0次）。 在本题中，匹配是指字符串的所有字符匹配整个模式。 例如，字符串"aaa"与模式"a.a"和"abaca"匹配，但是与"aa.a"和"ab*a"均不匹配。
*/
function match(s, pattern) {
  if (s == undefined || pattern == undefined) {
    return false;
  }
  return matchStr(s, pattern, 0, 0);
}

function matchStr(s, pattern, sIndex, patternIndex) {
  if (sIndex === s.length && patternIndex === pattern.length) {
    return true;
  }
  if (sIndex !== s.length && patternIndex === pattern.length) {
    return false;
  }
  if (patternIndex + 1 < pattern.length && pattern[patternIndex + 1] === '*') {
    if (sIndex < s.length && (s[sIndex] === pattern[patternIndex] || pattern[patternIndex] === '.')) {
      return matchStr(s, pattern, sIndex, patternIndex + 2) ||
        matchStr(s, pattern, sIndex + 1, patternIndex + 2) ||
        matchStr(s, pattern, sIndex + 1, patternIndex);
    } else {
      return matchStr(s, pattern, sIndex, patternIndex + 2)
    }
  }
  if (sIndex < s.length && (s[sIndex] === pattern[patternIndex] || pattern[patternIndex] === '.')) {
    return matchStr(s, pattern, sIndex + 1, patternIndex + 1)
  }
  return false;
}