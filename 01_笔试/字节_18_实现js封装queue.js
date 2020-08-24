/**
 * 设计一个简单的任务队列, 要求分别在 1,3,4 秒后打印出 "1", "2", "3"
new Queue()
.task(1000, () => {
    console.log(1)
})
.task(2000, () => {
    console.log(2)
})
.task(1000, () => {
    console.log(3)
})
.start()

Queue
Queue.task
Queue.start
 */
function delay(time, fun) {
    setTimeout(() => {
        fun.apply(this);
    }, time)
}
class Queue {
    constructor() {
        this.queue = [];
    }
    task(time, callback) {
        var temp = [time, callback];
        this.queue.push(temp);
        return this;
    }
    start() {
        var index = 0;
        while (index < this.queue.length) {
            delay(this.queue[index][0], this.queue.[index][1]);
            index++;
        }
        return this
    }

}