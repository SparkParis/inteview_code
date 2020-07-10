async function async1(){
  console.log('async1 start')
  await async2()
  console.log('async1 end')
}
async function async2(){
  console.log('async2')
}
console.log('script start')
setTimeout(function(){
  console.log('setTimeout') 
},0)  
async1();
new Promise(function(resolve){
  console.log('promise1')
  resolve();
}).then(function(){
  console.log('promise2')
})
console.log('script end')
/*
//执行同步任务(宏任务)
script start

async1 start
async2//await会阻塞代码的执行,导致后面的异步任务不能执行,后面是promise也是同步执行的微任务
promise1

script end

//执行微任务
async1 end
promise2

//执行异步代码中的宏任务
setTimeout


*/