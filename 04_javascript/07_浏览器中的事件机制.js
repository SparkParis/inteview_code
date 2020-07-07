console.log(1)
let promise = new Promise(function (resolve, reject) {
  console.log(3)
  resolve(100)
}).then(function (data) {
  console.log(data)
})
setTimeout(function () {
  console.log(4);
})
console.log(2)//执行结果1 3 2 100 4