// jsonp的封装
function handleParams(data) {
  let params = '';
  for (let attr in data) {
    data[key] && (params += '&' + attr + '=' + data[attr]);
  }
  return params
}
export default function (options) {
  // 1.获取jsonp的url
  const url = options.url;
  // 2.创建script标签
  const script = document.createElement('script');
  // 3.创建callback函数名(不重复)
  const callback = 'jsonp' + Math.random().toString().replace('.', '');
  // 4.监听windows上的jsonp调用
  window[callback] = options.success;
  // 5.拼接参数,发送请求
  let params = handleParams(options.data);
  script.src = url + '?callback=' + callback + params
  // 6.标签追加到页面
  document.body.appendChild(script);
  // script添加onload()事件,执行结束,移出script标签
  script.onload = function () {
    document.body.removeChild(script)
  }
}