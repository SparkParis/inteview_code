// 腾讯视频前端笔试题

// 一、填空题 
// 1、填写运行结果：

function Page() {
  return this.hosts;
}
Page.hosts = ["h1"];
Page.prototype.hosts = ["h2"];

const p1 = new Page();
const p2 = Page();

console.log(p1.hosts); //______undefined________

console.log(p2.hosts); //_____p2 = undefined________//结果会报错,undefined的属性会报错


// 2、填写运行结果：

var value = 20;
(function () {
  console.log(name); //__undefined____________

  console.log(value); //_______error _______
  var name = 'local value';
  let value = 21;
})();
