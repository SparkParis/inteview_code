function a() {
  console.log('a');
  Promise.resolve().then(() => {
    console.log('e');
  })
}
function b() {
  console.log('b');
}
function c() {
  console.log('c');
}
function d() {
  console.log('f');
  setTimeout(a, 0)
  var temp = Promise.resolve().then(b);
  setTimeout(c, 0)
  console.log('d');
}
d()

//fd b a e c
// 注意Promise的语句会在setTimeOut之前之前,状态已经发生了变化