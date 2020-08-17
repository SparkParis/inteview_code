function getCount(num) {
  if (num < 7) return 0;
  var stack = [];
  var count = 0;
  var mod;
  while (num > 0) {
    mod = num % 8;
    num = Math.floor(num / 8);
    if (mod == 7) {
      count++
    }
  }
  return count

}
// var n = parseInt(readline());
// console.log(getCount(888));