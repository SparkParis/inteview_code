//这里借助归并排序来解决小和问题

// 2.小数和
function smallSum(arr) {
  if (arr == null || arr.length < 2) {
    return 0
  }
  return mergeSort(arr, 0, arr.length - 1)
}
//子数组排序
function mergeSort(arr, left, right) {
  if (left == right) {
    return 0
  }
  var mid = parseInt((left + right) / 2);
  return mergeSort(arr, left, mid) +
    mergeSort(arr, mid + 1, right) +
    merge(arr, left, mid, right)

}
//归并
function merge(arr, left, mid, right) {
  var temp = []
  leftIndex = left;
  rightIndex = mid + 1;
  // 保存小数和
  var result = 0;
  while (leftIndex <= mid && rightIndex <= right) {
    // 归并排序相比多的代码来保存小数和
    result += arr[leftIndex] < arr[rightIndex] ? (right - rightIndex + 1) * arr[leftIndex] : 0;
    temp.push(arr[leftIndex] < arr[rightIndex] ? arr[leftIndex++] : arr[rightIndex++])
  }
  //长出来的部分直接添加到最后
  while (leftIndex <= mid) {
    temp.push(arr[leftIndex++])
  }
  while (rightIndex <= right) {
    temp.push(arr[rightIndex++]);
  }
  //通过循环将temp保存在arr
  for (var i = 0; i < temp.length; i++) {
    // 注意从left的位置开始重新复值给arr
    arr[left++] = temp[i];
  }
  //后面还要返回值
  return result
}
var arr = [1, 3, 4, 2, 5]
console.log(smallSum(arr));

