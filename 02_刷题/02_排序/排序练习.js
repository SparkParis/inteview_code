const { min, merge } = require("lodash");

//插入排序
function swap(arr, i, j) {
  var temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp
}
function insert(arr) {
  if (arr == null || arr.length < 2) return
  //两层循环,外层1到n-1递增(界定有序的边界),内层i-1到0递减(从后到前比较是否有序)
  for (var i = 1; i < arr.length; i++) {
    for (var j = i - 1; j >= 0 && arr[j] > arr[j + 1]; j--) {
      swap(arr, j, j + 1);
    }
  }
}
//冒泡
function bubble(arr) {
  if (!arr || arr.length < 2) return
  for (i = arr.length - 1; i >= 0; i--) {
    for (var j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1])
        swap(arr, j, j + 1)
    }
  }
}

//选择(每次从后面选出最小的下标值和当前位置交换)
function select(arr) {
  if (!arr || arr.length < 2) return
  for (var i = 0; i < arr.length - 1; i++) {
    var minIndex = i
    for (var j = i + 1; j < arr.length - 1; j++) {
      minIndex = arr[j] < arr[minIndex] ? j : minIndex;
    }
    if (minIndex != i)
      swap(arr, minIndex, i)
  }
}

// 归并排序
function mergeSort(arr) {
  if (!arr || arr.length < 2) return;
  sortProcess(arr, 0, arr.length - 1);
}
function sortProcess(arr, left, right) {
  if (left == right) return
  var mid = (left + right) >> 1;
  sortProcess(arr, left, mid)
  sortProcess(arr, mid + 1, right);
  merge(arr, left, mid, right)
}
function merge(arr, left, mid, right) {
  //声明一个变量来报
  var temp = []
  var leftIndex = left
  var rightIndex = mid + 1
  while (leftIndex <= mid && rightIndex <= right) {
    temp.push(arr[leftIndex] < arr[rightIndex] ? arr[leftIndex++] : arr[rightIndex++])
  }
  while (leftIndex <= mid) {
    temp.push(arr[leftIndex])
  }
  while (rightIndex <= right) {
    temp.push(arr[rightIndex])
  }
  //
  for (var i = 0; i <= temp.length - 1; i++) {
    arr[left++] = temp[i]
  }
}

// 快速排序
function partition(arr, left, right) {
  var less = left - 1;
  var more = right + 1;
  var cur = left;
  var num = arr[right]
  while (cur < more) {
    if (cur < num) {
      swap(arr, ++less, cur++)
    } else if (cur > num) {
      swap(arr, --more, cur)
    } else {
      cur++
    }
  }
  //返回相等元素的下标志
  return arr[less + 1, more - 1]
}
function quickSort(arr, L, R) {
  if (!arr || arr.length < 2) return
  if (L < R) {
    //随机选取一个数字和末尾元素交换
    swap(arr, parseInt(Math.random() * (R - L + 1)) + L, R)
    var range = partition(arr, L, R);
    quickSort(arr, L, range[0] - 1)
    quickSort(arr, range[1] + 1, R);
  }

}

//归并排序实现逆序问题(大数归并的方式从后往前存储)
function reversepair(arr) {
  if (!arr || arr.length < 2) return 0
  return sortP(arr, 0, arr.length - 1)
}
function sortP(arr, left, right) {
  //结束条件
  if (right == left) return 0
  var mid = parseInt((left + right) / 2)
  return sortP(arr, left, mid) +
    sortP(arr, mid + 1, right) +
    merge1(arr, left, mid, right)
}
function merge1(arr, left, mid, right) {
  var temp = []
  var leftIndex = mid;
  var rightIndex = right
  var tempIndex = right - left;
  //计算逆序对
  var count = 0
  while (rightIndex > mid && leftIndex >= left) {
    //大树归并从后往前存储
    count += (arr[leftIndex] > arr[rightIndex]) ? (rightIndex - mid) : 0
    temp[tempIndex--] = (arr[leftIndex] > arr[rightIndex]) ? arr[leftIndex--] : arr[rightIndex--]
  }
  while (leftIndex >= left) {
    temp[tempIndex--] = arr[leftIndex--]
  }
  while (rightIndex > mid) {
    temp[temp--] = arr[rightIndex--]
  }
  //重新更新arr
  for (var i = 0; i < temp.length - 1; i++) {
    arr[left++] = temp[i]
  }
  return count
}

//小和问题
function smallSum(arr) {
  if (!arr || arr.length < 2) return 0
  return sortP2(arr, 0, arr.length - 1)
}
function sortP2(arr, left, right) {
  if (left == right) return 0
  var mid = parseInt((left + right) / 2);
  return sortP2(arr, left, mid) +
    sortP2(arr, mid + 1, right) +
    merge2(arr, left, mid, right)
}
function merge2(arr, left, mid, right) {
  var temp = []
  var leftIndex = left;
  var rightIndex = mid + 1;
  var count = 0
  while (leftIndex <= mid && rightIndex <= right) {
    count = (arr[leftIndex] < arr[rightIndex]) ? (right - rightIndex + 1) * arr[leftindex] : 0
    temp.push(arr[leftIndex] < arr[rightIndex] ? arr[leftIndex++] : arr[rightIndex++])
  }
  while (leftIndex <= mid) {
    temp.push(arr[leftIndex++])
  }
  while (rightIndex <= right) {
    temp.push(arr[rightIndex++])
  }
  for (var i = 0; i < temp.length; i++) {
    arr[left++] = temp[i]
  }
  return count
}