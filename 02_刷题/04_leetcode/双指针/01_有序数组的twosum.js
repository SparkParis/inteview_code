function twoSum(numbers, target) {
  var left = 0;
  var right = numbers.length - 1;
  while (left < right) {
    var temp = numbers[left] + numbers[right];
    if (temp == target) {
      return [left + 1, right + 1]
    } else if (temp < target) {
      left++;
    } else {
      right++
    }
  }
  return []
}