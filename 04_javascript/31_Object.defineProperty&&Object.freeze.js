//Object.defineProperty()
/*
Object.defineProperty(obj,prop,{
    value:设置属性的值
    writable:值是否允许重写
    enumerable:目标属性是否允许被枚举
    configurable:目标属性是否可以被删除或者再次修改特性
    get:function(){},访问该属性的时候会自动调用该方法
    set:function(newvalue){}设置prop属性的时候会自动调用该方法
})
*/
const a = { b: 200 };
// a = { b: 100 };const声明的是常量不能再发生变化,这里会报错,但是const中声明的变量和属相值是可以变化的
a.b = 100;
//实现a中的b属性值不能发生变化通过Object.defineProperty;
//封装方法指定对象的某个属性的可修改性和删除
Object.myFreeze = function (obj, prop, config = false, enume = false) {
  Object.defineProperty(obj, prop, {
    configurable: config,
    enumerable: enume,
    get: function () {
      console.log('get方法被调用')
      return obj.prop;
    },
    set: function (value) {
      console.log('set方法被调用');
      if (!config) throw new Error('error! not check ');
      obj.prop = value;
    }
  })
}
Object.myFreeze(a, 'b', true);

a.b = 400;
console.log(a);
console.log(a.b);

//Object.freeze()方法的测试
const b = { prop: '333' }
Object.freeze(b);
console.log(b.prop);//333
b.prop = 344;//不会报错,但是没有修改成功
console.log(b);//{prop:'333'}

//数组也可以冻结
var arr = [1, 2, 3];
Object.freeze(arr);
arr.push[4];
console.log(arr);//[1,2,3],冻结之后忽略
console.log(Object.isFrozen(arr));//true

//深度冻结的实现
function deepFreeze(obj) {
  var propNames = Object.getOwnPropertyNames(obj);//获取所有的name属性
  propNames.forEach((name) => {
    var prop = obj[name];//获取变量属性通过中括号的方式,静态属性通过.的方式获取,参数传递的通过.的方式
    if (typeof prop == 'object' && typeof prop != null) {
      deepFreeze(prop);
    }
  })
  //冻结自身
  Object.freeze(obj);
  return obj;
}

// Object.create()的手动实现,创建一个对象,让该对象的__proto__属相指向参数o,使用现有的对象来提供新创建的对象的__proto__
Object.myCreate = function (o) {
  function F() { };
  F.prototype = o;
  return new F();
}