//通过单调栈构建
function Node(data) {
  this.value = data;
  this.left = null
  this.right = null
}
function MaxTree(arr) {
  //将arr中的数字变为node节点
  var node = []
  for (var i = 0; i < arr.length; i++) {
    node[i] = new Node(arr[i])
  }
  //声明单调栈
  var stack = []
  //声明一个map.保存每一个节点的父节点
  var parents = {}
  //遍历所有的node数组中的节点,进栈出栈寻找最近的值
  for (var i = 0; i < node.length; i++) {
    var j = stack.length - 1
    while (j != 0 && stack[j].value < node[i].value) {//单调栈出栈
      //出栈并保存每个节点的父节点
      parents[stack.pop()] = (j == 0 || node[i].value < stack[--j].value) ? node[i] : stack[j];
    }
    stack.push(node[i])
  }
  //遍历结束栈中的元素弹出
  while (stack.length != 0) {
    parents[stack.pop()] = (stack.length != 0 ? stack[stack.length - 1] : null)
  }
  //构建树(通过建树的规则)
  var head = null;
  var parent = null;
  for (var i = 0; i != arr.length; i++) {
    parent = parents[node[i]];
    if (parent == null) {
      head = node[i]
    } else if (parent.left == null) {
      parent.left = node[i]
    } else {
      parent.right = node[i]
    }
  }
  return head
}