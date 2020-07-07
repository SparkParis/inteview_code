/*
注意在求数组的的最小的的前topk个数,建立大顶堆,边插入边维护数量为k的大顶堆
*/
function swap(arr, i, j) {
  var temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp
}
//向上调整(插入调整)
function moveUp(arr, index) {
  var parent = parseInt((index - 1) / 2);
  while (parent > -1 && arr[parent] < arr[index]) {
    swap(arr, parent, index)
    index = parent;
    parent = parseInt((index - 1) / 2);
  }
}
function moveDown(arr, index, k) {
  var left = 2 * index + 1;
  //这里只调整前k个元素(维持其为大顶堆)
  while (left < k) {
    var largest = (left + 1 < k) && arr[left + 1] > arr[left] ? left + 1 : left;
    largest = arr[index] < arr[largest] ? largest : index;
    if (largest == index) break;
    swap(arr, index, largest);
    index = largest;
    left = 2 * index + 1;
  }
}
function topMinK(arr, k) {
  if (!arr || k > arr.length) return null
  for (var i = 0; i < arr.length; i++) {
    if (i < k)
      moveUp(arr, i);//构建的是大顶堆,最大的元素始终在arr[0]
    if (arr[i] < arr[0]) {
      // 当前元素大于arr[0],交换位置向下调整(注意是从堆顶向下调整)
      swap(arr, i, 0)
      moveDown(arr, 0, k);
    }
  }
  return arr.slice(0, k).reverse()
}

var arr = [5, 3, 1, 4, 7]
console.log(topMinK(arr, 3));




// var map = { 'a': 3, 'b': 5, 'c': 5 };
// var res = Object.entries(map)
// console.log(res);

// for (var item of res) {
//   console.log(item[0]);
//   console.log(item[1]);

// }
// console.log(Object.keys(map));
// console.log(Object.values(map));

