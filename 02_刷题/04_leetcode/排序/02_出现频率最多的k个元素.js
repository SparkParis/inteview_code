var topKFrequent = function (nums, k) {
  var map = new Map();
  for (var val of nums) {
    if (!map.get(val)) {
      map.set(val, 1);
    } else {
      map.set(val, map.get(val) + 1);
    }
  }
  var bucket = Array(nums.length + 1).fill(null);
  map.forEach((value, key) => {
    if (bucket[value] == null)
      bucket[value] = [key]
    else
      bucket[value].push(key);
  })
  var res = []
  var index = bucket.length;
  while (index >= 0) {
    if (bucket[index] == null) {
      index--;
      continue;
    }
    res.push(...bucket[index]);
    index--;
  }
  return res.slice(0, k)
};
var nums = [4, 1, -1, 2, -1, 2, 3], k = 2;
console.log(topKFrequent(nums, k));