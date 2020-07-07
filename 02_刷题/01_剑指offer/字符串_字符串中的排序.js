// 考察的是回溯法,全排列
function Permutation(str) {
  //定义数组保存不重复的字符串
  const result = []
  if (str) {
    //通过定义队列来保存当前元素中为添加的值
    const queue = str.split('');
    //递归开始决策树
    PermutationCore(queue, result);
  }
  //按照字典进行排序
  result.sort();
  return result
}
function PermutationCore(queue, result, temp = '', current = '') {
  //当前的字符串和当前字符(当前字符添加到当前字符串)
  current += temp;
  //如果当前队列=0表明当前三个元素已经添加到current中保存
  if (queue.length == 0) {
    //去重
    if (!result.includes(current)) {
      result.push(current)
    }
    return
  }
  //通过循环遍历不同的元素作为下一个元素的情况
  for (let i = 0; i < queue.length; i++) {
    //取出当前字符temp(从图开始取,保存路径)
    let temp = queue.shift();
    PermutationCore(queue, result, temp, current);
    //递归完成将当前元素入栈
    queue.push(temp)
  }
}
console.log(Permutation('abc'));
