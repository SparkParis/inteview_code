function GetLeastNumbers_Solution(input, k) {
  // write code here
  if (!input || input.length < k) return [];
  var result = [];
  input.sort((a, b) => a - b)
  result.push(...input.slice(0, k))
  return result
}
console.log(GetLeastNumbers_Solution([4, 5, 1, 6, 2, 7, 3, 8], 4));
