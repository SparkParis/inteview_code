//1.经典动态规划实现 在动态规划中进行详细解释
function count1(n) {
  if (n < 1) return 0;
  var record = new Array(n);
  return process1(0, record, n)
}
/**
 * 
 * @param {当前行} i 
 * @param {每一行对应的列} record record[i]表示i行对应的列
 * @param {行数也就是皇后数} n 
 */
function process1(i, record, n) {
  if (i == n) {//到达最后一行找到一种解决方案
    return 1
  }
  var res = 0;//记录总的数
  for (var j = 0; j < n; j++) {
    if (isValid(record, i, j)) {//验证i行j位置是否合法 ,record中不存在j说明合法
      record[i] = j;
      res += process1(i + 1, record, n);
    }
  }
  return res
}
/**
 * 
 * @param {记录每一行的j值} record 
 * @param {i行} i 
 * @param {列值} j 
 */
function isValid(record, i, j) {
  for (var k = 0; k < i; k++) {
    if (j == record[k] || Math.abs(record[k] - j) == Math.abs(i - k)) {
      return false
    }
  }
  return true
}

//2. 通过位运算可以加速n皇后问题
function count(n) {
  if (n < 1 || n > 32) {//int类型变量位数值1-32位皇后问题
    return 0
  }
  var upperLim = n == 32 ? -1 : (1 << n) - 1;//这里1左移n位,假如8位结果:000000000000000000000011111111;表示一种可行方式的终止条件,所有n位都为1
  return process(upperLim, 0, 0, 0);
}
/**
 * 
 * @param {结束限制} upperLim 
 * @param {列限制} colLim 
 * @param {左限制} leftLim 
 * @param {有限制} rightLim 
 * 因为这里是安装一行一行进行放置的,所以行是不会出现冲突的
 */
function process(upperLim, colLim, leftLim, rightLim) {
  if (colLim == upperLim) {//列限制和upperLim相同表示每一列都放满了,返回一种可行组合
    return 1
  }
  var pos = 0;
  var mostRightMore = 0;
  pos = upperLim & (~(colLim | leftLim | rightLim))//1的位置可以放,0的位置不可以放
  var res = 0;
  while (pos != 0) {
    mostRightMore = pos & (~pos + 1)//依次拿出最右边的1去试
    pos = pos - mostRightMore;//拿出最右侧的1之后的结果
    res += process(upperLim, colLim | mostRightMore, (leftLim | mostRightMore) << 1, (rightLim | mostRightMore) >> 1)
  }
  return res
}
// console.log(count(8));
console.log(count1(8));