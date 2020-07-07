// 通过堆来实现队优先级队列
// 实现最大堆的优先级队列
function swap(arr, i, j) {
  var temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp
}
function priorityQueue(type) {
  this.queue = [];
  this.type = type;//'min','max'大顶堆还是小顶堆
}
//向上调整
priorityQueue.prototype.moveUp = function () {
  var index = this.queue.length - 1
  var parent = Math.floor((index - 1) / 2)
  if (this.type == 'max')
    while (this.queue[index] > this.queue[parent]) {
      swap(this.queue, index, parent);
      index = parent;
      parent = Math.floor((index - 1) / 2)
    }
  else if (this.type == 'min')
    while (this.queue[index] < this.queue[parent]) {
      swap(this.queue, index, parent);
      index = parent;
      parent = Math.floor((index - 1) / 2)
    }
}
// 向下调整
priorityQueue.prototype.moveDown = function () {
  var index = 0
  var length = this.queue.length;
  var left = 2 * index + 1;
  if (this.type == 'max')
    while (left < length) {
      var largest = (left + 1) < length && this.queue[left + 1] > this.queue[left] ? left + 1 : left;
      largest = this.queue[index] > this.queue[largest] ? index : largest;
      if (largest == index) break
      swap(this.queue, index, largest);
      index = largest;
      left = 2 * index + 1
    }
  else if (this.type == 'min')
    while (left < length) {
      var minest = (left + 1) < length && this.queue[left + 1] < this.queue[left] ? left + 1 : left;
      minest = this.queue[index] < this.queue[minest] ? index : minest;
      if (minest == index) break
      swap(this.queue, index, minest);
      index = minest;
      left = 2 * index + 1
    }
}
// 入队列向上调整
priorityQueue.prototype.enqueue = function (data) {
  this.queue.push(data);
  this.moveUp();
}
//出队列向下调整
priorityQueue.prototype.dequeue = function () {
  if (this.queue.length < 1) return null;
  //取树根元素
  var res = this.queue.shift();
  //用最后一个元素插入头部
  this.queue.unshift(this.queue.pop())
  // 调整
  this.moveDown()
  return res
}
//获取第k个的值
priorityQueue.prototype.topK = function (k) {
  if (k < 0) return null
  var index = 0
  while (index != k - 1) {
    index++;
    this.dequeue();
  }
  return this.queue.shift();
}
priorityQueue.prototype.size = function () {
  return this.queue.length;
}

var q = new priorityQueue('min')
q.enqueue(3)
q.enqueue(5)
q.enqueue(2)
q.enqueue(6)
console.log(q.queue)