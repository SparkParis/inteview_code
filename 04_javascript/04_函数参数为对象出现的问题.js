//1.测试函数传参为对象
function test(person) {
  person.age = 23;
  //person指向新的地址空间
  person = {
    name: 'yyy',
    age: "30"
  }
  return person
}
var p1 = {
  name: 'hhh',
  age: "10"
}
var p2 = test(p1)
// console.log(p1 == p2);//false
// console.log(p1.age)//23
// console.log(p2.age)//22


//2 将instanceof转化为可以判断原始数据类型,这里通过自定义instanceof的方法
class PrimativeString {
  static [Symbol.hasInstance](x) {
    return typeof x === 'string'
  }
}
// console.log('hello world' instanceof PrimativeString);//true

//3.函数调用多次bind的情况
const a = {}
let foo = function () {
  console.log(this);
  console.log(111);

}
//不管我们给函数 bind 几次，foo 中的 this 永远由第一次 bind 决定，所以结果永远是 window。
foo.bind().bind(a)();//this指向window
foo.bind(a).bind()()//this指向a
