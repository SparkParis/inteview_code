
function getMax(m) {
  if (m.length == 0 && m[0].length == 0) return 0
  var row = m.length;
  var col = m[0].length;
  var resCol = new Array(col).fill(0);
  var resRow = new Array(row).fill(0);
  for (var i = 0; i < col; i++) {
    for (var j = 0; j < row; j++) {
      resCol[i] += m[j][i];
    }
  };
  for (var i = 0; i < row; i++) {
    for (var j = 0; j < col; j++) {
      resRow[i] += m[i][j];
    }
  };
  var max = resCol[0] + resCol[resCol.length - 1];
  for (var i = 1; i < resCol.length; i++) {
    var temp = resCol[i] + resCol[i - 1];
    max = temp > max ? temp : max
  }
  for (var i = 1; i < resRow.length; i++) {
    var temp = resRow[i] + resRow[i - 1];
    max = temp > max ? temp : max
  }
  return max;
}
var m = [
  [2, 1, 2],
  [3, -2, 4],
]
console.log(getMax(m));

// var m;
// var row;
// var col;
// var lines = readline().split(" ");
// row = parseInt(lines[0]);
// col = parseInt(lines[1]);

// for (var i = 0; i < row; i++) {
//   lines = readline().split(" ")
//   for (var j = 0; j < col; j++) {
//     m[i][j] = parseInt(lines[j]);
//   }
// }