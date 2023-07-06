let zero = f => x => x

let succ = n => f => x => f (n (f) (x))

let one = succ( zero )

console.log(one);