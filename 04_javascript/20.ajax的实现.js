// 1.创建ajax对象
var xhr = new XMLHttpRequest();
// 2.通过open建立连接
xhr.open('get','/first');
//当发送请求的过程中会有ajax的状态码来表示请求发送的每个阶段，
// 3.xhr.readState来获取，，当ajax发生变化的时候会自动出发onReadyStateChange事件
xhr.onreadystatechange= function(){
  if(xhr.readyState==4){
    // ajax的状态显示4的时候表示当前请求已经发送完毕并得到了相应
    console.log(xhr.responseText);
  }
}
//4.发送请求
xhr.send();
//请求发送结束之后会调用onload响应事件，接收服务器端发送过来的数据
xhr.onload = function(){
  console.log(xhr.responseText)
}
