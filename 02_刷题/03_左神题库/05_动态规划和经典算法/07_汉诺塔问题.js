// 1.经典汉诺塔问题,打印最优移动轨迹的方法
function hanoi(n) {
  if (n > 0) {
    func(n, 'left', 'mid', 'right')
  }
}
/**
 * 
 * @param {移动的盘子数} n 
 * @param {移动的起始位置} from 
 * @param {移动的中间位置} mid 
 * @param {移动的目标位置} to 
 * 注意这里每次的移动是默认将最上面的一个盘子进行移动
 */
function func(n, from, mid, to) {
  // 一个元素的时候打印
  if (n == 1) {
    console.log('move from ' + from + 'to' + to)
  } else {
    func(n - 1, from, to, mid);
    func(1, from, mid, to);
    func(n - 1, mid, from, to);
  }
}

// 进阶问题
// 递归实现
