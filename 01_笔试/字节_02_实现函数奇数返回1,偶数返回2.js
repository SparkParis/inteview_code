/*
有一个函数a,每次执行的时候奇数次打印1,偶数次打印2
a().valueOf() // 1
a()().valueOf() // 2
a()()().valueOf() // 1
a()()()().valueOf() //2
*/
//采用闭包的方式在在内部声明变量不释放

function time() {
  var i = 0;
  var num = -1

  function intime() {
    i++
    num = i % 2 ? 1 : 2;
    return num
  }

}
console.log(time().valueOf());

//调用赋值给一个变量 否则不起作用
// var result = time();

// console.log(result());
// ;
// console.log(result());
// console.log(result());
// console.log(result());
// console.log(result());
// function sum(a) {
//   return function (b) {
//     return function (c) { return a + b + c };
//   }
// }
// console.log(sum(1)(2)(3).valueOf(), 111)
