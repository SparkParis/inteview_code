// 打印只出现一次奇数的数,
function printOddTimeOne(arr) {
  var eo = 0;
  while (arr.length) {
    eo ^= arr[--arr.length]
  }
  return eo
}
// 打印出现两次奇数的数
function printOddTimeTwo(arr) {
  var eo = 0;
  var eohasone = 0;
  while (arr.length) {
    eo ^= arr[--arr.length];
  }
  //取eo最右边为1的数(其他位为0)
  var rightOne = eo & (~e0 + 1);//11101000->00001000(最右边为1的数假设第k位)
  //遍历数组和第k位为1的数进行异或操作
  var index;
  while (arr.length) {
    index = --arr.length
    if (arr[index] & rightOne != 0)//同为1返回1
    {
      eohasone ^= arr[index];//最终返回值就是两个奇数中的一个
    }
  }
  var other = eo ^ eohasone
  return [eohasone, other]
}