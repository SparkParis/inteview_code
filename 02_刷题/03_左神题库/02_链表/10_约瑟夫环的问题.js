function LastRemaining_Solution(n, m) {
  if (n < 1 || m < 1) {
    return -1;
  } else {
    return joseoh(n, m);
  }
}
function joseoh(n, m) {
  if (n === 1) {
    return 0;
  }
  return (joseoh(n - 1, m) + m) % n;
}