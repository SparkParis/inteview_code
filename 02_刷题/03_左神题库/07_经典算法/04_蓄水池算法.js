// 1.从1-max随机产生一个数
function rand(max) {
  return parseInt(Math.random() * max) + 1
}
/**
 * 
 * @param {容器的大小} k 
 * @param {共吐出的球数} max 
 */
function getKNumRand(k, max) {
  if (max < 1 || k < 1) return null;
  var res = new Array(Math.min(k, max));
  // 前10个球直接进袋子
  for (var i = 0; i != res.length; i++) {
    res[i] = i + 1;
  }
  //后面的球先计算是否能进,能进的情况下求出被替换的球替换
  for (var i = k + 1; i < max + 1; i++) {
    if (rand(i) <= k) {
      res[rand(k) - 1] = i
    }
  }
  return res
}