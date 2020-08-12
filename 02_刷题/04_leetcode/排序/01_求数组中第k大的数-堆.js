// 通过堆实现(优先队列的方式)
var findKthLargest = function (nums, k) {
  if (k > nums.length) return -1
  //构建大顶堆
  for (var i = 0; i < nums.length; i++) {
    moveUp(nums, i);
  }
  var index = 1;
  var heapsize = nums.length;
  while (heapsize > 0) {
    if (k == index) {
      return nums[0]
    }
    swap(nums, 0, --heapsize);
    moveDown(nums, 0, heapsize)
    index++;
  }
};
function swap(arr, i, j) {
  var temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}
//向下调整
function moveDown(arr, index, heapsize) {
  var left = 2 * index + 1
  while (left < heapsize) {
    var largest = (left + 1) < heapsize && arr[left + 1] > arr[left] ? left + 1 : left
    largest = arr[largest] > arr[index] ? largest : index;
    if (largest == index) {
      break;
    }
    //向下调整
    swap(arr, largest, index);
    index = largest;
    left = 2 * index + 1;
  }
}
//向上调整
function moveUp(arr, index) {
  var parent = Math.floor((index - 1) / 2)
  while (arr[parent] < arr[index]) {
    swap(arr, parent, index);
    index = parent;
    parent = Math.floor((index - 1) / 2)
  }
}
console.log(findKthLargest([3, 2, 1, 5, 6, 4], 2));
console.log(findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4));