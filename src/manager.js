const Employee = require('./employee.js');
/**
 * Employee object with additional officeNumber
 */
class Manager extends Employee{
    constructor(name, id, email, officeNumber){
        super(name, id, email);
        this.officeNumber = officeNumber;
        this.role = 'Manager';
    }
}

module.exports =  Manager;