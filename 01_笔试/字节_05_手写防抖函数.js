function debounce(func,waitTime){
  var timer = null;
  return function(...args){
    if(timer) clearTimeout(timer);
    timer = setTimeout(()=>{
      //这里this的真实的调用者是闭包的调用者,采用的是箭头函数
      func.apply(this,args)
    },waitTime)
  }
}
//节流函数
function throttle(func,waitTime){
  var now = Date.now;
  var start = now();
  return function(args){
    if(now()-start>=waitTime){
      start = now();
      func.apply(this,args)
    }
  }
}