// 1.从上往下打印出二叉树的每个节点，同层节点从左至右打印
function printTopToBottom(root) {
  if (!root) return null
  //队列存储
  var queue = [];
  queue.push(root);
  var res  =[]
  while (root || queue.length) {
    var cur = queue.shift();//从头取出
    res.push(cur.val);
    if(cur.left){
      queue.push(cur.left)
    }
    if(cur.right){
      queue.push(cur.right)
    }
  }
  return res
}
// 2.把二叉树打印成多行
function printMore(root){
  if(!root) return null
  var queue = [];
  var temp = [];
  queue.push(root);
  while(root||queue.length){
    
  }
}