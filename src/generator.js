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

    const HTMLoutput = templater.fillTemplate(objectAccumulator);
    fs.mkdir('./out', {recursive: true}, (e) => {e?console.error(e.message):null;})
    fs.writeFileSync('./out/index.html', HTMLoutput, (e) => {e?console.error(e.message):console.log("HTML FILE CREATED SUCCESSFULLY AT /out/index.html");})



}

module.exports = {generateHTML}