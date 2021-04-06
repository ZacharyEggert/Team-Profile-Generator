const fs = require('fs');
const inquirer = require('inquirer');
const userPrompt = require('./prompt.js');
const templater = require('./templater.js');


let objectAccumulator = {manager: {}, engineer: {}, intern: {}};

/**
 * Generates HTML file based on user input
 */
const generateHTML = async () => {

    let done = false;

    const managerRes = await userPrompt.promptManager();

    objectAccumulator.manager = managerRes;
    console.log(objectAccumulator) //DEBUG

    while (!done){

        const choice = await userPrompt.newMember();
        let empRes;

        switch(choice){
            case 'ENGINEER':
                empRes = await userPrompt.promptEngineer();
                objectAccumulator.engineer["_" + empRes.id] = empRes;

            break;
            case 'INTERN':
                empRes = await userPrompt.promptIntern();
                objectAccumulator.intern["_" + empRes.id] = empRes;

            break;
            default: 
                done = true;
            break;
        }

        console.log(objectAccumulator); //DEBUG


    }







}

module.exports = {generateHTML}