const topHTML =`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Staff Viewer</title>

    <style>
        *{
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            font-weight: 600;
        }
        a{
            color: inherit;
        }
        ul{
            list-style: none;
            width: 100%;
        }
        li{
            margin:.25rem 0 0 0;
            padding: .5rem;
            background-color: white;
            border-radius: .5rem;
            border: lightgrey 1px solid;
            font-weight: normal;
            font-size: 1rem;
            width: 100%;
        }
        header{
            width: 100%;
            height: 8rem;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: #dc143c;
            color: white;
            box-shadow: .5rem .25rem lightgrey;
            border-bottom-left-radius: 1rem;
            border-bottom-right-radius: 1rem;
        }
        main{
            width: 100%;
        }
        .container{
            width: 100%;
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            padding: 1rem 10%;
        }
        .card{
            flex: 0 0 20rem;
            width: 20rem;
            border-radius: .5rem;
            background-color: #f2f2f2;
            margin: 1rem 1rem;
            border: 1px lightgrey solid;
            box-shadow: .5rem .25rem lightgrey;
        }
        .chead{
            background-color: cornflowerblue;
            width: 100%;
            color: white;
            border-top-left-radius: .5rem ;
            border-top-right-radius: .5rem ;
            padding: 1rem .5rem 1rem 1.5rem;
        }
        .cbody{
            display: flex;
            flex-direction: column;
            flex-wrap: nowrap;
            padding: 2rem 1rem;
            justify-content: center;
            align-items: center;
        }

    </style>

</head>
<body>
    <header>
        <h1>Staff</h1>
    </header>
    <main>
        <div class='container'>
`;
const bottomHTML =`
</div>
</main>

</body>
</html>`;


const fillTemplate = (data) => {
    let StringAccumulator = ``;

    const { manager, engineer, intern} = data;

    const engineers = Object.values(engineer)??null;
    const interns = Object.values(intern)??null;

    StringAccumulator += topHTML;

    StringAccumulator += managerTemplate(manager);
    if(engineers){engineers.forEach((e) => { StringAccumulator += engineerTemplate(e); });}
    if(interns){interns.forEach((e) => { StringAccumulator += internTemplate(e); });}

    StringAccumulator += bottomHTML;

    return StringAccumulator;

}

const managerTemplate = (managerData) => {
    const { name, id, email, officeNumber } = managerData;
    console.log(managerData)

    const cardLiteral = `
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
`
    return cardLiteral;

}

const engineerTemplate = (engineerData) => {
    const { name, id, email, github } = engineerData;

    const cardLiteral = `
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
`
    return cardLiteral;
}

const internTemplate = (internData) => {
    const { name, id, email, school } = internData;

    const cardLiteral = `
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
`
    return cardLiteral;
}


module.exports = {fillTemplate};