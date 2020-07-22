// 暴力当时获取最小货币数,这里每个面值可以使用多次,暴力递归也就是回溯方法求解
function minCoins(arr, aim) {
  if (!arr || arr.length == 0 || aim < 0) {
    return -1
  }
  // 从数组的第一个位置开始遍历
  return process(arr, 0, aim)
}
function process(arr, index, aim) {
  var res = 0;
  //
  if (index == arr.length) {

  }
}