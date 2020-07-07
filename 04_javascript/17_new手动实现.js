// new 的手动是实现
function create() {
  //创建对象
  const obj = {};
  //绑定原型
  let Con = [].shift().call(arguments);
  obj.__proto__ = Con.prototype;
  //指定this
  let result = Con.apply(obj, arguments);
  //返回对象
  return result instanceof Object ? result : obj
}
// instanceof的手动实现
function myInstanceof(instance, className) {
  let prototype = className.prototype;
  let instance = instance.__proto__;
  while (true) {
    if (instance == null || intance == undefined) {
      return false
    }
    if (instance == prototype) {
      return true
    }
    instance = instance.__proto__
  }
}

parseFloat((0.1 + 0.2).toFixed(10)) === 0.3