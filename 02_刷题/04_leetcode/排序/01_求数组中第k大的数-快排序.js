function findKthLargest(nums, k) {
  k = nums.length - k;
  var l = 0, h = nums.length - 1;
  while (l < h) {
    var j = partition(nums, l, h);
    if (j == k) {
      break;
    } else if (j < k) {
      l = j + 1;
    } else {
      h = j - 1;
    }
  }
  return nums[k];
}

function partition(a, l, h) {
  var i = l, j = h + 1;
  while (true) {
    while (a[++i] < a[l] && i < h);
    while (a[--j] > a[l] && j > l);
    if (i >= j) {
      break;
    }
    swap(a, i, j);
  }
  swap(a, l, j);
  return j;
}

function swap(a, i, j) {
  var t = a[i];
  a[i] = a[j];
  a[j] = t;
}

var arr1 = [3, 2, 1, 5, 6, 4]
var arr2 = [3, 2, 3, 1, 2, 4, 5, 5, 6]
console.log(findKthLargest(arr1, 2));
console.log(findKthLargest(arr2, 4));