//1.大于num的值放在左边,小于num的值放在右边
/*
arr:划分的数组
L:划分的起始位置
num:比较的数字
*/
function swap(arr, i, j) {
  var temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;

}
function partionTwo(arr, num) {
  var less = - 1;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < num) {
      swap(arr, ++less, i)
    }
  }
  return arr
}
var arr = [4, 3, 5, 6, 2, 7, 3]
// console.log(partionTwo(arr, 5));

// 2.荷兰国旗问题(划分为三部分)
function partionThree(arr, L, R, num) {
  var less = L - 1;
  var more = R + 1;
  var cur = L;
  while (cur < more) {
    if (arr[cur] < num) {
      swap(arr, ++less, cur++)
    } else if (arr[cur] > num) {
      // 注意这里cur不能移动,还要和左边的比较当前值
      swap(arr, --more, cur)
    } else {
      cur++
    }
  }
  //返回的是等于num的子数组的下标志起始位置和终止位置
  return [less + 1, more - 1]
}
// console.log(partionThree(arr, 0, arr.length - 1, 5))

module.exports = {
  partionThree,
  swap
}