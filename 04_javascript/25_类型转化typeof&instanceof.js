
let x = 10
function foo() {
  console.log(x)
  // var x = 13;
  foo1()
}
function foo1() {
  console.log(x);
}
var obj = {}
foo()
console.log(typeof foo);
console.log(typeof obj);
console.log(foo instanceof Object);
console.log(foo instanceof Function);
console.log(Function instanceof Object);
console.log(Object.prototype.toString.call(foo));
console.log(Object.prototype.toString.call(obj));
// 伪数组转化为真正的数组