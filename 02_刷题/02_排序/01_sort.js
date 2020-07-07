//交换数组中的两个元素值
function swap(arr, i, j) {
  var temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}
//1.冒泡排序
/*
每次都将最大值放在最优的位置
*/
function bubbleSort(arr) {
  if (arr == null || arr.length < 2) {
    return
  }
  for (var i = arr.length - 1; i > 0; i--) {
    //内部选出交换比较出最大值
    for (var j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        //交换位置
        swap(arr, j, j + 1)
      }
    }
  }
}

//2.选择排序
/*
选择排序就是将后面元素的最值放在前面,最外面的循环从0开始,里面的循环找最值
*/
function selectSort(arr) {
  if (arr == null || arr.length < 2) {
    return
  }
  for (var i = 0; i < arr.length; i++) {
    //记录当前最小位置的索引
    var minIndex = i;
    for (var j = i + 1; j < arr.length; j++) {
      minIndex = arr[j] < arr[minIndex] ? j : minIndex;
    }
    //找到最小值之后和当前排序好的指定位置交换,每次找到后面最小值的值依次从0开始的位置放置
    swap(arr, i, minIndex)
  }
}

// 3.插入排序
/*
插入排序 :从第一位开始排序,始终保证前面的元素是排好序的,每次从后面未排的元素中依次取出元素和拍好序的元素进行对比并插入到排好序的元素中
插入排序和数组是否有序有直接关系
*/
function InsertSort(arr) {
  if (arr == null || arr.length < 2) {
    return
  }
  //外层遍历依次递增,表示新插入到有序队列中的元素
  for (var i = 1; i < arr.length; i++) {
    //内层遍历主要是通过一次添加后面的元素和前面排好序的元素进行比较,满足条件的情况下进行交换,从后往前两两比较
    for (var j = i - 1; j >= 0 && arr[j] > arr[j + 1]; j--) {
      //新插入的元素小于前面的元素交换,一次比较,直到有序
      swap(arr, j, j + 1)
    }
  }
}


// test(500, 10, 100, bubbleSort)
// test(500, 10, 100, InsertSort)
// test(500, 10, 100, selectSort)


module.exports = {
  bubbleSort,
  selectSort,
  InsertSort
};