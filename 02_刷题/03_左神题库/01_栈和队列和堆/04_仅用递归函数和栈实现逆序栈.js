/*
使用递归函数和栈实现将栈逆序:
入栈顺序:1,2,3
逆序之后栈内元素:3,2,1
思路:
- 实现递归函数:删除栈底元素并返回删除
- 实现递归逆序
  - 递归获取每次的返回元素,在进行入栈
*/
function getRemoveBottom(stack) {
  var result = stack.pop();
  if (stack.length == 0) {
    //返回递归最后的元素,也就是栈底元素
    return result;
  } else {
    var last = getRemoveBottom(stack);//
    //递归结束将值push到stack中
    stack.push(result)//先返回了2push进去右返回了3push进去,每次操作只是删除了栈底元素
    return last//返回的始终都是栈底元素
  }
}
/*
第二个递归实现逆序,递归每次删除返回的栈元素直到拿到栈顶元素在push到栈中
*/
function reverse(stack) {
  if (stack.length == 0) return
  var i = getRemoveBottom(stack);
  reverse(stack);//将栈取空之后,在将返回的栈底元素依次入栈
  stack.push(i)
}
var stack = [1, 2, 3, 4, 5];
reverse(stack)
console.log(stack);
