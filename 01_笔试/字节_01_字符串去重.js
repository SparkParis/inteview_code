//字符串去重,时间复杂度限定在O(N),这里采用时间换空间的方式
function fun(s) {
  let str = '';
  const map = {};
  for (let i = 0; i < s.length; i++) {
    //不存在则直接保存,并放进对象中
    if (!map.hasOwnProperty(s[i])) {
      //给当前的键赋值
      str += s[i];
      //对象增加键值对的方式
      map[s[i]] = 1
    }
    map[s[i]]++
  }
  // 存在则不作任何操作
  console.log(map);

  return str
}

console.log(fun('aaabbbcccaaaddd'));

