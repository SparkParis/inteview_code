/**
 * 两个升序数组a1和a2，将其合并为升序数组a3
 */
function merge(a1, a2) {
  var res = [];
  var i = 0;
  var j = 0;
  while (i < a1.length && j < a2.length) {
    if (a1[i] > a2[j]) {
      res.push(a2[j++])
    } else if (a1[i] < a2[j]) {
      res.push(a1[i++]);
    } else {
      res.push(a1[i++]);
      res.push(a2[j++]);
    }
  }
  while (i < a1.length) {
    res.push(a1[i++])
  }
  while (j < a2.length) {
    res.push(a2[i++]);
  }
  return res

}