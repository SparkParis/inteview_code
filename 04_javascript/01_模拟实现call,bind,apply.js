// 1.模拟实现call(可接受参数列表)
Function.prototype.myCall = function (context) {
  var context = context || window;
  // 将this指向fn
  context.fn = this;
  var args = [...arguments].slice(1);
  var result = context.fn(args);
  //删除临时函数
  delete context.fn;
  return result;
}

// 2.模拟实现apply(可接收数组列列表)
Function.prototype.myApply = function (context) {
  var context = context || window;
  context.fn = this;
  var result;
  //参数判断
  if (arguments[1]) {
    result = context.fn(...arguments[1])
  } else {
    result = context.fn();
  }
  //删除fn
  delete context.fn;
  return result
}

// 3.bind()
/*
不传入第一个参数，那么默认为 window
改变了 this 指向，让新的对象可以执行该函数。那么思路是否可以变成给新的对象添加一个函数，然后在执行完以后删除？
*/
Function.prototype.myBind = function (context) {
  if (typeof this != 'function') {
    //当前的this不是函数则抛出异常
    throw new Error('EROOR');
  }
  //重新指定this,与前者不同的是这里返回的是一个函数
  var _this = this;
  //参数是数组
  var args = [...arguments].slice(1);
  //返回一个函数

  return function F() {
    //返回的函数需要new F,判断
    if (this instanceof F) {
      return new _this(...args, ...arguments);
    }
    return _this.apply(context, args.concat(...arguments))
  }
}