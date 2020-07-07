//定义两个栈,一个用于进,一个用于出(先进先出)
var stack1 = [];
var stack2 = [];
function push(element) {
  stack1.push(element)
}
function pop() {
  //判断stack2是不是为空,为空需要将statck1中的入栈在出栈
  if (stack2.length === 0) {
    //循环stack1不为空入栈
    while (stack1.length > 0) {
      stack2.push(stack1.pop());
    }
  }
  return stack2.pop() || null;
}

// 用两个队列实现栈(先进后出)
var queue1 = [];
var queue2 = [];
function push(x) {
  if (queue1.length === 0) {
    //后进的存储在队列的前面就会先出去
    queue1.push(x);
    while (queue2.length) {
      // queue2从头取进queue1
      queue1.push(queue2.shift())
    }
  } else if (queue2.length === 0) {
    queue2.push(x);
    while (queue1.length) {
      // queue2从头取进queue1
      queue2.push(queue1.shift())
    }
  }
}

function pop() {
  if (queue1.length !== 0) {
    return queue1.shift();
  } else {
    return queue2.shift()
  }
}
