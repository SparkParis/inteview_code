function threeSum(numbers) {
  //定义变量来存储当前满足条件的数组
  var result = [];
  //排序方便去重
  numbers.sort((a, b) => a - b);

  //遍历
  for (var i = 0; i < numbers.length; i++) {
    //跳过重复的数字
    if (i && numbers[i] == numbers[i - 1]) {
      continue;
    }
    var left = i + 1;
    var right = numbers.length - 1;
    //双指针来查找
    while (left < right) {
      var sum = numbers[i] + numbers[left] + numbers[right];
      if (sum > 0) {
        right--
      } else if (sum < 0) {
        left++;
      } else {
        //相等的情况下,保存,left和right都要移动指针
        result.push([numbers[i], numbers[left++], numbers[right--]]);
        //left和right去重
        while (numbers[left] == numbers[left - 1]) {
          left++;
        }
        while (numbers[right] == numbers[right + 1]) {
          right--;
        }
      }
    }
  }
  return result
}

var num = [-1, 0, 1, 2, -1, -4]
console.log(threeSum(num));
