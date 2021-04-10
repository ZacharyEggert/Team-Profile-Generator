const fs = require('fs');
const inquirer = require('inquirer');
const userPrompt = require('./prompt.js');
const templater = require('./templater.js');
const Manager = require('../src/manager');
const Engineer = require('../src/engineer');
const Intern = require('../src/intern');


let roster = {manager: {}, engineer: {}, intern: {}};

const generateHTML = async () => {

    let done = false;

    const managerRes = await userPrompt.promptManager();

    roster.manager = (new Manager(managerRes.name, managerRes.id, managerRes.email, managerRes.data))
    //console.log(roster)

    while (!done){

        const choice = await userPrompt.newMember();
        let empRes;

        switch(choice){
            case 'ENGINEER':
                empRes = await userPrompt.promptEngineer();
                roster.engineer[empRes.id]= (new Engineer(empRes.name, empRes.id, empRes.email, empRes.data));
                //console.log(roster);

            break;
            case 'INTERN':
                empRes = await userPrompt.promptIntern();
                roster.intern[empRes.id] = (new Intern(empRes.name, empRes.id, empRes.email, empRes.data));
                //console.log(roster);
            break;
            default: 
                done = true;
            break;
        }
    }

    const HTMLoutput = templater.fillTemplate(roster);

    fs.mkdir('./out', {recursive: true}, (e) => 
        {e?console.error(e.message):null;});
    fs.writeFileSync('./out/index.html', HTMLoutput, (e) => 
        {e?console.error(e.message):console.log("HTML FILE CREATED SUCCESSFULLY AT /out/index.html");});
    fs.writeFileSync('./out/roster.json', JSON.stringify(roster), (e) => 
        {e?console.error(e.message):console.log("ROSTER FILE CREATED SUCCESSFULLY AT /out/roster.json")});



}

module.exports = {generateHTML}