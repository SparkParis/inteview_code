// 验证url
function isUrl(url) {
  var strRegex = '^((https|http|ftp|rtsp|mms)?://)'
    + '?(([0-9a-z_!~*\'().&=+$%-]+: )?[0-9a-z_!~*\'().&=+$%-]+@)?' //ftp的user@ 
    + '(([0-9]{1,3}.){3}[0-9]{1,3}' // IP形式的URL- 199.194.52.184 
    + '|' // 允许IP和DOMAIN（域名） 
    + '([0-9a-z_!~*\'()-]+.)*' // 域名- www. 
    + '([0-9a-z][0-9a-z-]{0,61})?[0-9a-z].' // 二级域名 
    + '[a-z]{2,6})' // first level domain- .com or .museum 
    + '(:[0-9]{1,4})?' // 端口- :80 
    + '((/?)|' // a slash isn't required if there is no file name 
    + '(/[0-9a-z_!~*\'().;?:@&=+$,%#-]+)+/?)$';
  var re = new RegExp(strRegex);
  //re.test() 
  if (re.test(url)) {
    return (true);
  } else {
    return (false);
  }
}

// 方式1.正则解析url
function parseUrl(url) {
  // 协议
  var protocal = url.slice(0, url.indexOf(":"));
  // 域名和端口
  var tmp = url.slice(url.indexOf('//') + 2);
  var domain = tmp.slice(0, tmp.indexOf('/'));

  var idx = tmp.indexOf(':');
  var domainName;
  var port;
  // 判断端口是否存在
  if (idx != -1) {
    domainName = domain.slice(0, idx)
    port = domain.slice(idx + 1)
  } else {
    domainName = domain
    port = -1
  }
  var params = tmp.slice(tmp.indexOf('/') + 1)
  // console.log(protocal);
  // console.log(domainName);
  // console.log(port);
  // console.log(params);
  return {
    protocal: protocal,
    domainName: domainName,
    port: port,
    params: params
  }
}
// 方式2. 正则解析/^(\w+):\/\/([^\/:]*)(?::(\d+))?\/(.*)/
function parseUrlReg(url) {
  var reg = /^(\w+):\/\/([^\/:]*)(?::(\d+))?\/(.*)/
  reg.exec(url)
  // console.log(RegExp.$1);
  // console.log(RegExp.$2);
  // console.log(RegExp.$3);
  // console.log(RegExp.$4);
  return {
    protocal: RegExp.$1,
    domainName: RegExp.$2,
    port: RegExp.$3,
    params: RegExp.$4
  }
}

var url = 'http://ppp.com:8090/mximprove/mxt/scripts/views/MainViewController.js'
// parseUrl(url)
const obj = parseUrlReg(url)
console.log(obj);