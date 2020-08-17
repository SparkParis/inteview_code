// 1.递归解法
var subsets1 = function (nums) {
  var sub = [];
  var res = [];
  var backtrack = function (sub, start) {
    res.push(sub);
    for (var i = start; i < nums.length; i++) {
      sub.push(nums[i]);//做选择
      backtrack(sub.slice(), i + 1);
      sub.pop();//撤销选择
    }
  }
  backtrack(sub, 0);
  return res;
};
// 2.迭代解法
var subsets2 = function (nums) {
  var res = [[]];
  for (var i = 0; i < nums.length; i++) {
    var len = res.length;
    for (var j = 0; j < len; j++) {
      res.push(res[j].concat(nums[i]));
    }
  }
  return res;
}
/**
 * [
  [],       [ 1 ], nums[i]
  [ 2 ],    [ 1, 2 ],
  [ 3 ],    [ 1, 3 ],
  [ 2, 3 ], [ 1, 2, 3 ]
]
 */

//3.二叉树的三序遍历
var subsets3 = function (nums) {

}

// 4.位运算,所有的状态组合为2^n,存在1的位置为一种组合
var subsets4 = function (nums) {
  var res = [];
  var len = nums.length;
  var resAll = 1 << len;//2的len次方
  for (var i = 0; i < resAll; i++) {
    var sub = [];
    for (var j = 0; j < len; j++) {//对含有1的做循环添加对应的数值
      if ((i >> j) & 1 == 1) {//判断当前位是否为1,j作为nums的索引
        sub.push(nums[j]);
      }
    }
    res.push(sub)
  }
  return res
}

console.log(subsets4([1, 2, 3]));
