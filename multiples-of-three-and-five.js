//https://www.codewars.com/kata/514b92a657cdc65150000006/train/javascript

// function solution(number){
//   number--;
//   if (number <= 0) return 0;
//   if (number % 3 === 0 || number % 5 === 0)return number + solution(number);
//   return solution(number);
// }

function solution(number){
  let res = 0;
  for (let i = 1; i < number; i++) {
    if (i % 3 === 0 || i % 5 === 0) res += i;
  }
  return res;
}


console.log(solution(10),23)