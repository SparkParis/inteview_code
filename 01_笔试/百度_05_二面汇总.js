function reverse(str) {
  if (!str) return '';
  var res = []
  var stack = [];
  for (var i = 0; i < str.length; i++) {
    stack.push(str[i]);
  }
  var index = stack.length - 1;
  while (index >= 0) {
    var cur = stack.pop();
    if (cur == '0' && index == str.length - 1) {
      index--;
      continue;
    }
    res.push(cur);
    index--
  }
  return res.join('');
}
// 1.输入数字实现逆序,注意末尾为0的是不能返回的(通过取余的方式)
function reverse2(str) {
  if (!str) return '';
  var num = parseInt(str);
  var index = str.length
  var res = 0;
  while (index > 0) {
    var temp = num % 10;
    num = Math.floor(num / 10);
    res = res * 10 + temp;
    index--;
  }
  return res
}
var str = '12300'
// console.log(reverse2(str));

// 2.reduce的实现如下效果
const arr = [{ name: 'li', age: 20 }, { name: 'tang', age: 30 }]
var res = arr.reduce((obj, item) => {
  if (!obj.hasOwnProperty(item.name)) {
    obj[item.name] = item
  }
  return obj
}, {})
// console.log(res);


// 3 封装dom类,能对真实dom进行操作
/**
 * 创建实例:const dom = new Dom('.class')
 * 可以改变样式:dom.style('color','#f00')
 * 可以改变文案:dom.text('hello baidu')
 * 实现链式调用:dom.style('color','#000').text('hello baidu')
 */
class Dom {
  constructor(select) {
    this.dom = document.querySelector(select)
  }
  style(sty, value) {
    this.dom.style[sty] = value
    return this//实现链式调用,返回this
  }
  text(te) {
    this.dom.textContent(te)
    return this
  }
}

// 4 说下改变this的api,实现call的封装
Function.prototype.myCall = function (context) {
  var context = context || window;
  context.fn = this;
  var args = [...arguments].slice(1);
  var result = context.fn(args);
  delete context.fn;
  return result;
}
// 5 防抖函数实现立即执行和延迟执行两种
function debounce(fun, waitTime, flag) {
  var timer = null;
  return function (...args) {
    clearTimeout(timer);
    //立即执行
    if (flag && !timer) {
      fun.apply(this, args);
    }
    timer = setTimeout(() => {
      fun.apply(this, args)
    }, waitTime)
  }
}

// 通过reduce实现数组扁平化
function flatten(arr) {
  return arr.reduce((pre, item) => {
    return pre.concat(Array.isArray(item) ? flatten(item) : item)
  }, [])
}
var arr1 = [2, 3, 4, [4, 5, 6, [4, 3, 4, 6]]]
console.log(flatten(arr1));