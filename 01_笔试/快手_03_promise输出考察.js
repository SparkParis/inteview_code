Promise.resolve().then(() => {
  throw new Error()
}, (err) => {
  console.log(err);//then的两个参数中第一个函数的错误在第二个函数中是不能进行捕获异常的,但是可以通过catch进行捕获
})
  .catch(() => {
    console.log(2)//
  })
async function get() {
  return await 1; //Promise.resolve()->await 后面的内容会被Promise.resolve()进行包裹,返回的是promise可以链式调用回去结果;
}
get().then((res) => {
  console.log(res, 'res')
});
//执行的结果是2,1
/**注意async其实是promise的语法糖,通过async声明的函数其实是promise进行了包裹
 *返回的是promise对象,await返回的是promise,实质是通过promise.resolve进行了包裹
 因此await返回的结果可通过链式调用的方式获取到返回的结果
 */

async function timeout(ms) {
  await new Promise((resolve) => {
    setTimeout(resolve, ms)
  })
}
async function asyncConsole(value, ms) {
  await timeout(ms)//会阻塞代码的执行
  console.log(11);
  console.log(value)
}
asyncConsole('hello async and await', 1000);//hello async and await