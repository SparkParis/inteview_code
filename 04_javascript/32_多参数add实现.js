// add(1)(2,3)(4)

// 方法1：函数柯里化，只能执行指定参数的fn去执行结果，但是不能满足任输入任何数量的参数来实现操作的结果
function curry(fn, args = []) {
  //函数的length属性指向的是参数的个数
  var length = fn.length;
  return function () {
    newArgs = args.concat(Array.prototype.slice.call(arguments));
    if (newArgs.length < length) {
      // 注意call传入的是参数
      return curry.call(this, fn, newArgs)
    } else {
      //达到条件直接执行
      return fn.apply(this, newArgs)
    }
  }
}
// es6实现方式
const curry1 = (fn, arr = []) => (...args) => (
  args => args.length == fn.length ? fn(...args) : curry1(fn, args)
)([...arr, ...args])

function add(a, b, c) {
  return a + b + c
}
function muti(a, b, c) {
  return a * b * c
}
let curryAdd = curry1(add);

console.log(curryAdd(2, 3)(4));
console.log(curryAdd(2)(3)(4));
console.log(curryAdd(2, 3, 4));


// 方法2：任意参数add函数实现
function addMore(...args) {
  let res = args.reduce((a, b) => a + b);
  function sum(...args1) {
    res += args1.reduce((a, b) => a + b);
    return sum;
  }
  sum.toString = function () {
    return res;
  }
  return sum;
}
console.log(addMore(1)(3)(5)(3)(4, 4, 5).toString());
