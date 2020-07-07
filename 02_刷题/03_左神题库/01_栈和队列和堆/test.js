function maxSlidingWindow(arr, k) {
  if (!arr || arr.lenghth < k || arr.length < 1) return null;
  var window = [];
  var res = []
  //每个元素进行一次遍历
  for (var i = 0; i < arr.length; i++) {
    if (window[0] == i - k) {
      window.shift()
    }
    var j = window.length - 1
    while (j >= 0 && arr[window[j]] <= arr[i]) {
      j--;
      window.pop()
    }
    window.push(i);
    if (i >= k - 1) {
      res.push(arr[window[0]])
    }
  }
  return res
}
var arr = [1, 3, -1, -3, 5, 3, 6, 7];
var res = maxSlidingWindow(arr, 3);
console.log(res);