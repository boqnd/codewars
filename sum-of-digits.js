//https://www.codewars.com/kata/541c8630095125aba6000c00/train/javascript

function digitalRoot(n) {
  if (n < 10) return n;
  return digitalRoot(digitalRoot(Math.floor(n/10)) + digitalRoot(n%10))
}