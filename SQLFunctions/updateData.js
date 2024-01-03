import inquirer from 'inquirer';

async function updateEmployeeRole(connection, callback){
    const employeeData = await connection.execute(`SELECT * FROM employee`);
    const employeeList = employeeData[0].map(employee => employee.first_name)

    const roleData = await connection.execute(`SELECT * FROM role`)
    const roleList = roleData[0].map(role => role.title)

    inquirer.prompt([
        {
            type: 'list',
            name: 'employee',
            message: 'Which employees role do you want to update?',
            choices: employeeList
        },
        {
            type: 'list',
            name: 'role',
            message: 'Please insert a new Role',
            choices: roleList
        }
        ]).then(answers => {
            const employee = employeeData[0].find(employee => employee.first_name == answers.employee)
            const role = roleData[0].find(role => role.title === answers.role)
            
            connection.execute('UPDATE employee SET role_id = ? WHERE first_name = ?', [role.id, employee.first_name]);
            console.log(`Employee ${employee.first_name} Role has been updated`)
            callback();
        })

        
}

export {updateEmployeeRole}