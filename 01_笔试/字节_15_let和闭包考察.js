const e = 100
function foo(e) {//这里是形参,直接修改形参是不会报错
  console.log(e);
  e = 200
  console.log(e);
}
function test() {
  // e = 200;//会报错的,这里找到的作用域的声明是window中的声明的const,不能进行重复赋值
  console.log(e);//不会报错,输出100
}
test()
// foo(e)
// console.log(e);