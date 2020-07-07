/*
注意这里传入的是二维数组
*/
function maxRectSize(map) {
  if (!map || map.length == 0 || map[0].length == 0) return 0
  //遍历每一行数组生成柱状体的数组返回
  var rows = map.length;
  var cols = map[0].length;
  var temp = new Array(cols).fill(0);
  var maxArea = 0;
  for (var i = 0; i < rows; i++) {
    for (var j = 0; j < cols; j++) {
      //声明一个数组用于保存当前行的值
      temp[j] = map[i][j] == 1 ? temp[j] + 1 : 0;
    }
    //每一行遍历完获取改行的最大面积区域
    console.log(temp);

    maxArea = Math.max(getRectArea(temp, maxArea), maxArea);
    console.log(maxArea);

  }
  return maxArea
}
//单调递增栈,寻找左右两侧比自己大的最近的元素(相等的元素也要释放栈)
function getRectArea(height) {
  if (height == null || height.length == 0) return 0
  var maxArea = 0;
  //单调栈
  var stack = []
  for (var i = 0; i < height.length; i++) {
    while (stack.length != 0 && height[i] <= height[stack[stack.length - 1]]) {
      //出栈
      var pop = stack.pop();
      var k = stack.length == 0 ? -1 : stack[stack.length - 1];
      //下标志相减求最大的范围(栈中存放的是数组下标)
      var curMax = (i - k - 1) * height[pop];
      maxArea = Math.max(maxArea, curMax)

    }
    //比栈顶元素大的入栈
    stack.push(i);
  }
  //栈不为空,全部弹出
  while (stack.length != 0) {
    var pop = stack.pop();
    var k = stack.length == 0 ? -1 : stack[stack.length - 1];
    var curMax = (height.length - k - 1) * height[pop];
    maxArea = Math.max(maxArea, curMax)
  }
  return maxArea
}
var map = [
  [1, 0, 1, 1],
  [1, 1, 1, 1],
  [1, 1, 1, 0]
]
var res = maxRectSize(map)
console.log(res);


// 特定值初始化指定长度的数组
// var temp = new heightay(10).fill(0);
// console.log(temp);
