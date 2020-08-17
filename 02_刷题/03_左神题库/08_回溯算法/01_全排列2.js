var permuteUnique = function (nums) {
  var res = [];
  var map = new Map();
  var backtrack = function (track) {
    if (track.length == nums.length && JSON.stringify(res).indexOf(JSON.stringify(track)) == -1) {
      res.push(track);
      console.log(JSON.stringify(res), 'res');
      console.log(JSON.stringify(track), 'track');
      return;
    }
    for (var i = 0; i < nums.length; i++) {
      if (!map.get(i + '-' + nums[i])) {
        //做选择
        map.set(i + '-' + nums[i], true)
        track.push(nums[i]);
        //递归
        backtrack(track.slice());
        //撤销选择
        map.set(i + '-' + nums[i], false)
        track.pop();
      }
    }
  }
  backtrack([]);
  return res
};
console.log(permuteUnique([1, 1, 2]));