let numbers = [1, 2, 3, 4, 5, 6];
console.log(numbers)

let fruits = ['banana', 'orange', 'cashew', 'mango'];
console.log(fruits)

let cars = new Array('ford', 'bmw', 'mercedes');
console.log(cars)

console.log(cars[1])                                         // index position 1 will select the second car in the array
cars[1] = 'Toyota';                                         //the data/elements/items in index positions can also be changed
console.log(cars[1])
console.log(cars)

fruits.push('agbalumo');                                  // this will add data or elements to the list of arrays
console.log(fruits)
console.log(fruits.length)                               // this will print the number of items in the list of array

let x;
for (x in fruits) {                                     // for loops are very much applicable in arrays
    console.log(fruits[x])
}

for (x of fruits) {
    console.log(x)
}