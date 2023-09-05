class Animal {                          // class declaration

    constructor(name){                  // constructor
        this.name = name
    }

    eats() {                               //function
        console.log(this.name+" eats food")
    }
};

class Alligator extends Animal{            // child class

    eats() {                               //function
        super.eats()                        // to call the parent class method (eats)
        console.log(this.name+" eats fishes")
    }

}

let murphy = new Alligator('Murphy');                // object for child class
murphy.eats();                                       // instantiate (use the object(murphy) to call the function (eats))

let animal = new Animal('Dog');                     // object for parent class
animal.eats();                                      // instantiate (use the object(animal) to call the function (eats))
// However if the child class function is commented out it would run the parent class function.