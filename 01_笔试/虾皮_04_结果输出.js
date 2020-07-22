let length = 10;
function foo() {
  console.log(this.length)
  // console.log(this);
}
var obj = {
  length: 5,
  method: function (...args) {
    console.log(this.length);//5
    foo();//这里的let声明的全局变量不是window的属性,返回的是undefined
    console.log(this);//obj
    arguments[0]();//obj.length=2
  }
}
obj.method(foo, 1)