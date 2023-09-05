let fruits = ['orange', 'grapes', 'tangerine', 'apples']
console.log(fruits)

//fruits.pop()                                               // .pop() will remove an item from the list of arrays
console.log(fruits)

fruits.shift()                                               // .shift() will remove the first item from the list of arrays
console.log(fruits)

fruits.push("Cherry")                               // .push() will add an item to the ending part on list of arrays
console.log(fruits)

fruits.unshift('lemon')                              // .unshift() will add an item to the first side on the list of arrays
console.log(fruits)

delete fruits[1];                                   // This will delete item from the list of array
console.log(fruits)

fruits[1]='Cashew';                                  // This will replace the item at the specified index position
console.log(fruits)

fruits.splice(0,2)              // .splice() will remove the item at the specified index position from the list of arrays
console.log(fruits)

fruits.splice(2,0, 'sugarcane', 'banana')              // .splice() will add and remove the item at the specified index position from the list of arrays
console.log(fruits)                                    // this will add the elements at index 2 and remove zero element

fruits.splice(1,3, 'pear', 'avocado')              // .splice() will add and remove the item at the specified index position from the list of arrays
console.log(fruits)                     // this will add the elements starting frm index 1 and remove the element at index 3



let citrusFruits = fruits.slice(0,2)      // this will only the item at the specified index and the number of items specified
console.log(fruits);
console.log(citrusFruits)


/*let evenNumbers = [2, 4, 6, 8];
let oddNumbers = [1, 3, 5, 7];

let numbers = evenNumbers.concat(oddNumbers);        // .concat will print a combination of the items specified
console.log (numbers); */


let evenNumbers = [2, 4, 6, 8];
let oddNumbers = [1, 3, 5, 7];
let primeNumbers = [2, 3, 5, 7];

let numbers = evenNumbers.concat(oddNumbers, primeNumbers);        // .concat will print a combination of the items specified
console.log (numbers);
