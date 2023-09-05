class Car{                     //class declaration

    setName (name){            //set method 
        this.name = name;

    }

    startEngine(){
        console.log("Start engine for " +this.name)
    }

    stopEngine(){
        console.log("Engine stopped for " +this.name)
    }

}

class Toyota extends Car{                       // extends is the keyword used for inheritance
    topSpeed(speed) {                          // Toyota is the child class here and a method/function is created for it
        console.log('Top speed for ' +this.name+ ' is ' +speed)
    }

}        

let myCar = new Toyota();                   // myCar is an object for Toyota child class
myCar.setName("Camry");                    // The object (myCar) is used to reference the methods and 
myCar.stopEngine();                         //properties of the class and child class
myCar.startEngine();
myCar.topSpeed(200);