console.log(1);
setTimeout(() => {
  console.log(2);
}, 0);
console.log(3);
new Promise((resolve) => {
  console.log(5);
  setTimeout(() => {
    console.log(6)
    resolve()
  }, 1000);
}).then(() => {
  console.log(7);
})
// 1 3 5 2 6 7(始终是同步的任务先执行,异步任务按照挂起的顺序执行)