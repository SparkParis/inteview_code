
var count = 10;
function a() {
  return count + 10;
}
function b() {
  var count = 20;
  return a();
}
console.log(b());//输出结果是20,考察作用域的使用

//修改上面的代码采用闭包的方式使结果返回30
/*
修改上面的函数返回20
var count = 10;
function a(count) {
  return count + 10;
}
function b() {
  let count = 20;
  return a(count);//这里采用闭包,将作用域限定在当前
}
 */
