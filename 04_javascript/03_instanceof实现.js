function instance(right, left) {
  // 类型的原型
  var prototype = right.prototype;
  //对象的原型
  var left = left.__proto__
  //判断对象是不是属于原型
  while (true) {
    if (left == null) {
      return false
    }
    if (prototype == left) {
      return true
    }
    left = left.__proto__;
  }
}