function swap(arr, i, j) {
  var temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp
}
function insert(arr) {
  if (!arr && arr.length < 2) return
  for (var i = 1; i < arr.length; i++) {
    for (var j = i - 1; j >= 0 && arr[j] > arr[j + 1]; j--) {
      swap(arr, j, j + 1)
    }
  }
}