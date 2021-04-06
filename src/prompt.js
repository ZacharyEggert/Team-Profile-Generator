const inquirer = require('inquirer');


const empName = {
    type: 'input',
    message: 'EMPLOYEE NAME?',
    name: 'name'
}

const empID = {
    type: 'input',
    message: 'EMPLOYEE ID?',
    name: 'id'
}

const empEmail = {
    type: 'input',
    message: 'EMPLOYEE EMAIL?',
    name: 'email'
}




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
        empName, empID, empEmail,{type: 'input', message: 'OFFICE NUMBER?', name: 'data'}
    ])
    response.role = 'MANAGER'
    console.log(response)
    return response;
}

/**
 * 
 * @returns Returns engineer data object
 */
const promptEngineer = async () => {
    console.log("\nENGINEER: \n")
    const response = await inquirer.prompt([
        empName, empID, empEmail,{type: 'input', message: 'GITHUB?', name: 'data'}
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
        empName, empID, empEmail,{type: 'input', message: 'SCHOOL?', name: 'data'}
    ])
    response.role = 'INTERN'
    // console.log(response);
    return response;
}

module.exports =  {promptManager, promptEngineer, promptIntern, newMember};
