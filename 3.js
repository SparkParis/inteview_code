var line = read_line().split(' ');
var n = parseInt(line[0]);
var m = parseInt(line[1])
var map = new Map();
while ((line = read_line()) != '') {
  line = line.split(' ');
  map.set(line[0], line[1]);
}
//n订单数量
function getRes(map, n, m) {
  var count = 1;
  var set = new Set();
  var visit = [];
  var index = 0
  for (var item of map.entries()) {
    if (!res[index].length) {
      res[index].push(item[0], item[1]);
    } else if ((res[index].includes((item[0]) || res[index].includes(itemp[1])))) {
      res[index].push(item[0].includes)
    }

  }

}