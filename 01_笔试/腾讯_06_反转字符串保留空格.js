function reverse(str) {
  if (!str) return '';
  if (str.length < 2) return str
  var stack = [];
  str = str.split(/\s/);
  for (var i = str.length - 1; i >= 0; i--) {
    stack.push(str[i]);
  }
  return stack.join(' ');
}
var str = 'hello wor  ld';
var str1 = ''
str1 = ' b c '
str1 = ' b'
str1 = '   '
console.log(str1.length);
console.log(reverse(str1).length);