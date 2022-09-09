//https://www.codewars.com/kata/54da539698b8a2ad76000228/train/javascript

function isValidWalk(walk) {
  if (walk.length !== 10) return false;
  let coords = walk.reduce(({x,y}, curr) => {
    if(curr === 'n') return {x,y:y+1}
    if(curr === 's') return {x,y:y-1}
    if(curr === 'w') return {x:x+1,y}
    if(curr === 'e') return {x:x-1,y}
    else return {x,y}
  }, {x:0, y:0})
  if (coords.x == 0 && coords.y == 0) return true;
  return false;
}

isValidWalk(['n','s','n','s','n','s','n','s','n','s'])