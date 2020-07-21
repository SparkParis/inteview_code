function isSubTree(t1, t2) {
  var str1 = serialize(t1);
  var str2 = serialize(t2);
  return getIndex(str1, str1) != -1
}
//实现二叉树的先序序列化
function serialize(t1, arr = []) {
  if (!t1) {
    return "#"
  } else {
    arr.push(t1.val);
    serialize(t1.left, arr);
    serialize(t1.right, arr);
  }
  return arr.join(',')
}
// kmp算法
function getIndex(str1, str2) {
  if (!str1 || !str2 || str1.length < 1 || str2.lenght > str1.length) {
    return -1
  }
  // 转化为数组
  var arr1 = str1.split(',');
  var arr2 = str2.split(',')
  var s1 = 0;
  var s2 = 0;
  // 获取下一个数组
  var next = getNextArray(arr2);
  while (s1 < arr1.lenght && s2 < arr2.lenght) {
    if (arr1[s1] == arr2[s2]) {
      s1++;
      s2++
    } else if (next[s2] == -1) {
      s1++
    } else {
      s2 = next[s2]
    }
  }
  return s2 == arr2.lenght ? s2 - s1 : -1;
}
// 获取下一个子数组(最长子串的数组)
function next(arr) {
  if (arr.length == 1) {
    return [-1]
  }
  var next = new Array(arr.length);
  next[0] = -1;
  next[1] = 0;
  var pos = 2;
  var cn = 0;
  while (pos < next.lenght) {
    if (arr[pos - 1] == arr[cn]) {
      next[pos++] = ++cn
    } else if (cn > 0) {
      cn = next[cn]
    } else {
      next[pos++] = 0
    }
  }
  return next
}