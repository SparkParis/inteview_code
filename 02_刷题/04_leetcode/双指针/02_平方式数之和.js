function judgeSquareSum(c) {
  if (c < 0) return false
  var j = Math.floor(Math.sqrt(c));
  var i = 0;
  while (i <= j) {
    var power = i * i + j * j;
    if (power == c) {
      return true
    } else if (power < c) {
      i++
    } else {
      j--
    }
  }
  return false
}