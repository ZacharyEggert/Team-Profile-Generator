const topHTML =``;
const bottomHTML =``;


const fillTemplate = (data) => {
    let StringAccumulator = ``;

    const manager = data.manager;
    const engineers = Object.keys(data.engineer)??null;
    const interns = Object.keys(data.intern)??null;

    StringAccumulator += topHTML;

    StringAccumulator += managerTemplate(manager);
    if(engineers){engineers.forEach((e) => { StringAccumulator += engineerTemplate(e); });}
    if(interns){interns.forEach((e) => { StringAccumulator += internTemplate(e); });}

    StringAccumulator += bottomHTML;

}

const managerTemplate = (managerData) => {
    const { name, id, email, data } = managerData;

    const cardLiteral = `
    
    `
    return cardLiteral;

}

const engineerTemplate = (engineerData) => {
    const { name, id, email, data } = engineerData;

    const cardLiteral = `
    
    `
    return cardLiteral;
}

const internTemplate = (internData) => {
    const { name, id, email, data } = internData;

    const cardLiteral = `
    
    `
    return cardLiteral;
}


module.exports = {fillTemplate};