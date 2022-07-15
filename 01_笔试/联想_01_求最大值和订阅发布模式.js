function getMaxValue(arr) {
  let min = 0;
  let max = 0
  for (let i = 1; i < arr.length; i++) {
    min = arr[min] > arr[i] ? i : min;
    max = arr[max] < arr[i] ? i : max;
  }
  return min == max ? 0 : arr[max] - arr[min]
}

console.log(getMaxValue([1, 23, 4, 5, 66, -3, 88]))

//bus
class bus {
  constructor() {
    this.listerers = []
  }
  //通知
  notify() {
    for (let i = 0; i < this.listerers.length; i++) {

    }
  }
  subscribe(param) {
    this.listerers.push(param)

  }
}

class person {
  constructor(name, upTime, downTime) {
    this.name = name;
    this.upTime = upTime;
    this.downTime = downTime;
  }
}