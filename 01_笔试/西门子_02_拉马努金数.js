/**
 * （1）笔试题：给定字符串，让你根据字符串求出拉马努金数（解码的方式）
 */
function decode(str) {
  let nums = str.split('-');
  nums = nums.filter(a => a < 256);
  let res = 0; index = 0;
  while (index < nums.length - 1) {
    let cur = nums[index] / nums[index + 1];
    res = res * 10 + cur;
    index = index + 2
  }
  return res
}
//1729
decode('483-174-298-261-174-217-384-372-31-92-46-108-419-534-12')