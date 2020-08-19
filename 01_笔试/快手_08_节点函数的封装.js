/**
<ul>
<li>1</li>
<li>2</li>
<li>3</li>
</ul>
实现一个函数，输入[1,2,3],输出上面的Dom结构。
点击每个li都会输出li包含的文本。
 */
function foo(nums) {
  var ul = document.createElement('ul');
  for (var i = 0; i < nums.length; i++) {
    var li = document.createElement('li');
    li.innerText = nums[i];
    ul.appendChild(li);
  }
  ul.addEventListener('click', function (event) {
    console.log(event.target.innerText);
  })
  return ul
}