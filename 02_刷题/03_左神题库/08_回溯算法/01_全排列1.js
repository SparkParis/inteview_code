function Permutation(str) {
  if (!str) return []
  var result = [];
  str = str.split('');
  PermutationCore(str, result);
  result.sort();
  return [...new Set(result)]
}
/**
 * 
 * @param {待选择的列表} queue 
 * @param {保存结果} res 
 * @param {} temp 
 * @param {*} current 
 */
function PermutationCore(queue, res, temp = '', current = '') {
  current += temp;
  //结束条件
  if (!queue.length) {
    res.push(current);
    return;
  }
  //回溯的循环
  for (var i = 0; i < queue.length; i++) {
    temp = queue.shift();//做选择
    PermutationCore(queue, res, temp, current);//递归
    queue.push(temp);//撤销选择并添加回列表
  }
}


// 实现方式2写法
var Permutat = function (str) {
  if (!str) return [];
  var res = [];
  var nums = str.match(/./g);
  var PermutatCore = function (track) {
    if (nums.length == track.length) {
      res.push(track);
      return
    }
    for (var i = 0; i < nums.length; i++) {
      if (track.includes(nums[i])) {
        continue
      }
      //做选择
      track.push(nums[i]);
      //进入下一步决策
      PermutatCore(track.slice());//注意这里必须要添加slice()其实是生成了新的数组,不修改原先的数组
      // 取消选择
      track.pop();
    }
  };
  PermutatCore([])
  res.sort();
  return [...new Set(res)];
}
/*
 路径：记录在 track 中
 选择列表：nums 中不存在于 track 的那些元素
 结束条件：nums 中的元素全都在 track 中出现
*/

var str = 'abc';
console.log(Permutat(str));