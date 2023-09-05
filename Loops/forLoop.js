let i;

for (i = 1; i< 5; i++) {                          // for loop: loops through a block of code a number of times
    console.log('value of i is ' +i)
}


let fruits = ["Orange, Banana, Coconut, Apple"]
let x;
for (x in fruits) {                                  // for/in loop: loops through the properties of an object
    console.log(fruits[x])
}

for(x of fruits) {                                    // for/in loop: loops through the values of an iterable object
    console.log(x)
}