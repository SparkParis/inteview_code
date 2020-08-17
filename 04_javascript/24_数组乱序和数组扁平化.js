var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
arr.sort(function () {
  return Math.random() - 0.5;
})
// console.log(arr);

// 数组扁平化基本实现
function flatten(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      result = result.concat(flatten(arr[i]))
    } else {
      result.push(arr[i])
    }
  }
  return result
}
const arr1 = [3, 4, 5, [1, 2, 4]];
console.log(flatten(arr1));
// 2.reduce实现
function flatten2(arr) {
  return arr.reduce((target, current) => {
    return target.concat(Array.isArray(current) ? flatten2(current) : current)
  })
}