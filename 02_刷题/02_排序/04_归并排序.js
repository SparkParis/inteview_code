// 2.归并排序
function mergeSort(arr) {
  if (arr == null || arr.length < 2) {
    return
  }
  sortProcess(arr, 0, arr.length - 1)
}
//子数组排序
function sortProcess(arr, left, right) {
  if (left == right) {
    return
  }
  var mid = parseInt((left + right) / 2);
  sortProcess(arr, left, mid)
  sortProcess(arr, mid + 1, right)
  merge(arr, left, mid, right)

}
//归并
function merge(arr, left, mid, right) {
  var temp = []
  leftIndex = left;
  rightIndex = mid + 1;
  while (leftIndex <= mid && rightIndex <= right) {
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
}
var arr = [3, 4, 2, 5]
mergeSort(arr, 0, arr.length - 1)
console.log(arr);

