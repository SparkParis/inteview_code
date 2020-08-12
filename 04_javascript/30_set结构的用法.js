//set类似于数组,不能含有重复的数值,也是一个对象,
var s = new Set([1, 2, 3, 4, 4, 5]);
var color = new Set(['green', 'red', 'yellow']);

//伪数组转化为真正的数组的方法
console.log([...s]);
console.log(Array.from(s));

// set的方法
s.add(10).add(21).add(22)//添加属性
console.log(s.has(5));//true  判断是否含有某属性
console.log(s.size); //set的属性size获取长度

// set中的键名=值名

console.log(color.values());//{ 'green', 'red', 'yellow' }
console.log(color.keys());//{ 'green', 'red', 'yellow' }
console.log(color.entries());
/*
{
  [ 'green', 'green' ],
  [ 'red', 'red' ],
  [ 'yellow', 'yellow' ]
}
*/

// 遍历通过for of
for (var item of s) {
  console.log(item);
}

// 通过forEach遍历
s.forEach((key, value) => {//set中key和value的值是一样的
  console.log(key);
  console.log(value);
})