function transRGB(color) {
  let reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
  let c = color.toLowerCase();
  if (c && reg.test(c)) {
    if (c.length === 4) {
      let cNow = '#';
      for (let i = 1; i < 4; i += 1) {
        cNow += c.slice(i, i + 1).concat(c.slice(i, i + 1));
      }
      c = cNow
    }
    let change = [];
    for (let i = 1; i <= 6; i += 2) {
      change.push(parseInt('0x' + c.slice(i, i + 2)));
    }
    return 'rgb(' + change.join(',') + ')';
  } else {
    return c;
  }
}
console.log(transRGB('#000000'));