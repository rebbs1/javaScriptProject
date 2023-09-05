class Employee{                               //class declaration

    setEmpDetails(name, id, phoneNo) {        //set method is is used to set details by creating a function (setEmpDetails())
        this.name = name;
        this.id = id;
        this.phoneNo = phoneNo;
    }

    getEmpName(){                          //get method is used to fetch details by creating a function (getEmpName())
        return this.name;
    }

    getEmpId(){
        return this.id;
    }

    getEmpPhoneNo(){
        return this.phoneNo;
    }
}


let emp1 = new Employee();                          //To instantiate the class or create object for the class
emp1.setEmpDetails("Cynthia", 10001, 7013480119)     // to set values and pass variables
console.log(emp1.getEmpName() );                                      // To access the value of variables passed
console.log(emp1.getEmpId() );
console.log(emp1.getEmpPhoneNo() );