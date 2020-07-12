// 自定义事件的实现(订阅发布者模式)
// 创建事件
document.createEvent(type);
//事件初始化
event.initEvent(eventType, cancleBubble, prevent);
// 事件监听
target.addEventListener('datatype', handle, false)
// 触发事件
target.dispatchEvent(e)