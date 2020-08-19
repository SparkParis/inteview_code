/**
 * let obj = {
  a: 100,
  count: 0,
  }
  用Proxy实现当修改a的值时，count+1。
 */
let obj = { a: 100, count: 0, c: 'hello' };
let proxy = new Proxy(obj, {
  set(target, key, value, receiver) {
    if (key == 'a') {
      return Reflect.set(target, 'count', target.count + 1);
    }
  },
  deleteProperty(target, key) {
    //不允许删除a,直接返回false,其他属性直接删除
    if (key == 'a') {
      return false;
    }
    return Reflect.deleteProperty(target, key);//注意这里返回的是boolean值true或者false
  },
  has(target, key) {
    if (key == 'a') {//通过这种方式可以隐藏target中的属性
      return false;
    }
    return Reflect.has(target, key);
  }
})
proxy.a = 300;
proxy.a = 300;
delete proxy.a;//这里删除返回的是false
delete proxy.c;
console.log('a' in proxy);//会自动调用has方法
console.log('c' in proxy);//false表明删除成功
console.log(obj);
console.log(proxy)

