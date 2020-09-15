/**
 * 数组降序排序并输出,如果连续输出最大值和最小值,如果不连续,直接输出排序后的结果
 */
function getRes(arr) {
  arr.sort((a, b) => {
    return b - a;
  })
  var res = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] != (arr[i + 1] + 1)) {
      res.push(arr[i]);
    } else {
      res.push(arr[i]);
      while (arr[i] == (arr[i + 1] + 1)) {
        i++;
      }
      res.push(arr[i]);
    }
  }
  return res.join(',')
}
let arr = [4, 7, 2, 1, 5, 8, 9, 11];
arr = [3, 4, 5, 6, 7, 8, 9]
console.log(getRes(arr));