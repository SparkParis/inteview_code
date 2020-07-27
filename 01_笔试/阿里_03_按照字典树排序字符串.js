/*
给定一串随机的字符序列（取值：a-z，可能存在重复字符），请输出尽可能按字典序排序的字符串
[b, a, d, c, a, b, d ]
*/
function dictSort(strArr) {
  var tempstr = [];
  for (var i = 0; i < strArr.length; i++) {
    if (tempstr.includes(strArr[i])) {
      //判断重复的元素在str数组中所在的位置
      var index = tempstr.indexOf(strArr[i]);
      // 如果已经存在的字符是最后一个,就没必要操作
      if (index == tempstr.length - 1) {
        continue;
      }
      // 判断字典序是不是比后一个大,大的情况下直接删除掉当前位置的字符,添加新的字符
      if (tempstr[index].charCodeAt(0) > tempstr[index + 1].charCodeAt(0)) {
        tempstr.splice(index, 1);
        tempstr.push(strArr[i]);
      }

    } else {
      // 不包含其中则直接放在数组中
      tempstr.push(strArr[i]);
    }
  }
  return tempstr;
}

var strArr = ['b', 'a', 'd', 'c', 'a', 'b', 'd'];//output:[ 'a', 'c', 'b', 'd' ]
// var strArr = ['b', 'b', 'd', 'a', 'b', 'c', 'd'];//output:[ 'b', 'a', 'c', 'd' ]
var result = dictSort(strArr);
console.log(result);
/*
逻辑实现:
eg:
['b', 'b', 'd', 'a', 'b', 'c', 'd']
                      1    2    3
循环进行到位置1时:
tempstr:['b', 'd', 'a']
位置1:'b'
此时比较的是:bda和dab的字典序列,
  - 字典中的字符串都是不重复的所以此时比较b:tempstr[index]和d:tempstr[index+1]dab的字典序列,
  - 字典序列的比较是从左到右进行比较的且是不重复的,当删除b:tempstr[index]的字符时,其后一位的d:tempstr[index+1]字符就是第二位,即的字典序列就可以直接判定dba和
  删除前:'b'   d   a   这里的b:tempstr[index]
  删除后:'d'   a   b   这里的d:tempstr[index+1]
  比较两个字符串的字典序列就是直接比较b:tempstr[index],d:tempstr[index+1]即可,后面的不需要在比较
*/