//1. 通过递归实现求解最大值
/*
递归实现的过程就是不断压栈的过程,每次递归都会将所有的数据都压入栈中,还原现场
*/
function getMax(arr, start, end) {
  if (start == end) {
    //当只有一个数的时候,此时直接返回
    return arr[start]
  }
  // 求左右两边的最大值,然后进行不断划分
  var mid = parseInt((start + end) / 2)
  var left = getMax(arr, start, mid)
  var right = getMax(arr, mid + 1, end)
  //返回两边的最大值
  return Math.max(left, right)
}


