
/*
假设有三种重量砝码: 2g, 3g, 7g, 对于任意重量的物品,
 请设计一个函数getResult(weight), 接受一个参数weight, 
 返回所需砝码的最小数量
*/
var stand1 = 2;
var stand2 = 3
var stand3 = 7
function getResult(weight) {
  if (weight < 1) return 0
  var count = 0;
  var rest
  if (weight >= stand3) {
    count += Math.floor(weight / stand3);
    rest = weight % stand3;
  }
  if (rest >= stand2) {
    count += Math.floor(rest / stand2);
    rest = rest % stand2;
  }
  if (rest >= stand1) {
    count += Math.floor(rest / stand1);
    rest = rest % stand1;
  }
  return count
}
// console.log(getResult(100));

// 优化
function getResult2(weight, arr) {
  var count = 0;
  var rest = weight;
  arr.sort((a, b) => {//从大到小的顺序
    return b - a;
  })
  for (var i = 0; i < arr.length; i++) {
    if (rest >= arr[i]) {
      count += Math.floor(rest / arr[i]);
      rest = rest % arr[i];
    }
  }
  return count
}
var arr = [1, 7, 2]
console.log(getResult2(100, arr));
