/*class Employee{                        // class declaration

    setDetails (Name, id) {           // function within the class
        this.Name = Name
        this.id = id
    }

}

let emp1 = new Employee();            //object declaration to initialize class
emp1.setDetails('John', 1001);          // With the object we can access the functions and variables of the class
console.log(emp1.Name);
console.log(emp1.id)*/


class Employee{                        // class declaration

    constructor (Name, id) {       // constructor is called everytime we instantiate a class or create an object of a class
        this.Name = Name
        this.id = id
    }

}

let emp1 = new Employee('Sarah', 440);            //object declaration to initialize class
let emp2 = new Employee('Bolu', 441);            //object declaration to initialize class

console.log(emp1.Name);
console.log(emp1.id)

console.log(emp2.Name);
console.log(emp2.id)
