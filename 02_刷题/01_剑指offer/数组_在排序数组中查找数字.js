//二叉查找法
function binaryTree(data, arr, start, end) {
  if (start > end) {
    return -1
  }
  var mid = Math.floor((end + start) / 2);
  if (data == arr[mid]) {
    return mid
  } else if (data > arr[mid]) {
    return binaryTree(data, arr, mid + 1, end)
  } else {
    return binaryTree(data, arr, start, mid - 1)
  }
}