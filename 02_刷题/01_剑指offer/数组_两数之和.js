function twoSum(nums, target) {
  //借助map来存储
  const map = {}
  if (Array.isArray(nums)) {
    for (var i = 0; i < nums.length; i++) {
      //map可以直接进行存储
      if (map[target - nums[i]] !== undefined) {
        return [map[target - nums[i]], i]
      } else {
        map[nums[i]] = i;
      }
    }
  }
  return []
}
var nums = [2, 7, 11, 15], target = 9



var twoSum1 = function (numbers, target) {
  var left = 0;
  var right = numbers.length - 1;
  var temp;
  while (left < right) {
    temp = numbers[left] + numbers[right];
    console.log(temp);
    if (temp > target) {
      right--
    } else if (temp < target) {
      left++
    } else {
      return [left + 1, right + 1]
    }
  }
  return []

};
console.log(twoSum1(nums, target));
Math.sqrt()