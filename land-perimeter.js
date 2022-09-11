//https://www.codewars.com/kata/5839c48f0cf94640a20001d3/train/javascript

function landPerimeter(arr) {
  let per = 0;
  for (let r = 0; r < arr.length; r++) {
    for (let c = 0; c < arr[r].length; c++) {
      let curr = arr[r][c];
      let up = arr[r+1]?arr[r+1][c]:undefined;
      let down = arr[r-1]?arr[r-1][c]:undefined;
      let left = arr[r][c-1]
      let right = arr[r][c+1]

      if (curr === 'X') {
        if (!up || up === 'O') per++;
        if (!down || down === 'O') per++;
        if (!left || left === 'O') per++;
        if (!right || right === 'O') per++;
      }
    }
  }
  return `Total land perimeter: ${per}`;
}


console.log(landPerimeter(["OXOOOX", "OXOXOO", "XXOOOX", "OXXXOO", "OOXOOX", "OXOOOO", "OOXOOX", "OOXOOO", "OXOOOO", "OXOOXX"]), "Total land perimeter: 60");
console.log(landPerimeter(["OXOOO", "OOXXX", "OXXOO", "XOOOO", "XOOOO", "XXXOO", "XOXOO", "OOOXO", "OXOOX", "XOOOO", "OOOXO"]), "Total land perimeter: 52");
console.log(landPerimeter(["XXXXXOOO", "OOXOOOOO", "OOOOOOXO", "XXXOOOXO", "OXOXXOOX"]), "Total land perimeter: 40");
console.log(landPerimeter(["XOOOXOO", "OXOOOOO", "XOXOXOO", "OXOXXOO", "OOOOOXX", "OOOXOXX", "XXXXOXO"]), "Total land perimeter: 54");
console.log(landPerimeter(["OOOOXO", "XOXOOX", "XXOXOX", "XOXOOO", "OOOOOO", "OOOXOO", "OOXXOO"]), "Total land perimeter: 40");