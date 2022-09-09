//https://www.codewars.com/kata/55983863da40caa2c900004e/train/javascript

function nextBigger(n) {
  let digits = n.toString().split('').map(n => parseInt(n))

  let perms = [];

  for (let i = 0 ; i < digits.length; i++) {
    for (let j = i + 1; j < digits.length; j++) {
      perms.push(swap(digits,i,j))
    }
  }

  return perms.filter(a => a>n).sort((a,b) => a-b)[0] || -1;
}

function swap (digits, i, j) {
  digits[i] += digits[j];
  digits[j] = digits[i] - digits[j];
  digits[i] = digits[i] - digits[j];

  let res = 0;

  digits.forEach(d => {
    res *= 10;
    res += d;
  });

  digits[i] += digits[j];
  digits[j] = digits[i] - digits[j];
  digits[i] = digits[i] - digits[j];

  return res;
}

console.log(nextBigger(5582),21)
// console.log(nextBigger(513),531)
// console.log(nextBigger(2017),2071)
// console.log(nextBigger(414),441)
// console.log(nextBigger(144),414)