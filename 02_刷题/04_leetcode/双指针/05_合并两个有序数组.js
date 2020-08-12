var merge = function (nums1, m, nums2, n) {
  var i = m - 1;
  var j = n - 1;
  var index = nums1.length - 1;
  while (i >= 0 && j >= 0) {
    if (nums1[i] > nums2[j]) {
      nums1[index--] = nums1[i--];
    } else {
      nums1[index--] = nums2[j--];
    }
  }
  while (j >= 0 && index >= 0) {
    nums1[index--] = nums2[j--]
  }
  return nums1
};