

/**
 * 设计一个栈具有获取最小值的函数,pop,push,min,top
 * 设计思路:
 * - 采用两个栈的方式,一个栈用于存储数据,另一个栈用于存储最小值
 */
var stack1 = [];//存储数据
var stack2 = [];
function push(data) {
  stack1.push(data);
  if (stack2.length == 0) {
    stack2.push(data)
  }
  stack2.push(data > min() ? min() : data);
}
function pop() {
  if (stack1.length == 0) return -1
  stack2.pop()
  return stack1.pop();
}

function top() {
  return stack1.length > 0 && stack1[stack1.length - 1]
}

function min() {
  return stack2.length > 0 && stack2[stack2.length - 1]
}