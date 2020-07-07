
// 1.浅拷贝
// (1)Object.assign(): 用于将所有可枚举的属相值从一个或者多个源对象拷贝到目标对象中并返回目标对象,对于重复的键值,后者会附在前者
var a = { 'a': 1, "b": 2 }
var b = { 'a': 3, 'd': 2 }
var target = Object.assign({}, a, b)
// console.log(target);//{ a: 3, b: 2, d: 2 }

// 2,通过展开运算符实现浅拷贝
var p1 = {
  age: '12',
  foo: {}
}
// console.log(...p1);

var p2 = { ...p1 }
p2.age = 19
// console.log(p1);//{ age: '12' }
// console.log(p2);//{ age: 19 }
// console.log(p2.foo == p1.foo);//true,浅拷贝,拷贝的对象指向的是同一个内存空间

// 浅拷贝3. lodash.clone(value)
var _ = require('lodash');
const { clone } = require('lodash')
var b = {
  name: 'zhangsan',
  age: '45',
  foo: {}
}
// var c = _.clone(b)
// console.log(c == b);//false
// console.log(b.foo == c.foo);//true,子对象指向同一个引用

// 深拷贝
// (1)JSON.parse(JSON.stringify(arr))
var obj1 = [2, 4, { name: 'zhangsan' }]
var obj2 = JSON.parse(JSON.stringify(obj1));
// console.log(obj2);
// console.log(obj1 == obj2);//false
// console.log(obj1[2] == obj2[2]);//false

// (2)lodash.cloneDeep()
var o1 = { name: 'ftt', foo: {} }
var o2 = _.cloneDeep(o1)
o2.name = 'sss'
// console.log(o2);//{ name: 'sss', foo: {} }
// console.log(o1);//{ name: 'ftt', foo: {} }
// console.log(o1.foo == o2.foo);//false

// (3)手写实现递归函数
function deepClone(obj, hash = new WeakMap) {
  //遍历每一种情况
  if (obj == null) return obj
  if (obj == Date) return new Date(obj);
  if (obj == RegExp) return new RegExp(obj)
  //如果是对象或者普通对象不需要拷贝
  if (typeof obj !== Object) return obj
  //是对象就要进行深度考别
  if (hash.get(obj)) return obj;
  // 找到的是所属类原型上的constructor,而原型上的 constructor指向的是当前类本身
  let cloneObj = new obj.constructor();
  hash.set(obj, cloneObj);
  //循环遍历
  for (let key in obj) {
    if (obj.hasOwnProperty(key))
      cloneObj[key] = deepClone(obj[key], hash)
  }
  return cloneObj

}
let obj = { name: 1, address: { x: 100 } };
obj.o = obj; // 对象存在循环引用的情况
let d = deepClone(obj);
obj.address.x = 200;
console.log(obj == d);
console.log(obj);
console.log(d);

// 手动实现深拷贝
function deepCopy(obj) {
  //获取深拷贝的原型的类型
  var constructor = Object.prototype.toString.call(obj);
  var target
  if (constructor == 'Object') {
    if (obj == null) target = null
    target = Array.isArray(obj) ? [] : {};
    //递归遍历
    for (var i in obj) {
      target[i] = (typeof target[i] == 'object') ? deepCopy(obj[i]) : obj[i]
    }
  } else {
    target = obj
  }
  return target

}