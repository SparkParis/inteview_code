/**
 * 题目:给定n*m的网格,每个格子上有三个概率pd,ps,pr
 */

var n = parseInt(readline());
var m = parseInt(readline());
var d, r, s;
function G(i, j) {
  return m * (i - 1) + j;
}

for (var i = 1; i <= n; i++) {
  while (m = readline()) {
    var tmp = m.split('');
    while (tmp.length > 0) {
      for (var j = 1; j <= m; j++) {
        d[G(i, j)] = tmp.shift();
        r[G(i, j)] = tmp.shift();
        s[G(i, j)] = tmp.shift();
      }
    }
  }
}
//动态规划递推式dp[G(i,j)]=(dp[G(i+1,j)]*d[G(i,j)]+dp[G(i,j+1)]*r[G(i,j)]+1)/(1.0-s[G(i,j)]);
function getExpectStep(n, m, d, r) {
  var dp = new Array(1000);
  for (var i = n; i >= 1; i--) {
    for (var j = m; j >= 1; j--) {
      if (i == n && j == m) continue;
      dp[G(i, j)] = (dp[G(i + 1, j)] * d[G(i, j)] + dp[G(i, j + 1)] * r[G(i, j)] + 1) / (1.0 - s[G(i, j)]);

    }
  }
  return dp[G(1, 1)];
}
console.log(getExpectStep(n, m, d, r));
/**
 /**
 * 题目:给定n*m的网格,每个格子上有三个概率pd,ps,pr
 */

var n = parseInt(readline());
var m = parseInt(readline());
var d, r, s;
function G(i, j) {
  return m * (i - 1) + j;
}

for (var i = 1; i <= n; i++) {
  while (m = readline()) {
    var tmp = m.split('');
    while (tmp.length > 0) {
      for (var j = 1; j <= m; j++) {
        d[G(i, j)] = tmp.shift();
        r[G(i, j)] = tmp.shift();
        s[G(i, j)] = tmp.shift();
      }
    }
  }
}
//动态规划递推式dp[G(i,j)]=(dp[G(i+1,j)]*d[G(i,j)]+dp[G(i,j+1)]*r[G(i,j)]+1)/(1.0-s[G(i,j)]);
function getExpectStep(n, m, d, r) {
  var dp = new Array(1000);
  for (var i = n; i >= 1; i--) {
    for (var j = m; j >= 1; j--) {
      if (i == n && j == m) continue;
      dp[G(i, j)] = (dp[G(i + 1, j)] * d[G(i, j)] + dp[G(i, j + 1)] * r[G(i, j)] + 1) / (1.0 - s[G(i, j)]);

    }
  }
  return dp[G(1, 1)];
}
console.log(getExpectStep(n, m, d, r));
/**
 /*
#include < iostream >
#include < vector >
#include < algorithm >
#include < queue >
#include < unordered_map >
#include < stack >
#include < string >
#include < unordered_set >

  using namespace std;

vector < string > help(string s)
{
  vector < string > result;
  int start = 0;
  while (start < s.length()) {
    int end = (int)s.find(' ', start);
    if (end == string:: npos)
    break;
    string temp = s.substr(start, end - start);
    for (auto & c : temp)
    if (c < 'a' && c >= 'A')
      c += 'a' - 'A';
    result.push_back(temp);
    start = end + 1;
  }
  string last = "";
  while (start < s.length()) {
    if (s[start] >= '0' && s[start] != '?') {
      if (s[start] < 'a' && s[start] >= 'A')
        s[start] += 'a' - 'A';
      last += s[start];
    }
    else
      break;
    start++;
  }
  result.push_back(last);
  while (start < s.length()) {
    string temp = "";
    temp += s[start];
    result.push_back(temp);
    start++;
  }
  return result;
}

unordered_set < string > equal_set = { ",", ".", "!" };

pair < int, int > string_cmp(string s1, string s2)
{
  int bias, word_count;
  bias = word_count = 0;
  vector < string > s_array1 = help(s1);
  vector < string > s_array2 = help(s2);
  vector < vector < int >> dp(s_array2.size() + 1, vector<int>(s_array1.size() + 1, 0x3f3f3f3f));
  dp[0][0] = 0;
  for (int i = 0; i < s_array2.size(); i++)
  dp[i][0] = i;
  for (int i = 0; i < s_array1.size(); i++)
  dp[0][i] = i;
  for (int i = 1; i < s_array2.size(); i++)
  {
    for (int j = 1; j < s_array1.size(); j++)
    {
      dp[i][j] = min(dp[i - 1][j], dp[i][j - 1]) + 1;
      if (s_array2[i].compare(s_array1[j]) == 0 ||
        (equal_set.find(s_array2[i]) != equal_set.end() && equal_set.find(s_array1[j]) != equal_set.end())) {
        dp[i][j] = min(dp[i][j], dp[i - 1][j - 1]);
      }
    }
  }
  return { dp[s_array2.size() - 1][s_array1.size() - 1], s_array1.size() };
}

void print_pair(pair < int, int > p)
{
  cout << "(" << p.first << "," << p.second << ")" << endl;
}

int main(int argc, const char * argv[])
{
  string s;
  while (getline(cin, s)) {
    if (s.length() == 0)
      break;
    int pos = (int)s.find(';');
    string s2 = s.substr(0, pos);
    string s1 = s.substr(pos + 1, s.length());
    print_pair(string_cmp(s1, s2));
  }
  return 0;
}

 */