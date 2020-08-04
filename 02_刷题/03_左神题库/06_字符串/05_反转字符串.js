// 1.借助栈
function reverseStr(str) {
  if (!str) return '';
  if (str.length < 2) return str
  var stack = [];
  str = str.split(/\s/);//拆分为字符数组,通过栈逆序,通过空格进行链接
  for (var i = str.length - 1; i >= 0; i--) {
    stack.push(str[i]);
  }
  return stack.join(' ');
}
// 2.单词逆序->整体逆序
function reverseStr2(str) {
  if (!str) return ''
  return str.split(' ').reverse().join(' ');//借助数组逆序
}
console.log(reverseStr2('hello world'));