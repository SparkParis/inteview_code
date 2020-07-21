/**
 * 给定任一数组和数字n
求是否存在两项和为n
 * 
 */
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

console.log(twoSum(nums, target));
