//https://www.codewars.com/kata/5a667236145c462103000091
let all = []

function square_sums_row(n) {
  let table = createHash(n);
  if(table) {
    Object.keys(table).forEach( key => {
      seq(table, [+key])
    })

    let res = all[0];
    all = [];
    if (res) return res;
  }
  return false;
}

function seq(table, res) {
  if (res.length == Object.keys(table).length) {
    all.push(res)
  }

  let lastKey = res[res.length - 1];
  table[lastKey].forEach(val => {
    if (!res.includes(val)) {
      seq(table, [...res,val])
    }
  })
}


function createHash(n) {
  let table = {}

  for (let key = 1; key <= n; key++) {
    table[key] = [];
    for (let val = 1; val <= n; val++) {
      if (Math.sqrt(key + val) === Math.floor(Math.sqrt(key + val)) && key !== val) {
        table[key].push(val);
      }
    }

    if(table[key].length === 0) {
      return false;
    }
  }

  return table;
}

for (let i = 1; i <= 1300; i++) {
  console.log(i, square_sums_row(i))
}


// 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15
// 4, 9, 16, 25

// 1 - 3, 8, 15
// 2 - 7, 14
// 3 - 1, 6, 13
// 4 - 5, 12
// 5 - 4, 11
// 6 - 3, 10
// 7 - 2, 9
// 8 - 1
// 9 - 7
// 10 - 6, 15
// 11 - 5, 14
// 12 - 4, 13
// 13 - 3, 12
// 14 - 2, 11
// 15 - 1, 10

// 8 1 3 6 10 15 ... 9
// 8 1 15 10 6 3 13 12 4 5 11 14 2 7 9
