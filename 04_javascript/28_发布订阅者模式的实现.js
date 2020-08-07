//发布订阅模式
class EventEmiter {
  constructor() {
    //维护一个对象
    this._events = {

    }
  }
  on(eventName, callback) {
    if (this._events[eventName]) {
      //如果有就放一个新的
      this._events[eventName].push(callback);
    } else {
      //如果没有就创建一个数组
      this._events[eventName] = [callback]
    }
  }
  emit(eventName, ...rest) {
    console.log(...rest + 'rest的写法')
    // alert(...rest)
    if (this._events[eventName]) { //循环一次执行
      this._events[eventName].forEach((item) => {
        item.apply(this, rest)
      });
    }
  }
  removeListener(eventName, callback) {
    alert(callback)
    if (this._events[eventName]) {
      //当前数组和传递过来的callback相等则移除掉
      this._events[eventName] =
        this._events[eventName].filter(item => item !== callback);
    }
  }
  once(eventName, callback) {
    function one() {
      //在one函数运行原来的函数，只有将one清空
      callback.apply(this, arguments);
      //先绑定 执行后再删除
      this.removeListener(eventName, one);
    }
    this.on(eventName, one);
    //此时emit触发会执行此函数，会给这个函数传递rest参数
  }
}
class Man extends EventEmiter { }
let man = new Man()
function findGirl() {
  console.log('找新的女朋友')
}
function saveMoney() {
  console.log('省钱')
  console.log('arguments' + JSON.stringify(arguments));
}
// man.once('失恋', findGirl);
// man.on('失恋', findGirl) //失恋 ，绑定一个函数方法
man.on('失恋', saveMoney)//失恋 ，绑定一个函数方法
// man.removeListener('失恋', saveMoney); //移除一个函数方法
man.emit('失恋', ['wewe', 'jjj']);
// man.emit('失恋');
// man.emit('失恋');
//绑定一次，触发多次，也只执行一次。触发后一次将数组中的哪一项删除掉下次触发就不会执行