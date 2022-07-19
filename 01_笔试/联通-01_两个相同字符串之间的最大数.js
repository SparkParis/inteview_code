
function maxLengthBetweenEqualCharacters(s) {
  // write code here
  let map = new Map();
  s.split("").forEach((x) => {
    map.set(x, (map.get(x) || 0) + 1);
  })
  const arr = Array.from(map).sort((a, b) => b[1] - a[1]).filter((x) => x[1] > 1)
  if (!arr.length) return -1;
  const res = [];
  for (let i = 0; i < arr.length; i++) {
    res.push(Math.max(s.lastIndexOf(arr[i][0]) - s.indexOf(arr[i][0]) - 1))
  }
  return Math.max(...res)
}
console.log(maxLengthBetweenEqualCharacters("fwejfldskjf"))