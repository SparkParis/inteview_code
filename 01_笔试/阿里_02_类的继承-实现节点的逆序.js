/**
* 题目2：写一个类 Dom，实现方法 queryElementById，再写一个子类 DomUtils 继承父类 Dom，实现方法 reverse
* 注意使用 ES5 实现
* 
* 利用上面的类方法，输入一个 dom 节点 id，实现翻转这个节点的子节点顺序，如下示例将 container 的子
//节点从 1 2 3 变为 3 2 1
* <div id="container">
*   <div>1</div>
*   <div>2</div>
*   <div>3</div>
* </div>
*/
function Dom(id) {
  this.id = id;
}
Dom.prototype.getDom = function () {
  return document.querySelector(this.id);
}

function DomUtils(id) {
  //继承父类的属性
  Dom.call(this, id);
}
// 方式1:实现父类的方法继承
DomUtils.prototype = Object.create(Dom.prototype);
DomUtils.prototype.constructor = DomUtils;
//方式2:直接将之类的圆形执行父类的实例
// DomUtils.prototype = new Dom();

// 实现子类的方法
DomUtils.prototype.reverseChildOrder = function () {
  //获取id的dom对象的子节点
  var dom = this.getDom();
  var child = dom.children;//注意这里是属性
  var str = '';
  for (var i = child.length - 1; i >= 0; i--) {
    str += child[i].outerHTML;
  }
  dom.innerHTML = str;
}
/*
注意这里是innerHTML和outerHTML的区别
*/