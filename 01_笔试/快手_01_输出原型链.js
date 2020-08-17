Function.prototype.c = () => console.log(1);
Object.prototype.b = () => console.log(2);
function A() { };
var a = new A();
a.b();//2
// a.c();//报错了
//实例对象的__proto__指向的实例对象构造函数的原型
console.log(a.__proto__ === a.constructor.prototype);//true
console.log(a.constructor.prototype === A.prototype);//true
// console.log(A.prototype__proto__ == Object.prototype, 123);//false,注意这里是错误的
console.log(A.__proto__ === Function.prototype);//true
console.log(Function.prototype.__proto__ == Object.prototype);//true
console.log(Array.__proto__ == Function.prototype);//true