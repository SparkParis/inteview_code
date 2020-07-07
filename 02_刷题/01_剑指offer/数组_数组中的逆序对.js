function InversePairs(data) {
  return mergeSort(data, 0, data.length - 1, []) % 1000000007;
}
/*
arr:需要遍历的数组
start:合并的开始位置
end:合并的结束位置
temp:保存归并排序的结果(从大数到小数排序的)
*/
function mergeSort(arr, left, right, temp) {
  //拆分
  if (left < right) {
    var mid = left + right >> 1;
    var l = mergeSort(arr, left, mid, temp)
    var r = mergeSort(arr, mid + 1, right, temp)

    //合并操作
    var leftIndex = mid;
    var rightIndex = right;
    //合并的时候是两个数组合并,每次合并都把最大的值归并到temp数组中,temp数组长度时数组arr的长度tempIndex
    var tempIndex = right;
    var count = 0

    //遍历数组计算count和保存两侧的最大值到temp
    while (leftIndex >= left && rightIndex > mid) {
      //依次从后后往前比较
      if (arr[leftIndex] > arr[rightIndex]) {
        // 左边的大, 保存左边的值,同时count+=插值(已经递归排序了插值就是逆序对数)
        count += (rightIndex - mid);
        temp[tempIndex--] = arr[leftIndex--];
      } else {
        //右边的大保存右边的值
        temp[tempIndex--] = arr[rightIndex--];
      }
    }
    //如果跳出循环,左边的数值大,将左边的直接添加到temp中
    while (leftIndex >= left) {
      temp[tempIndex--] = arr[leftIndex--]
    }
    //右边还有数组则右边直接添加到temp中
    while (rightIndex > mid) {
      temp[tempIndex--] = arr[rightIndex--];
    }
    //将暂存在temp中的归并排序的值修改arr
    var tempIndex = 0;
    for (var i = left; i <= right; i++) {
      arr[i] = temp[i]
    }
    //返回排序好的count,同时数组arr的改变也是
    return count + l + r;
  }
  return 0
}
module.exports = {
  InversePairs: InversePairs
};