//青蛙台阶问题的变种是实现
function CalulateMethodCount(num) {
  if (num < 1) return 0
  // return 1 << (--num);
  return Math.pow(2, num - 1)
}
console.log(CalulateMethodCount(3));

function getRes(str) {
  if (str.length == 0 || str.length == 1) return str;
  var redo = 'redo';//恢复刚才撤销的字符
  var undo = 'undo';//撤销前一个字符
  var stack = [];
  var pre = null;
  var undoStr = null;
  str.forEach(item => {
    if (item != redo && item != undo) {
      stack.push(item);
      pre = item;
    }
    if (item == undo && pre) {
      undoStr = stack.pop();
      pre = stack.length ? stack[stack.length - 1] : null;
    }
    if (item == redo && undoStr) {
      stack.push(undoStr);
      pre = undoStr;
    }
  });
  return stack.join(' ')
}
// console.log(getRes(['hello', 'undo', 'redo', 'world']));