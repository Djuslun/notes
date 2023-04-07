

const arr = [1, 3, 4]
const newArr = [1, 2]

let difference = arr.filter(x => !newArr.includes(x));

let a = newArr.filter(x => !arr.includes(x));
console.log(a)



const tagOptions = [
  { value: 'Work', label: 'Work' },
  { value: 'Home', label: 'Home' },
  { value: 'Hobby', label: 'Hobby' }
]

const allTags = tagOptions.reduce((acc, tag) => {
  acc[tag.value] = []
  return acc
}, {})

console.log(allTags)