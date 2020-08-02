// 数组解构赋值
var arr = [1, 2, 3]
var [a, b] = arr;
console.log(a);//1
console.log(b);//2
var [b, a] = [a, b]
console.log(a);//2
console.log(b);//1

// 对象的结构赋值（要名）
var obj = { name: '张三', age: 12, o: { name: '李四' } }
var { name: newName, age } = obj;//name: newName为name重命名
console.log(age, newName);
var { test, c = 1 } = obj
console.log(test, c);//不存在的属性返回undefined,1,c时设置的默认值可以直接获取

// 字符串结构和数组类似
var str = '123'
var [s1, s2, s3] = str
console.log(s1, s2, s3);//1 2 3

// 函数的解构是自动的
function foo([x, y]) {
  console.log(x);
  console.log(y);
}
foo([12, 13]);//12,13