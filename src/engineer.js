const Employee = require('./employee.js');

/**
 * Employee object with additional github
 */
class Engineer extends Employee{
    constructor(name, id, email, github){
        super(name, id, email);
        this.github = github;
        this.role = 'Engineer';
    }

    getGithub(){
        return this.github;
    }
}

module.exports =  Engineer 