//1.时间复杂度O(n^2)的解法
function getdp(arr) {
  var dp = new Array(arr.length);
  for (var i = 0; i < arr.length; i++) {
    dp[i] = 1;
    for (var j = 0; j < i; j++) {
      if (arr[i] > arr[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
  }
  console.log(dp, 'dp1');
  return dp;
}
// 根据dp数组求求出最长子序列
function genLis(arr, dp) {
  var index = 0;
  var len = 0;
  for (var i = 0; i < dp.length; i++) {
    if (dp[i] > len) {
      len = dp[i];
      index = i
    }
  }
  //此时len的长度就是最长子序列的长度
  var res = new Array(len);
  res[--len] = arr[index];
  for (var j = index; j >= 0; j--) {
    if (arr[index] > arr[j] && dp[j] == dp[index] - 1) {
      //找到倒数第二个数
      res[--len] = arr[j];
      index = j;
    }
  }
  return res
}
function longest(arr) {
  if (!arr || arr.length == 0) return null
  var dp = getdp(arr)
  return genLis(arr, dp)
}


// 方法2:O(nlogn)
function getdp2(arr) {
  var dp = new Array(arr.length);
  // 用来记录当前子串长度为i个元素的最小结尾数
  var ends = new Array(arr.length)
  ends[0] = arr[0];
  //有效区域的边界,ends中的边界
  var right = 0;
  var l = 0, r = 0, m = 0;
  for (var i = 0; i < arr.length; i++) {
    l = 0;
    r = right;
    // 通过二分法优化查找第一个比arr[i]大的ends中的l,并将arr[i]赋值非ends[l]
    while (l <= r) {
      m = parseInt((l + r) / 2);
      if (arr[i] > ends[m]) {
        l = m + 1;
      } else {
        r = m - 1
      }
    }
    //更新有边界
    right = Math.max(right, l)
    // 更新end
    ends[l] = arr[i];
    //更新dp[i],和方式1中存放的一样,第i的位置的arr[i]为结尾的字符串的数量
    dp[i] = l + 1
    console.log(ends, dp[i], 'ends')
  }
  console.log(dp, 'dp2');
  return dp
}
function longest2(arr) {
  if (!arr || arr.length == 0) return null;
  var dp = getdp2(arr);
  return genLis(arr, dp);
}
var arr = [2, 1, 5, 3, 6, 4, 8, 9, 7]
console.log(longest(arr));
console.log(longest2(arr));