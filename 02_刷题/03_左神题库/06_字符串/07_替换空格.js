// 1.
function replace(str) {
  return str.split(' ').join('%20')
}
// 2
function replace2(str) {
  return str.replace(/\s/g, '%20')
}

console.log(replace('world hello '.trim()));
console.log(replace2('world hello'));