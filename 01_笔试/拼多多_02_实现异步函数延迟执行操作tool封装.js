/**
 * 请封装一个函数,传入promise,在1s后执行成功则返回执行成功的结果,执行失败则直接reject
 */
function tool(promise) {
  return new Promise(async (resolve, reject) => {
    var res = await wait(promise, time);
    if (res) {
      resolve(res);
    } else {
      reject();
    }
  })
}
function wait(callback, time) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(callback());
    }, time)
  })
}