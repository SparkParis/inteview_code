//通过requestAnimationFrame实现循环定时器
function intervalTimer(callback, interval) {
  let timer;
  const now = Date.now;//这里只是声明,并没有调用
  let startTime = now();//调用now()方法
  let endTime = startTime;
  //浏览器重绘之前调用的执行的回调函数
  const loop = () => {
    //设置定时器,浏览器下次重绘之前继续更新下一帧动画，那么回调函数自身必须再次调用window.requestAnimationFrame()
    timer = window.requestAnimationFrame(loop);
    endTime = now();//最终时间就是当前时间
    if (endTime - startTime >= interval) {
      //达到指定时间执行函数,并肩记录时间的值初始化
      endTime = startTime = now()
      // 执行回调函数
      callback(timer)
    }
  }
  timer = window.requestAnimationFrame(loop);
  return timer
}

//调用
let a = 0;
intervalTimer((timer) => {
  console.log(1);
  a++
  if (a == 3) {
    //取消
    window.cancelAnimationFrame(timer)
  }

}, 1000)