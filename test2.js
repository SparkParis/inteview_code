var str = 'abc';
// console.log(str.charAt(2));
// console.log(str.charCodeAt(2));
// console.log(String.fromCharCode(107));
// console.log(String.fromCharCode('A'));
console.log(str.toUpperCase().toLowerCase());

function Person() { }
class Factory {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  getName() {
    return this.name;
  }
  getAge() {
    return this.age
  }
}
class Son extends Factory {
  constructor(name, age) {
    super(name, age);
  }
}
var a = 12;
var b = true;
console.log(typeof a);
console.log(typeof b);
console.log(typeof person);//function
console.log(typeof Factory);//fucntion
console.log(typeof null);//object
let f = new Factory('张三', 12);
console.log(f.getName());
console.log(f.getAge());
var p = new Person();
console.log(Object.prototype.toString.call(Person), '测试');//[object Function]
console.log(p instanceof Person);//true
let arr = [2, 3, 4, 5];
console.log(Array.isArray(arr));
var fakeArray = {
  "0": "first",
  "1": "second",
  "2": "third",
  length: 3
};
var set = new Set([1, 2, 4])
console.log(Array.from(fakeArray));
console.log([...set]);

function getType(obj) {
  if (obj === null) return String(obj);
  return typeof obj === 'object'
    ? Object.prototype.toString.call(obj).replace('[object ', '').replace(']', '').toLowerCase()
    : typeof obj;
}
console.log(getType(a));

//连续改变bind
var obj = {};
function foo() {
  console.log(this, 123);
}
foo.bind().bind(obj)();
let fn = function () {
  return function () {
    return foo.apply();
  }.apply(obj)
}
fn()


