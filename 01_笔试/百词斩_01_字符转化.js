function getRes(str) {
  if (!str) return ''
  var res = [];
  var i = 0;
  var temp = 1;
  str = str.match(/./g);
  for (var i = 0; i < str.length + 1; i++) {
    if (str[i] == str[i + 1]) {
      temp++;
    } else {
      res.push(str[i]);
      if (temp > 1) {
        res.push(temp)
      }
      temp = 1;
    }
  }
  return res.join('')
}
console.log(getRes('aabccccaaa'));