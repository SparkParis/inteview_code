function getN(n) {
  return 1 / (10 * n * (2 * n - 1))
}
function getResult(n) {
  if (n < 0) return 0;
  var res = 0;
  var index = n
  while (index > 0) {
    res += getN(index);
    index--;
  }
  return parseFloat(res).toFixed(4)
}
var n = readInt()
print(getResult(n));
