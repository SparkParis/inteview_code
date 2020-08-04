var addStrings = function (num1, num2) {
  let res = ''
  let carry = 0
  let i = num1.length - 1
  let j = num2.length - 1

  while (i >= 0 || j >= 0) {
    let n1 = i >= 0 ? num1[i] - '0' : 0
    let n2 = j >= 0 ? num2[j] - '0' : 0
    let tmp = n1 + n2 + carry;
    res = (tmp % 10) + res;
    carry = tmp >= 10 ? 1 : 0;
    i--;
    j--;
  }
  return carry > 0 ? carry + res : res
}
console.log(addStrings('124', '456'));
