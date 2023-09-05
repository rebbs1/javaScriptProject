function myFunc() {

}

myFunc.prototype

/*function empDetails() {                          //function for employee details

}*/

let empDetails = function(name, age) {           // Another way to create a function for employee details or constructor
    this.name = name;
    this.age = age;

   /* this.getName = function() {                // construction can also have a function getName
        return this.name;

    }; 

    this.getAge = function() {                // construction can also have a function getAge
        return this.age;

    }; */


}

empDetails.prototype.getName = function() {     // prototype is created for the constructor or class instead of another function
    return this.name;

};

empDetails.prototype.getAge = function() {      
    return this.age;

};

let emp1 = new empDetails ("Cheryl", 16);               // object for the constructor
let emp2 = new empDetails ("Winny", 20);
console.log(emp1.getName());
console.log(emp2.getAge());