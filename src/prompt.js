const inquirer = require('inquirer');



class empQ {
    constructor(field) {
        this.type = 'input';
        this.message = `EMPLOYEE ${field.toUpperCase()}?`;
        this.name = field;
    }
};

/**
 * 
 * @returns Returns response to 'new employee' prompt 'ENGINEER', 'INTERN', or 'NONE (FINALIZE)'
 */
 const newMember = async () => {
    console.log("\n")
    const response = await inquirer.prompt([
        {type: 'list', message: 'ADD EMPLOYEE?', name: 'choice', choices: ['ENGINEER', 'INTERN', 'NONE (FINALIZE)']}
    ])
    return response.choice;
}

/**
 * 
 * @returns Returns manager data object
 */
const promptManager = async () => {
    console.log("\nTEAM MANAGER: \n")
    const response = await inquirer.prompt([
        new empQ('name'), new empQ('id'), new empQ('email'),{type: 'input', message: 'OFFICE NUMBER?', name: 'data'}
    ])
    response.role = 'MANAGER'
    //console.log(response)
    return response;
}

/**
 * 
 * @returns Returns engineer data object
 */
const promptEngineer = async () => {
    console.log("\nENGINEER: \n")
    const response = await inquirer.prompt([
        new empQ('name'), new empQ('id'), new empQ('email'),{type: 'input', message: 'GITHUB?', name: 'data'}
    ])
    response.role = 'ENGINEER'
    // console.log(response);
    return response;
}

/**
 * 
 * @returns Returns intern data object
 */
const promptIntern = async () => {
    console.log("\nINTERN: \n")
    const response = await inquirer.prompt([
        new empQ('name'), new empQ('id'), new empQ('email'),{type: 'input', message: 'SCHOOL?', name: 'data'}
    ])
    response.role = 'INTERN'
    // console.log(response);
    return response;
}

module.exports =  {promptManager, promptEngineer, promptIntern, newMember};
