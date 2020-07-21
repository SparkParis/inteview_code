/**
 * 请求重试，最多重试三次
retry()
 *
 */
/**
 * 1.首先需要手动封装一个请求函数
 * 2.在请求函数的基础上再封装一个重试功能的函数,请求失败最多重试三次且是自动发送,请求成功则不进行操作
 * 注意这里采用的是promise进行函数的封装
 */
//请求函数的封装.这里也是通过promise实现异步操作
function request() {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      var num = Math.ceil(Math.random() * 20); //生成1-10的随机数
      console.log('随机数生成的值：', num)
      if (num <= 10) {
        console.log('符合条件，值为' + num)
        resolve(num);
      }
      else {
        reject('数字大于10了执行失败');
      }
    }, 2000);
  })
};
/**
 * 
 * @param {要发送的请求函数} request 
 * @param {请求发送失败最多重试几次} times 
 * @param {请求发送失败相隔几秒再重新进行请求的发送} delay 需要用到定时器相隔几秒进行请求的再次发送
 */
function retry(request, times, delay) {
  return new Promise((resolve, reject) => {
    // 函数定义
    function attemp() {
      request.then(resolve)
        .catch((err) => {
          console.log(err);
          console.log(`have ${times} retry`);
          if (times == 0) {
            reject(err)
          }
          else {
            times--;
            setTimeout(() => {
              attemp();
            }, delay)
          }
        });

    }
    //重试调用
    attemp();
  })
}
