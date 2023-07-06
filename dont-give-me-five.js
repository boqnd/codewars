//https://www.codewars.com/kata/621f89cc94d4e3001bb99ef4/train/javascript

function dontGiveMeFive(start, end)
{
  let count = 0
  for (
    let i = start - 1;
    i <= end;
    ((Math.abs(i+1))+'').indexOf('5') === -1 ?
    i++ :
    i += 10**(((Math.abs(i+1))+'').length - ((Math.abs(i+1))+'').indexOf('5') - 1) + 1
    ) {
    count++;
  }
  return count - 1;
}

// console.log(dontGiveMeFive(1, 9))
// console.log(dontGiveMeFive(4, 17))

// console.log(dontGiveMeFive(984, 4304), 2449);
// console.log(dontGiveMeFive(2313, 2317), 4);
console.log(dontGiveMeFive(-4045, 2575), 4819);
// console.log(dontGiveMeFive(-4436, -1429), 2194);

// console.log(dontGiveMeFive(40076, 215151422963990), 49707598394353);
// console.log(dontGiveMeFive(-206981731, 223575697903165), 51841599744277);
// console.log(dontGiveMeFive(-249022878360451, -249022878219653), 79380);
// console.log(dontGiveMeFive(-90000000000000, 900000000000000), 203349266266321);


// 5 1 0   1  1
// 15 2 1  1  
// 25 2 1  1
// 50 2 0  2  10
// 55 2 0  2  
// 501 3 0 3  100