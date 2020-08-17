
// var n = readInt();
// var map = new Map();
// while ((line = read_line()) != '') {
//   line = line.split(' ');
//   map.set(line[0], line[1]);
// }

var map = new Map();
map.set('beijing', 'nanjing')
map.set('nanjing', 'guangzhou')
map.set('guangzhou', 'shanghai')
map.set('shanghai', 'beijing')
map.set('fuzhou', 'beijing')
map.set('beijing', 'fuzhou')
function getCount(map, n) {
  var count = 0;
  for (var item of map.entries()) {
    var start = item[0];
    var end = item[1];
    var c = 1;
    while (map.get(end) && c != n) {
      end = map.get(end);
      c++;
    }
    if (c == n && start == end) {
      count++;

    }
  }
  return count
}
console.log(getCount(map, 6))