// 求括号是否匹配的问题
function isValid(s) {
  //借助一个栈
  var temp = [];
  if (!s || s.length < 2) {
    return false
  }
  for (var i = 0; i < s.length; i++) {
    if (s[i] == '{' || s[i] == '[' || s[i] == '(') {
      temp.push(s[i])
    }
    var cur = temp[temp.length - 1];
    if ((cur == '(' && s[i] == ')') || (cur == '{' && s[i] == '}') || (cur == '[' && s[i] == ']')) {
      //和后面的第一个对比满足从栈中弹出
      temp.pop();
    }
  }
  //循环执行结束之后,如果当前的栈不为空说明字符串不匹配,反之匹配成功
  if (temp.length > 0) {
    return false
  }
  return true
}
console.log(isValid('[]{}'));// true
console.log(isValid('[]()'));// true
console.log(isValid('[({})]'));// true
console.log(isValid('[](]'));// false
