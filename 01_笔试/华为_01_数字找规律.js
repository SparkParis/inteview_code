/**
 * 含有0-9的数字串列表,找出有指定数字串有关联特征值的序列.
 * 特征值是指数字串中比给定临界值小的数字按照顺序组成的数字串.如果给定数字串的特征值为当前数字串的特征值的子字符串,则认为当前字符串与给定字符串具有关联特征值
 */
/**
 *寻找特征值
 */
function getFeature(str, num) {
  if (!str) return '';
  let arr = str.match(/./g);
  let index = arr.length;
  let res = ''
  while (index >= 0) {
    if (parseInt(arr[index]) < num) {
      res = res + arr[index];
    }
    index--;
  }
  return res;
}
/*
arr中存储的是所有的输入,arr[-1]是当前待查的字符串,arr[-2]是待查字符串的数字
*/
function getRes(arr) {
  let cur = arr[arr.length - 1];
  let num = parseInt(arr[arr.length - 2]);
  let feature = getFeature(cur, num);
  for (let i = 0; i < arr.length - 2; i++) {
    let temp = getFeature(arr[i], num);
    if (temp.includes(feature)) {//根据字符串判断是不是其子串
      console.log(arr[i], temp, feature);
    }
  }
}
let arr = ['135682318', '23457', '14282123', '14231728', '3', '1724153']
getRes(arr)
/**输入和输出处理
 */
let n = readline();
while (m = readline()) {
  let arr = m.split(' ');
  arr.sort();
  console.log(arr.join(' '))
}

// 字符串方法练习
let str = 'abcdsdsdfdsx';
// 1.charAt(num)返回指定位置的字符
console.log(str.charAt(5));//d
// 2.charCodeAt(num)返回指定位置的字符编码
console.log(str.charCodeAt(5));//100
//3.concat(...args),连接字符串
console.log(str.concat('3', 5, '6'), typeof str.concat('3', 5, '6'));//abcdsdsdfdsx356 string
//4.slice(start,end),截取指定范围内的字符并返回
console.log(str.slice(2, 5));//cds
//5.split(char)通过char对应的字符来讲字符转化为数组
console.log(str.split('d'));//[ 'abc', 's', 's', 'f', 'sx' ]
//6.substring(start,end),截取指定范围内的字符
console.log(str.substring(2, 5));//cds,这里和slice作用相同
// 7.substr(start,num)//从指定位置开始截取指定数量的字符
console.log(str.substr(2, 6));//cdsdsd
// 8.indexOf(str)//返回指定字符串在字符中起始的位置(这里只返回从左往右数第一个匹配的字符下标)
console.log(str.indexOf('cds'));//2
// 9.lastIndexOf(str)从后往前数第一个
console.log((str.lastIndexOf('cds')));//2,如果第一个和最后一个返回的结果相同则说明当前待查的字符串在字符串中是唯一的
// 10.toUpperCase()转化为大写字母
console.log(str.toUpperCase());//ABCDSDSDFDSX
// 11.toLowerCase()转化为小写字母
console.log('ABCDSDSD123FDSX'.toLowerCase());//abcdsdsdfdsx
console.log('ABCDSDSD123FDSX'.toLocaleLowerCase());//abcdsdsdfdsx
// 12.实现将大写的转化为小写,将小写转化为大写
function convertReverse(str) {
  // console.log('A'.charCodeAt())//65
  // console.log('z'.charCodeAt())//90,大写的范围是[65-90)
  let arrStr = str.match(/./g);
  for (let i = 0; i < arrStr.length; i++) {

    arrStr[i] = (arrStr[i].charCodeAt(0) >= 65 && arrStr[i].charCodeAt(0) < 90) ? arrStr[i].toLowerCase() : arrStr[i].toUpperCase();
  }
  return arrStr.join('')
}
console.log(convertReverse('addfdADSDss'));

// 14 search(regexp)
console.log(str.search(/cds/ig));//2返回的是索引号
// 15 match(reg)
console.log(str.match(/[cd]/g));//[ 'c', 'd', 'd', 'd', 'd' ]返回含有c或者d的字符串数组
// 16 replace(reg, str/function)
console.log(str.replace(/cd/ig, '123'))
let s = 'sasds_Afdg'.replace(/\_(\w)/g, function () { return arguments[1].toUpperCase() })
console.log(s);//sasdsAfdg
//reg.$num
let reg = /(\w+)\s(\w+)/g;
'dsd dsf3 '.replace(reg, '$2,$1');
console.log(RegExp.$1);//dsd
console.log(RegExp.$2);//dsf3
