/**
 * queneFetch([url1,url2,url3]).then([res1,res2,res3])
// fetch(url) // Promise
 */e
function queneFetch(arr) {
  return new Promise((resolve, reject) => {
    var res = [];
    function foo(args) {
      if (!args.length) {
        resolve(res)
      }
      fetch(args.shift()).then((result) => {
        res.push(result);
        if (args.length) foo(args);
        else resolve(res);
      }).catch(() => {
        reject(res);
      })
    }
    foo(arr);
  })
}
// reduce实现promise(将参数进行请求的封装)
let promises = arr.map((item) => {
  return fetch(item);
})
function queneFetchReduce(arr) {
  return new Promise((resolve, reject) => {
    let promises = arr.map((item) => {
      return fetch(item);
    });
    var res = [];
    for (var i = 0; i <= promises.length; i++) {
      if (i == promises.length) {
        resolve(res);
      }
      promise[i].then((value) => {
        res.push(value);
      }, () => {
        reject(res);
        return
      })
    }
  })
}

// promise.all实现
Promise.all = function (promises) {
  return new Promise((resolve, reject) => {
    let res = [], index = 0, len = promises.length;
    if (len == 0) {
      //所有的都执行完毕直接返回数组
      resolve(res);
      return
    }
    //循环执行每个返回的结果
    for (let i = 0; i < len; i++) {
      Promise.resolve(promises[i]).then((data) => {
        res[i] = data;
        index++;
        if (index == len) resolve(res);//全部执行完毕resolve结果
      }).catch(err => {
        //存在一个请求错误则字节返回错误信息
        reject(err)
      })
    }
  })
}

//promise.race手动实现:只要有一个promise执行完毕则直接返回
Promise.race = function (promises) {
  return new Promise((resolve, reject) => {
    let len = promises.length;
    if (len == 0) return;
    for (let i = 0; i < len; i++) {
      Promise.resolve(promises[i]).then((data) => {
        resolve(data);
        return;
      }).catch(err => {
        reject(err);
        return
      })
    }
  })

}