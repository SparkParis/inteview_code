//给Object实现一个原型方法freeze(), 当尝试修改属性值时报错：不允许修改。
Object.myFreeze = function (obj, prop, config = false, enume = false) {
  Object.defineProperty(obj, prop, {
    configurable: config,
    enumerable: enume,
    get: function () {
      return obj.prop;
    },
    set: function (value) {
      if (!config) throw new Error('error! config forbidden');
      obj.prop = value;
    }
  })
}
const a = { b: 200 };
Object.myFreeze(a, a.b, true, false);
a.b = 300;
console.log(a);
console.log(a.b);