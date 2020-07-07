// 导入partition中的荷兰方法
const { swap } = require('./07_数组划分partition');
function partition(arr, L, R) {
  var less = L - 1;
  var more = R + 1;
  var cur = L;
  var num = arr[R]
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
function quickSort(arr, L, R) {
  // L<R的时候才有有排序
  if (L < R) {
    //base的选择优化,随机的选择arr中的下标和最后一个位置交换
    swap(arr, parseInt(Math.random() * (R - L + 1)) + L, R)
    //注意这里快排通过最后一个元素作为base=num
    const curRange = partition(arr, L, R);
    //相等值的下届开始
    quickSort(arr, L, curRange[0] - 1);
    // 相等值的上届开始
    quickSort(arr, curRange[1] + 1, R)
  }
}

const arr = [4, 3, 5, 6, 2, 7, 3]
quickSort(arr, 0, arr.length - 1)
console.log(arr);
