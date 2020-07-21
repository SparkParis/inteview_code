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
      target[i] = (typeof obj[i] == 'object') ? deepCopy(obj[i]) : obj[i]
    }
  } else {
    target = obj
  }
  return target

}