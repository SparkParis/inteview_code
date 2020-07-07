// 问题:循环中不能每次打印出传入的循环制
for (var i = 0; i < 5; i++) {
  //这里设置定时器异步任务执行
  setTimeout(function () {
    // console.log(i);
  }, i * 100)
}
//全部输出5
//解决方案:闭包的方案:理解执行函数
for (var i = 0; i < 5; i++) {
  //立即执行函数拥有自己独立的作用,外部无法都去私有的变量
  (function (j) {
    //这里的将传入闭包中变量传递给形参j=i
    setTimeout(function () {
      // console.log(j);
    })

  })(i)
}
//将值作为参数传入setTimeOut中(当函数执行的时候直接传入)
for (var i = 0; i < 5; i++) {

  setTimeout((j) => {
    //j接收setTimeOut中的第三个参数i
    // console.log(j);

  }, i * 1000, i);//i作为参数传入setTimeOut会被保存,执行的时候传入setTimeOut的参数1的function中,这里通过j进行接收
}
// 3.解决方案:块级作用域Let来定义变量
for (let i = 0; i < 5; i++) {
  setTimeout(() => {
    console.log(i);
  })
}