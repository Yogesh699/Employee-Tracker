import inquirer from 'inquirer';
import connection from './Connection/db.js';


const choices_list = {
    "View All Department": viewDeparment,
    "View All Roles": viewRoles,
    "View All Employees": viewEmployee,
    "Add A Department": "",
    "Add A Role": "",
    "Add An Employee": "",
    "Update An Employee Role": "",
    "Log Out": logOut
}

function questions(){
    inquirer.prompt([{
        // Begin Command Line
        type: 'list',
        name: 'prompt',
        message: 'What would you like to do?',
        choices: ['View All Department', 'View All Roles', 'View All Employees', 'Add A Department', 'Add A Role', 'Add An Employee', 'Update An Employee Role', 'Log Out']
    }]).then(async (answers) => {
        await connection.connect();
        choices_list[answers.prompt]()
    })
}

async function viewDeparment(){
    const result  = await connection.execute(`SELECT * FROM department`)
    console.log("Viewing All Departments: ");
    console.table(result[0]);
    questions();
}

async function viewRoles(){
    const result = await connection.execute(`SELECT * FROM role`)
    console.log("Viewing All Roles: ");
    console.table(result[0]);
    questions();
}

async function viewEmployee(){
    const result = await connection.execute(`SELECT * FROM employee`)
    console.log("Viewing All Employees: ");
    console.table(result[0]);
    questions();
}

async function logOut(){
    await connection.close();
}
