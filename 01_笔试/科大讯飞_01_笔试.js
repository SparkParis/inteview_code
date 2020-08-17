function getCount(n) {
  var res = 0;
  while (n != 0) {
    n &= (n - 1);
    res++;
  }
  return res
}
// console.log(getCount(32));

function getString(str, n) {
  var s = str + str;
  return s.slice(n, str.length + n);
}
console.log(getString('helloworld', 5));

// 选择排序实现
function swap(arr, i, j) {
  var temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}
function partition(arr, L, R) {
  var less = L - 1;
  var more = R + 1;
  var cur = L;
  var num = arr[R];
  while (cur < more) {
    if (arr[cur] < num) {
      swap(arr, ++less, cur++)
    } else if (arr[cur] > num) {
      swap(arr, --more, cur)
    } else {
      cur++;
    }
  }
  return [less + 1, more - 1]
}
function quickSort(arr, L, R) {
  if (!arr || arr.length < 2) return
  if (L < R) {
    swap(arr, parseInt(Math.random() * (R - L + 1)) + L, R);
    var range = partition(arr, L, R);
    quickSort(arr, L, range[0] - 1);
    quickSort(arr, range[1] + 1, R);
  }
}