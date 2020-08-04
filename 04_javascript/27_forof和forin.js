var arr = [4, 2, 5, 6]
var obj = {
  name: 'zhangsan',
  age: 12,
  height: 1.8
}
// for of 用于遍历value,for in用于遍历key
for (var value of arr) {
  console.log(value, 'value');//打印的是数组的值4,2,5,6
}
for (var key in arr) {
  console.log(key, 'key');//打印的是key,数组返回的是0,1,2,3的索引
}
for (var value of Object.entries(obj)) {
  console.log(value, 'value');//对象直接通过of打印报错,通过entries转化为迭代器的形式,[ 'name', 'zhangsan' ]
}
for (var key in obj) {
  console.log(key, 'key');//打印的是key,对象返回的是key值:name,key,height
}

// for in 主要用于对象for of 主要用于数组