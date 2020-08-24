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