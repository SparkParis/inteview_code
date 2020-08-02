/*
const arr = [{name: 'li', age: 20}, {name: 'tang', age: 30}];
转为
{
    li: {name: 'li', age: 20},
    tang: {name: 'tang', age: 30}
}
使用reduce

*/
const arr = [{ name: 'li', age: 20 }, { name: 'tang', age: 30 }];
var res = arr.reduce((obj, item) => {
  if (!obj.hasOwnProperty(item.name)) {
    obj[item.name] = item
  }
  return obj
}, {})
console.log(res);
