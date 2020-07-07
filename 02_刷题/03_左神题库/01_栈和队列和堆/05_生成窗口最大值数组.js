/** 
 * 滑动窗口:大小是固定的
 * 结构设置:采用双端队列(队列的两端都可以入队和出队)
 * 思路:(双端队列中存储的数组下标,避免相同元素无法判断)
 *  - 每次滑动的时候判断入队元素和队尾元素的大小,大于队尾元素,说明前面的元素在该组滑动窗口中无效直接出队,将当前元素队(注意该双端队列中存储的始终是每组滑动窗口的最值)
 * - 滑动过程中,通过判断数组下标查看元素是不是过期,过期直接从队头出队
 * - 初次判断,需要依次遍历到滑动窗口的大小
 * 
 *过期时间,最晚过期时间
*/
function maxSlidingWindow(arr, k) {
  if (!arr || k < 1 || arr.length < k) return null;
  //双端队列用户滑动窗口保存值索引
  var window = [];
  //保存最值
  var res = [];
  for (var i = 0; i < arr.length; i++) {
    //过期需要从队头出队(相等百事window中存储的第一个节点已经过期,删除第一个节点)
    if (window[0] == i - k) {
      window.shift();
    }
    //最晚过期时间(获取双端队列中的最后一个索引值)
    var j = window.length - 1;
    while (j >= 0 && arr[window[j]] <= arr[i]) {//当前元素比窗口元素都大,具备最晚过期时间,窗口中比他小的都出队列
      j--;
      window.pop()
    }
    //当前值小于则直接进入窗口
    window.push(i);
    console.log(window);

    //当前索引大于k-1时表示已经达到滑动串口的长度,窗口中的最值始终在窗口中的第一个位置(入双端队列的时候只有小值入队,大值都会清空前面的小值在入队)
    if (i >= k - 1) { //保存每次滑动窗口的最值
      res.push(arr[window[0]])
      console.log(arr[window[0]], 1111);

    }
  }
  return res
}
var arr = [1, 3, -1, -3, 5, 3, 6, 7];
var res = maxSlidingWindow(arr, 3);
console.log(res);
