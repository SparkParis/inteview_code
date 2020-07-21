// // 字符串中常用的方法
// var str = 'sffhhhrfddssf';
// // str.charAt(num)获取指定位置的字符
// console.log(str.charAt(3), `charAt`);
// // str.charCodeAt(num)返回指定位置字符的字符编码
// console.log(str.charCodeAt(3));
// // String.fromCharCode()将多个字符编码转化为字符
// console.log(String.fromCharCode(104))
// // str.charCodeAt()将字符转化为字符编码
// var sum = parseInt('f'.charCodeAt() + 's'.charCodeAt())
// var sum1 = parseInt('fs')
// console.log(sum)
// console.log('c'.charCodeAt())
// console.log(parseInt('c', 36))
// console.log(parseInt('a', 36))
// console.log(parseInt('b', 36))
// console.log(String.fromCharCode(11))
// console.log('c'.charCodeAt())
// console.log('a'.charCodeAt())
function addString(str1, str2) {
  if (!str1 && !str2) return ''
  if (!str1) return str2;
  if (!str2) return str1;
  var res = []
  var stack1 = [];
  var Stack2 = [];
  var len1 = str1.length;
  var len2 = str2.length;
  while (len1) {
    stack1.push(str1[len1--])
  }
  while (len2) {
    Stack2.push(str2[len2--])
  }
  while (stack1.length && Stack2.length) {
    var pop1 = stack1.pop();
    pop1 = isStr(pop1) ? parseInt(pop1, 36) : pop1
    var pop2 = Stack2.pop();
    pop2 = isStr(pop2) ? parseInt(pop2, 36) : pop;
    var sum = pop1 + pop2;
    if (sum < 10) {
      res.unshift(sum);
    } else {
      res.unshift(String.fromCharCode(sum - 9 + 96))//97unicode中字母a的编号
    }
  }
  while (stack1.length) {
    res.unshift(stack1.pop())
  }
  while (stack2.length) {
    res.unshift(stack2.pop())
  }
  return res.join('')
}
function isStr(val) {
  if (val.test(/[a-z]/)) {
    return true
  }
  return false
}
// console.log(parseInt('e', 36))
// console.log(parseInt('e', 36) + 5)
// console.log(String.fromCharCode(19 - 9 + 96))



