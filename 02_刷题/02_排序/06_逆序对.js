
// 2.归并排序来解决逆序对的问题
function reversePair(arr) {
  if (arr == null || arr.length < 2) {
    return 0
  }
  return mergeSort(arr, 0, arr.length - 1)
}
//子数组排序
function mergeSort(arr, left, right) {
  //递归终止的条件
  if (left == right) {
    return 0
  }
  var mid = (left + right) >> 1;
  return mergeSort(arr, left, mid) +
    mergeSort(arr, mid + 1, right) +
    merge(arr, left, mid, right)


}
//归并
function merge(arr, left, mid, right) {
  var temp = []
  leftIndex = mid;
  rightIndex = right;
  //暂存数组的长度
  tempIndex = right - left;
  //保存逆序数
  var count = 0
  while (leftIndex >= 0 && rightIndex > mid) {
    //较大的数归并,改变指针的走向,注意这里的条件和小和问题相反,取左边的大于右边的,才构成逆序,这里归并的是大的数,和归并排序的不同之处
    count += arr[leftIndex] > arr[rightIndex] ? (rightIndex - mid) : 0;

    temp[tempIndex--] = arr[leftIndex] > arr[rightIndex] ? arr[leftIndex--] : arr[rightIndex--]
  }
  //长出来的部分直接添加到最后
  while (leftIndex >= 0) {
    temp[tempIndex--] = arr[leftIndex--];
  }
  while (rightIndex > mid) {
    temp[tempIndex--] = arr[rightIndex--];
  }
  //通过循环将temp保存在arr
  for (var i = 0; i < temp.length; i++) {
    // 注意从left的位置开始重新复值给arr
    arr[left++] = temp[i];
  }
  //返回计算的逆序对数
  return count
}
var arr = [3, 1, 4, 2, 5]
console.log(reversePair(arr));

