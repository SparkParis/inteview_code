// 数组中找出最大连续子数组和
function getSubMax(arr) {
  if (!arr) return null;
  var sum = 0;
  var max = arr[0];
  for (var i = 0; i < arr.length; i++) {
    if (sum < 0) {
      sum = 0;
    }
    sum += arr[i];
    max = sum > max ? sum : max;
  }
  return max;
}
console.log(getSubMax([100, -100, 1, 2, -4, 3, -2, 1, 5, -10]));