/**该函数实现图片预加载的方式
 * 实现方法：加载n张图片，并监听这些图片加载完成,加载完成之后执行回调函数callback
 * 
load(urls) {}
 *
 */
/**
 * 
 * @param {图片加载的url列表} urls 
 * @param {图片加载完成之后执行的回调函数} callback 
 */
function preImageLoad(urls, callback) {
  //当所有的图片都加载完成之后执行回调函数操作
  var count = 0;
  var imglen = urls.length;
  //声明一个map对象保存生成的图片
  var img = {}
  //遍历urls用于创建生成img并在每个时间都加载完成之后调用callback函数
  for (var item in urls) {
    //创建url对应的img
    img[item] = new Image();
    img[item].onload = function () {
      if (++count >= imglen)
        callback(img)
    }
    img[item].src = urls[item];//给创建的img添加链接
  }
}
