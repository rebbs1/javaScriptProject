function add() {                       //Declaration of a function
    console.log(2 + 3)
}
add();                               // this invokes the function declared

function add(a, b) {
    console.log(a + b)
}
add(2, 4);
add(20, 24);

function add(a, b) {
    return(a + b)                          //the value of the function can also be returned in subsequent codes
}
let result = add(23, 14);
console.log(result)