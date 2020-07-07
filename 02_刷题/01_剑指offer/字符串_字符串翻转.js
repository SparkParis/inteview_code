//1.翻转单词顺序,
function ReverseSentence(str) {
  if (str) {
    return str.split(' ').reverse().join(' ')
  }
  return ''
}
// console.log(ReverseSentence("I am a student."));

// 2.左旋转字符串
function LeftRotateString(str, n) {
  // write code here
  if (str && n) {
    //字符串拼接并且进行截取str.length长度
    return (str + str).slice(n, str.length + n)
  }
  return ''
}
console.log(LeftRotateString('abcXYZdef', 2))

