const { bubbleSort, InsertSort, selectSort } = require('./01_sort')
const { heapInsert } = require('./09_堆排序')
//4 对数器(解决case)来测试代码是否合适
function generateSort(size, value) {
  /*
  size:生成数组的长度
  value:生成数组的数值范围
  */
  //1.生成随机的数组长度(0-size)
  var arr = new Array(parseInt(Math.random() * (size + 1)));
  //为每个数值生成随机的数
  for (var i = 0; i < arr.length; i++) {
    // 为数组的每个数值生成随机的数值,相减有正负之分,
    arr[i] = parseInt(Math.random() * (value + 1)) - parseInt(Math.random() * (value + 1));
  }
  return arr
}

//通过数组对数器结合一个系统提供的绝对正确的方法
function sort(arr) {
  arr.sort((a, b) => a - b)
}

// 克隆数组
function cloneArr(arr) {
  var clone = [];
  for (var i = 0; i < arr.length; i++) {
    clone[i] = arr[i]
  }
  return clone
}

// 比较两个数组是否相等
function isEqual(arr1, arr2) {
  if ((arr1 == null && arr2 != null) || (arr1 != null && arr2 == null)) {
    return false
  }
  if (arr1 == null && arr2 == null) return true
  if (arr1.length != arr2.length) {
    return false;
  }
  for (var i = 0; i < arr1.length; i++) {
    //数值不相等则返回false
    if (arr1[i] != arr2[i]) {
      return false
    }
  }
  //执行到最后结果都满足
  return true
}

//通过计数器来测试当前的三个排序算法
function test(testTime, size, value, sortType) {
  var testTime = testTime;
  var size = size;
  var value = value;
  success = true
  for (var i = 0; i < testTime; i++) {
    //生成随机样本发生器
    var arr = generateSort(size, value)
    var arr1 = cloneArr(arr)
    var arr3 = cloneArr(arr)
    //通过绝对正确的排序检测arr
    sort(arr);
    //测试自己写的排序算法
    sortType(arr1)
    //比较结果是否相同
    if (!isEqual(arr, arr1)) {
      //只要有一个不一样说明测试不通过直接返回
      console.log(arr3);//出错打印出错的样本
      success = false
      break
    }
  }
  console.log(success ? '测试通过' : '测试失败')
}


// test(500, 10, 100, bubbleSort)
// test(500, 10, 100, InsertSort)
// test(500, 10, 100, selectSort)
// test(500, 10, 100, heapInsert)