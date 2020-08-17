
let i = 6, j = 6;
for (let i = 0; i < 6; i++) {
  j = i % 6
}
console.log(i + j);//11=6+5

var count = 0;
for (let i = 1; i < 6; i++) {
  count++;
  for (let j = 1; j < 6; j++) {
    count++
  }
}
console.log(count);//30=5*6

let a = 10;
function b() {
  let a = 20;
  console.log(a);//let还是根据作用域进行比较的,内部不存在,向上层的作用域进行访问20->10
}
b()

console.log(undefined == null);//true
console.log('' == false);//true
console.log(Object.prototype.toString.call({}));//[object Object]
