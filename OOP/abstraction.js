/*function Employee(name, age, baseSalary) {                        // create a function called Employee
    this.name = name;
    this.age = age;
    this.baseSalary = baseSalary;
    this.monthlyBonus = 1000

    this.calculateFinalSalary = function() {                       //create a function to calculate final salary
        let finalSalary = this.baseSalary + this.monthlyBonus
        console.log('final salary is ' +finalSalary);
    }

    this.getEmpDetails = function() {                            // create a function to get employee details
        console.log('name : ' +this.name+ ' | age :  ' +this.age)


    }                                               
}

let emp1 = new Employee("Sandra", 25, 5000);                // create object for the function
emp1.getEmpDetails();
emp1.monthlyBonus = 10000                // this object would change the value of monthly bonus declared in the function
emp1.calculateFinalSalary() */

/*function Employee(name, age, baseSalary) {                        // create a function called Employee
    this.name = name;
    this.age = age;
    this.baseSalary = baseSalary;
    
    let monthlyBonus = 1000                                 // this would ensure the value of monthly bonus can not be altered

    let calculateFinalSalary = function() {                       //create a function to calculate final salary
        let finalSalary = this.baseSalary + this.monthlyBonus
        console.log('final salary is ' +finalSalary);
    }

    this.getEmpDetails = function() {                            // create a function to get employee details
        console.log('name : ' +this.name+ ' | age :  ' +this.age)


    }                                               
} 


let emp1 = new Employee("Sandra", 25, 5000);                // create object for the function
emp1.getEmpDetails();
emp1.monthlyBonus = 10000                // this object would not change the value of monthly bonus declared in the function
emp1.calculateFinalSalary() */             // final salary would not be calculated because of the alteration


function Employee(name, age, baseSalary) {                        // create a function called Employee
    this.name = name;
    this.age = age;
    this.baseSalary = baseSalary;
    
    let monthlyBonus = 1000                                 // this would ensure the value of monthly bonus can not be altered

    let calculateFinalSalary = function() {                       //create a function to calculate final salary
        let finalSalary = baseSalary + monthlyBonus
        console.log('final salary is ' +finalSalary);
    }

    this.getEmpDetails = function() {                            // create a function to get employee details
        console.log('name : ' +this.name+ ' | age :  ' +this.age)
        calculateFinalSalary();                                   // this function would ensure final salary is calculated


    }                                               
} 


let emp1 = new Employee("Sandra", 25, 5000);                // create object for the function
emp1.getEmpDetails();
