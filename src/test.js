

const arr = [1, 3, 4]
const newArr = [1, 2]

let difference = arr.filter(x => !newArr.includes(x));

let a = newArr.filter(x => !arr.includes(x));
console.log(a)
