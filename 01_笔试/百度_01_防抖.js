function debounce(fun, waitTime) {
  var timer = null;
  return function (...args) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      fun.apply(this, args)
    }, waitTime)
  }
}

