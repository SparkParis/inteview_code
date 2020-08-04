function isNumeric(s) {
  if (s == undefined) {
    return false;
  }
  let hasPoint = false;//是不是点
  let hasExp = false;//是不是符号
  for (let i = 0; i < s.length; i++) {
    const target = s[i];
    if (target >= 0 && target <= 9) {
      continue;
    } else if (target === 'e' || target === 'E') {
      if (hasExp || i === 0 || i === s.length - 1) {
        return false;
      } else {
        hasExp = true;
        continue;
      }
    } else if (target === '.') {
      if (hasPoint || hasExp || i === 0 || i === s.length - 1) {
        return false;
      } else {
        hasPoint = true;
        continue;
      }
    } else if (target === '-' || target === '+') {
      if (i === 0 || s[i - 1] === 'e' || s[i - 1] === 'E') {
        continue;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }
  return true;
}
console.log(isNumeric('-123'));