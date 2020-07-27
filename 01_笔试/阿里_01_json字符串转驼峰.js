/**
 * 题目1：写个转换函数，把一个 JSON 对象的 key 从下划线形式转换到小驼峰形式
 * 即 {a_b: 1, c_de_f: 2} ——> {aB: 1, cDeF: 2}
 * 注意考虑嵌套情况，且不能改变原数据
 */
// 字符串的测试
// 将字符串中的_命名转化为驼峰式
function toHump(name) {
  return name.replace(/\_(\w)/g, function () {//正则表达式中加括号就是采用分组匹配,从第二个参数开始就是分组匹配的参数
    return arguments[1].toUpperCase();//转化为大写
  });
}
function jsonToHump(json) {
  var map = {}
  for (var item of Object.entries(json)) {//注意这里使用的是for of
    if (!Array.isArray(item)) {
      map[item] = jsonToHump(item)
    } else {
      var key = toHump(item[0]);
      map[key] = item[1];
    }
  }
  return map;
}
console.log(jsonToHump({ a_b: 1, c_de_f: 2 }));

// 驼峰式转下划线(通过括号的方式锁定子表达式通过$1获取)
function toLine(value) {
  return value.replace(/([A-Z])/g, '_$1').toLowerCase()
}
console.log(toLine('aB'));





