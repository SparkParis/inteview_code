// 1.防抖:返回的是一个闭包,这里使用的是普通函数,里面的setTimeOut使用的是箭头函数,这样做的目的是让this指向准确,this的真是指向并不是debounce的调用者,而是返回闭包的调用者;对传入闭包的参数进行透传
function debounce(event, time) {
  let timer = null
  return function (...args) {
    //清除之前的定时器,重新启动定时器开始计算
    clearTimeout(timer);
    timer = setTimeout(() => {
      event.apply(this, args)
    }, time);
  }
}

// 如果需要理解执行在内部添加一个flag,第一次执行则立即执行
function debounceIEF(event, time, flag) {
  let timer = null;
  return function (...args) {
    clearTimeout(timer);
    if (flag && !timer) {
      event.apply(this, args);
    }
    //设定延时
    timer = setTimeout(() => {
      event.apply(this, args)
    }, time);
  }
}

// 2.防抖:时间戳和定时器两种实现方式
// 时间戳:第一次肯定触发,最后一次不会触发
function throttle(event, time) {
  let pre = 0;
  return function (...args) {
    if (Date.now - pre > time) {
      pre = Date.now;
      event.apply(this, args);
    }
  }
}

// 定时器:第一次事件不会触发,最后一次一定会触发
function throttleTime(event, time) {
  let timer = null;
  return function (...args) {
    if (!timer) {
      let timer = null;
      timer = setTimeout(() => {
        event.apply(this, args)
      }, time);
    }
  }
}

// 定时器和时间戳的结合班,相当于是节流和防抖的结合版,第一次和最后一次都会触发 
function throttleAll(event, time) {
  let pre = 0;
  let timer = null;
  return function (...args) {
    if (Date.now - pre > time) {
      clearTimeout(timer);
      timer = null;
      pre = Date.now;
      event.apply(this, args)
    } else if (!timer) {
      timer = setTimeout(() => {
        event.apply(this, args)
      }, time);
    }
  }
}