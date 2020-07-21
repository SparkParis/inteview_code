// 排序后的数组，a+b=N(数值)
/*
排序数组借助两个指针
*/
function getK(arr, k) {
  if (!arr || k < 0) return null;
  var left = 0;
  var right = arr.length - 1
  while (left < right) {
    var sum = arr[left] + arr[right];
    if (sum > k) {
      right--
    } else if (sum < k) {
      left++
    } else {
      return [arr[left], arr[right]];
    }
  }
  return null
}