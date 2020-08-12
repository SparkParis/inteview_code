//1.大顶堆的创建
function createMaxHeap(arr, length) {
  // 寻找根节点
  for (var i = Math.floor(length / 2) - 1; i >= 0; i--) {
    // 调整大顶堆
    ajustMaxHeap(arr, i, length);
  }
  return arr;
}
function ajustMaxHeap(arr, index, length) {
  //调整左右子树,这里的i*2+1是跳转到下一层的子节点
  for (var i = index * 2 + 1; i < length; i = i * 2 + 1) {
    //调整i+1<length表明是有子节点的
    if (i + 1 < length && arr[i + 1] > arr[i]) {
      i++;
    }
    //判断子节点是不是大于节点的最大值index
    if (arr[index] >= arr[i]) {
      //根节点大于子节点
      break
    } else {
      //最大值的给根节点
      [arr[index], arr[i]] = [arr[i], arr[index]]
      index = i;
    }
  }
}
//小顶堆的创建
function createMinHeap(arr, length) {
  for (var i = Math.floor(length / 2) - 1; i >= 0; i--) {
    ajustMinHeap(arr, i, length)
  }
  return arr
}
function ajustMinHeap(arr, index, length) {
  for (var i = index * 2 + 1; i < length; i * 2 + 1) {
    if (i + 1 > length && arr[i + 1] < arr[i]) {
      i++
    }
    if (arr[index] < arr[i]) {
      break
    } else {
      [arr[index], arr[i]] = [arr[i], arr[index]]
      index = i
    }
  }
}

//堆的插入(小顶堆)(优先队列只能从末尾插入元素)
function addEleHeap(arr = [], element) {
  //插入元素到队列中
  arr.push(element);
  //获取最后插入的元素得所用
  var index = arr.length - 1;
  //获取父元素的索引
  var target = Math.floor((index - 1) / 2);
  // 父元素的索引非0
  while (target >= 0) {
    arr[target];
    //判断父元素和插入元素的大小
    if (arr[index] < arr[target]) {
      //新插入的元素小于,调整树的结构
      [arr[index], arr[target]] = [arr[target], arr[index]];
      index = target;
      target = Math.floor((index - 1) / 2);
    } else {
      break;
    }
  }
  return arr
}
//小顶堆(堆的移出只能从头部移出,用最后一位填充,在调整)
function removeEleHeap(arr = []) {
  var result = null
  if (arr.length > 1) {
    //取出第一个待删除元素
    result = arr[0];
    //用最后一个元素填充
    arr[0] = arr.pop();
    ajustMinHeap(arr, 0, arr.length)
  } else if (arr.length == 1) {
    return arr.pop()
  }
  return result
}