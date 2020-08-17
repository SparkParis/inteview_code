// 实现方式1:通过大数加权法
/*
通过以下的计算公式可以计算,版本号可以表示为'major.minor.patch'
通过如下的公式可以计算出待比较的目标版本号:
major*p^2+minor*p+patch
注意这里的p是一个常量势必版本号中的三者大出一个量级
*/
const arr = ['2.3.3', '4.3.4', '0.3.1'];
const p = 1000;
const gen = (arr) => {
  arr.split('.').reduce(reducer, 0)
}
const reducer = (acc, value, index) =>
  acc + (+value) * Math.pow(p, arr.length - index - 1);
arr.sort((a, b) => gen(a) > gen(b) ? -1 : 1)
console.log(arr);
//实现方式2:直接通过字符串进行排序,原因是比较字符串实际上比较的是unicode编码
const arr1 = ['0.1.1', '2.3.3', '0.302.1', '4.2', '4.3.5', '4.3.4.5'];
arr1.sort(function (a, b) {
  return a > b ? -1 : 1;//从大到小的顺序
})
console.log(arr1);

// 3.比较通用的方式3:循环比较法
const arr2 = ['0.1.1', '2.3.3', '0.302.1', '4.2', '4.3.5', '4.3.4.5'];
arr2.sort((a, b) => {
  let i = 0;
  const arr1 = a.split('.');
  const arr2 = b.split('.');
  while (true) {
    const s1 = arr1[i];
    const s2 = arr2[i++];
    if (s1 == undefined || s2 == undefined) {
      return arr2.length - arr1.length;
    }
    if (s1 == s2) continue;
    return s2 > s1 ? -1 : 1
  }
})
console.log(arr2);
const arr3 = [3, 6, 8, 1, 2]
arr3.sort(function (a, b) {
  return a > b ? -1 : 1
})
/**
 * a > b ? -1 : 1========b-a降序
 * a>b?1:-1=========a-b升序
 */
console.log(arr3);