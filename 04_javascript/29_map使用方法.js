// map的声明
var map = new Map();
//map的操作
map.set('key', 'value');
map.set('key1', 'value1');
console.log(map.size);//注意map这里是属性不是方法
console.log(map.get('key'));;
console.log(map.has('key'));;
map.delete('key');
map.clear();

// map的属性方法

map.set('key', 'value');
map.set('key1', 'value1');
map.set('key2', 'value2');
map.set('key3', 'value3');
console.log(map);
// 1.遍历forEach()
/*
forEach((value,key,map)=>{})
 */
map.forEach((item, index, map) => {
  console.log(item, ' ', index, ' ', map);
});
//迭代器的遍历
console.log(map.entries());
console.log(map.keys());//{ 'key', 'key1', 'key2', 'key3' }
console.log(map.values());//{ 'value', 'value1', 'value2', 'value3' }
for (var item of map.entries()) {
  console.log(item);//[ 'key', 'value' ]
}