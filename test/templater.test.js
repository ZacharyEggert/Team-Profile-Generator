const templater = require('../src/templater.js');


describe('Templater', () => {
  describe('managerTemplate()...', () => {

    test('should return a card, given the proper input', () => {

        const name = "John";
        const id = 4;
        const email = "JSmith@mail.com";
        const officeNumber = 403;

        const mD = 
            {name: name,
            id: id,
            email:email,
            officeNumber:officeNumber}


      expect(templater.managerTemplate(mD)).toEqual(`
<div class='card'>
    <div class='chead'>
        <h2>${name}</h2>
        <h3>☕ Team Manager</h3>
    </div>
    <div class='cbody'>
        <ul>
            <li>ID: ${id}</li>
            <li>Email: <a href="mailto:${email}">${email}</a></li>
            <li>Office: ${officeNumber}</li>
        </ul>
    </div>
</div>
`)

    });

  });

  describe('engineerTemplate()...', () => {
    test('should return a card, given the proper input', () => {
        
        const name = "John";
        const id = 4;
        const email = "JSmith@mail.com";
        const github = "JSmith404";

        const eD = 
            {name: name,
            id: id,
            email:email,
            github:github}

      expect(templater.engineerTemplate(eD)).toEqual(`
<div class='card'>
    <div class='chead'>
        <h2>${name}</h2>
        <h3>🔨 Engineer</h3>
    </div>
    <div class='cbody'>
        <ul>
            <li>ID: ${id}</li>
            <li>Email: <a href="mailto:${email}">${email}</a></li>
        <li>Github: <a href="https://www.github.com/${github}">${github}</a></li>
        </ul>
    </div>
</div>
`)
    });

  });

  describe('internTemplate()...', () => {
    
    test('should return a card, given the proper input', () => {

        const name = "John";
        const id = 4;
        const email = "JSmith@mail.com";
        const school = "University of Washington";

        const iD = 
            {name: name,
            id: id,
            email:email,
            school:school}

        expect(templater.internTemplate(iD)).toEqual(`
<div class='card'>
    <div class='chead'>
        <h2>${name}</h2>
        <h3>👶 Intern</h3>
    </div>
    <div class='cbody'>
        <ul>
            <li>ID: ${id}</li>
            <li>Email: <a href="mailto:${email}">${email}</a></li>
            <li>School: ${school}</li>
        </ul>
    </div>
</div>
`)

    })
  })
})
