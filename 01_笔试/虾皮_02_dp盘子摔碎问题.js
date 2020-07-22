function dp(itime, j) {
  if (itime == 1) {
    return 1
  }
  if (j == 1) {
    return itime
  }
  return dp(itime - 1, j - 1) + dp(itime - 1, j) + 1;
}
function leastTime(i, j) {
  var res = 1;
  while (dp(res, i) < j) {
    res++
  }
  return res
}
console.log(leastTime(1, 2))
var line1 = readline().split(" ");
var m = parseInt(line1[0])
var n = parseInt(line1[1])