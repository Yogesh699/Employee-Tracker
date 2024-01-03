import inquirer from 'inquirer';
import connection from './Connection/db.js';
import {viewDeparment, viewRoles, viewEmployee} from './SQLFunctions/showData.js';
import {addDeparment, addRoles, addEmployee} from './SQLFunctions/addData.js';
import {updateEmployeeRole}from './SQLFunctions/updateData.js';

const choices_list = {
    "View All Department": viewDeparment,
    "View All Roles": viewRoles,
    "View All Employees": viewEmployee,
    "Add A Department": addDeparment,
    "Add A Role": addRoles,
    "Add An Employee": addEmployee,
    "Update An Employee Role": updateEmployeeRole,
    "Log Out": logOut
}

await connection.connect();
async function questions(){
    inquirer.prompt([{
        type: 'list',
        name: 'prompt',
        message: 'What would you like to do?',
        choices: ['View All Department', 'View All Roles', 'View All Employees', 'Add A Department', 'Add A Role', 'Add An Employee', 'Update An Employee Role', 'Log Out']
    }]).then((answers) => {
        choices_list[answers.prompt](connection, questions)
    })
}

async function logOut(){
    await connection.close();
}

function init(){
    questions()
}

init();