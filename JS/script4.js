// const fruit = [
//   "Apple",
//   "Banana",
//   "CustardApple",
//   "DragonFruit",
//   "Mango",
//   "Orange",
//   "Grapes",
// ];
const rainbow = [
  "Voilet",
  "Indigo",
  "Blue",
  "Green",
  "Yellow",
  "Orange",
  "Red",
];

//fruit[fruit.length] = 'RamFhal'
//fruit.push('RamFhal')
// for(let i = 0; i<=6; i++){
//     console.log(fruit.at(i))
// }

const evenNums = [0, 2, 4, 6, 8];
const animal = ["Dog", "Cat", "Cow", "Lion"];
const num = [1, 2, 3, 4, 1, 1, 1, 1, 2, 432, 4, 3, 554, 5];
//const newArr = //animal.Reverse()
// evenNums.shift() // remove from front, then shift the arr towards left
// evenNums.unshift(0) // insert from front

/* 
push()
pop()
shift()
unshift()
concat()
indexof()
reverse()
sort()
slice()
splice()
*/

const nameArr = [
  ["Pratham", "Atul", "Divyansh", "Avishi"],
  ["Bairagi", "Sahu", "Sharma", "Jain"],
];

const arr = [
  ["Pratham", 7.77],
  ["Divyansh", 8.86],
  ["Shubhi", 8.05],
  ["Atul", 7.1],
];

for (let i = 0; i <= 3; i++) {
  for (let j = 0; j <= 1; j++) {
    console.log(arr[i][j]);
  }
}
// const student = {
//         he : 'Boy',
//         she : 'girl',
//         it : 'can'
//  }

// const tiktactoe = [
//   ["X", null, null],
//   [null, null, "5"],
//   ["0", null, "X"]
// ];

const Fruit = ['Mango', 'Banana', 'Orange']
// const dryFruit = Fruit // thid method don't create a copy, it just point to the same location
dryFruit.push('Almond')

Object.assign(dryFruit, Fruit);
