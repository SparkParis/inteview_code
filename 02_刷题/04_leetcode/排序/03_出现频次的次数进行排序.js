var frequencySort = function (s) {
  s = s.match(/./g);
  var map = new Map();
  for (var value of s) {
    map.set(value, map.has(value) ? map.get(value) + 1 : 1)
  }
  var bucket = Array(s.length + 1).fill(null);
  map.forEach((value, key) => {
    if (bucket[value] == null)
      bucket[value] = [key]
    else
      bucket[value].push(key);
  })
  var index = s.length;
  var str = ''
  while (index >= 0) {
    if (bucket[index] == null) {
      index--;
      continue;
    }
    bucket[index].forEach((item) => {
      str += item.repeat(index)
    })
    index--;
  }
  return str
};
console.log(frequencySort('tree'));