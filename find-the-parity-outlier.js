//https://www.codewars.com/kata/5526fc09a1bbd946250002dc/train/javascript

function findOutlier(integers) {
  if (integers.filter(i => i%2 === 0).length === 1) {
    return integers.filter(i => i%2 === 0)[0];
  }
  return integers.filter(i => i%2 !== 0)[0];
}

console.log(findOutlier([0,2,4,6,8,9]))
console.log(findOutlier([1,3,5,7,9,0]))
