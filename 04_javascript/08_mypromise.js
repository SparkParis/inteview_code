

//定义三种状态
const RESOLVED = 'resolved';
const REJECTED = 'rejected';
const PENDING = 'pending';
function myPromise(fn) {
  //保存this的,并定义传值
  const that = this;
  this.state = PENDING;
  //向reject和resolve中传值
  this.value = null;

  //定义两个数组保存执行的回调函数,在then中的执行
  that.resolvedCallback = [];
  that.rejectedCallback = [];

  //定义回到函数
  function resolve(value) {
    //判断当前状态是不是pengding状态,如果是修改状态为resolved状态并执行函数,状态改变会执行then方法中onfullfilled函数并传值,状态一旦发生改变就不能再更改
    if (that.state == PENDING) {
      that.state = RESOLVED;
      that.value = value
      that.resolvedCallback.map(cb => cb(that.value))
    }
  };
  function reject(value) {
    if (that.state == PENDING) {
      that.state = REJECTED;
      that.value = value
      that.rejectedCallback.map(cb => cb(that.value))
    }
  }

  //函数的调用
  try {
    fn(resolve, reject)
  } catch (error) {
    reject(error)
  }

}
//then()函数的实现
myPromise.prototype.then = function (onfullfilled, rejected) {
  const that = this

  // 判断两个参数是否为函数类型，因为这两个参数是可选参数
  onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : v => v
  onRejected = typeof onRejected === 'function' ? onRejected : e => { throw e }

  // 当状态不是等待态时，就去执行相对应的函数。如果状态是等待态的话，就往回调函数中 push 函数
  if (this.state === PENDING) {
    this.resolvedCallbacks.push(onFulfilled)
    this.rejectedCallbacks.push(onRejected)
  }
  if (this.state === RESOLVED) {
    onFulfilled(that.value)
  }
  if (this.state === REJECTED) {
    onRejected(that.value)
  }
}