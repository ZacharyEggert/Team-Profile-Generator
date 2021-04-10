/**
 * Object with properties name, id, email, role
 */
class Employee {
    constructor(name, id, email){
        if(email === ""||id === "" ||name ===""){
            let e = new Error("Please fill out all forms");
            throw e;
        }
        if(!/.+@.+\.[a-zA-z0-9]+/.test(email)){
            let e = new Error("Invalid email format");
            throw e;
        }
        
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = 'Employee';
    }

    getName(){
        return this.name;
    }

    getId(){
        return this.id;
    }

    getEmail(){
        return this.email;
    }

    getRole(){
        return this.role;
    }

}

module.exports = Employee 