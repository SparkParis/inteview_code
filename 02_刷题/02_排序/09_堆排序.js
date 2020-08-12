/*
堆:将数组看成是一个完全二叉树,堆分为大顶堆和小顶堆.
父子元素之间的关系
父元素:(i-1)/2
左孩子:2i+1<n
右还在:2i-1<n,
这里的i是数组的下标值,当他们小于最后数组的长度表示子节点存在没有越界
*/
//数组交换
function swap(arr, i, j) {
  var temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp
}
//大顶堆调整过程
function heapify(arr, index, heapsize) {
  //求其做孩子
  var left = 2 * index + 1;
  //循环的前提是不越界
  while (left < heapsize) {
    //判断孩子节点中最大值的索引(当左孩子存在并且做孩子大于有孩子时,最大索引是左孩子的索引,不存在或者小于右孩子,较大值的是右孩子)
    var largest = (left + 1) < heapsize && arr[left + 1] > arr[left] ? left + 1 : left;
    //比较孩子最大值和父节点的大小,将较大的值赋值largest
    largest = arr[index] > arr[largest] ? index : largest;
    //判断最大值是不是父节点,是则直接返回,不用调整
    if (largest == index) {
      break
    }
    //调整的前提是index和最大值不相等
    swap(arr, index, largest);
    //将当前最大值赋值给index,继续往下比较
    inde = largest;
    left = index * 2 + 1;
  }
}

//插入堆
function heapInsert(arr, index) {
  //判断和父节点的大小,大于父节点,交换,依次递归
  var parent = Math.floor((index - 1) / 2)
  while (arr[index] > arr[parent]) {
    swap(arr, index, parent);
    index = parent;
    parent = Math.floor((index - 1) / 2)
  }
}

// 堆排序
/*
思想:先将数组中的所有值依次插入调整成大顶堆,每次从大顶堆中的最后一个元素和根元素最大值交换位置,调整的范围--,重新调整交换之后的堆,每次调整的时间复杂度都是logN,n个元素依次调整时间复杂度NlogN
*/
function heapSort(arr) {
  if (arr == null || arr.length < 2) {
    return
  }
  //for循环依次调整arr为大顶堆
  for (var i = 0; i < arr.length; i++) {
    heapInsert(arr, i)
  }
  //插入之后依次交换堆顶和末尾元素,调整堆,调整范围heapsize-1,这样数组末尾的元素就是已经排序好的
  var heapsize = arr.length;
  swap(arr, 0, --heapsize);
  while (heapsize > 0) {
    heapify(arr, 0, heapsize);
    //继续交换
    swap(arr, 0, --heapsize)
  }
}

var arr = [
  89, -80, 47, -9,
  -10, -48, 27
]
heapSort(arr)
console.log(arr);
module.exports = {
  heapInsert
} 