function fourSum(nums, target) {
  if (nums.length < 4) return [];
  var result = [];
  //1.排序便于去重
  nums.sort((a, b) => a - b);
  //2.循环
  for (var i = 0; i < nums.length - 3; i++) {
    //去重
    if (i && nums[i] == nums[i - 1]) {
      continue;
    }
    //如果从左侧起连续的四个数大于了target,后面的都不会等于target(已经排序了)
    if (nums[i] + nums[i + 1] + nums[i + 2] + nums[i + 3] > target) {
      // 直接结束循环
      break
    }
    //第二个数去重
    for (var j = i + 1; j < nums.length - 2; j++) {
      if (j && nums[j] == nums[j - 1]) {
        continue;
      };
      //设置亮哥哥指针开始同侧探索
      var left = j + 1, right = nums.length - 1;
      while (left < right) {
        var sum = nums[i] + nums[j] + nums[left] + nums[right];
        if (sum == target) {
          result.push([nums[i], nums[j], nums[left], nums[right]])
          //left和right去重


        }
        //left和right去重,并移动指针
        if (sum <= target) {
          while (nums[left] == nums[++left]);
        } else {
          while (nums[right] == nums[--right]);
        }

      }
    }
  }
  return result
}

var nums = [1, 0, -1, 0, -2, 2], target = 0;
console.log(fourSum(nums, target));

