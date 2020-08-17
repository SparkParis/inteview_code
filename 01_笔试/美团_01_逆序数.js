function reverseCount(num) {
  if (num < 1) return 0;
  var map = new Map();
  var count = 0
  for (var i = 1; i <= num; i++) {
    var temp = reverse(i + '');
    if (i * 4 == temp) {
      map.set(i, temp);
      count++;
    }
  }
  console.log(count);
  if (count) {
    for (var item of map.entries()) {
      console.log(item[0], item[1])
    }
  }

}
function reverse(str) {
  if (!str) return '';
  var num = parseInt(str);
  var index = str.length
  var res = 0;
  while (index > 0) {
    var temp = num % 10;
    num = Math.floor(num / 10);
    res = res * 10 + temp;
    index--;
  }
  return res
}
reverseCount(10000);