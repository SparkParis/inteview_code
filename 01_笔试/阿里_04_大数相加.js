function add(a, b) {
  let res = '';
  let carry = 0;
  let i = a.length - 1;
  let j = b.length - 1;
  while (i >= 0 || j >= 0) {
    let n1 = i >= 0 ? a[i] - '0' : 0;
    let n2 = j >= 0 ? b[j] - '0' : 0;
    let temp = n1 + n2 + carry;
    res = (temp % 10) + res;
    carry = temp >= 10 ? 1 : 0;
    i--; j--;
  }
  return carry > 0 ? carry + res : res;
}