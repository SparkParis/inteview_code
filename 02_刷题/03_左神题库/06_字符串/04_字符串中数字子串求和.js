//数字串中的数字求和
function numSum(str) {
  if (!str) {
    return 0;
  }
  var s = str.match(/./g);
  var num = 0;//接收连续的子串数字
  var res = 0;//num累加的和
  var posi = true;//判断当前字符是不是符号'-',连续出现偶数次表示正数,连续出现奇数次表示负数
  var cur = 0;//表示当前字符
  var reg = new RegExp(/[0-9]/);//判断当前字符是不是数字
  for (var i = 0; i < s.length; i++) {
    cur = reg.test(s[i]) ? parseInt(s[i]) : s[i];
    if (typeof cur == 'string') {//当前字符非数字时相加,此时得到的num值是连续的数字子串
      res += num;
      num = 0;//不是字符的时候累加之后都要
      if (s[i] == '-') {
        if (i - 1 > -1 && s[i - 1] == '-') {//前面的字符是符号'-'posi变为相反
          posi = !posi//多个'-'的情况
        } else {
          posi = false;//单个表示是负数
        }
      } else {
        posi = true;
      }
    } else {
      num = num * 10 + (posi ? cur : -cur);
    }
  }
  // 最后一个如果是数字需要添加
  res += num;
  return res
}
console.log(numSum('A2B4BDDX-23A45'));//2+4-23+45=18


