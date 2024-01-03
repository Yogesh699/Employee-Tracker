import inquirer from 'inquirer';

// Add Department
async function addDeparment(connection, callback){
    inquirer.prompt([{
        type: 'input',
        name: 'department',
        message: 'Plese insert name of department?',
        validate: departmentInput => {
            const isValid = departmentInput.trim() !== '';

            if (isValid) {
                return true;
            } else {
                throw new Error('Please enter a non-empty department name.');
            }
        }
    }]).then(async (answers) => {
        await connection.execute(`INSERT INTO department (name) VALUES (?)`, [answers.department])
        console.log(`${answers.department} deparment has been added.`)
        callback()
    })
}

// Add Roles
async function addRoles(connection, callback){
    const result  = await connection.execute(`SELECT * FROM department`)
    const depts = result[0].map(dept => dept.name)
    inquirer.prompt([{
        type: 'input',
        name: 'role',
        message: 'Please Add a role',
        validate: roleInput => {
            if (roleInput) {
                return true;
            } else {
                throw new Error('Could you please include a role?');
            }
        }
    },
    {
        type: 'input',
        name: 'salary',
        message: 'Please add a Salary',
        validate: salaryInput => {
            if (salaryInput && !isNaN(salaryInput)) {
                return true;
            } else {
                throw new Error('Please insert a valid numeric salary.');
            }
        }
    },
    {
        type: 'list',
        name: 'department',
        message: 'Please select the department to which the role belongs.',
        choices: depts,
    }]).then(async answers => {
        const dept = result[0].find(item => item.name === answers.department)
        await connection.execute(`INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)`, [answers.role, answers.salary, dept.id])
        console.log(`${answers.role} hase been added in database`)
        callback()
    })
}

// Add Employee
async function addEmployee(connection, callback){
    const resultRole  = await connection.execute(`SELECT * FROM role`)
    const roles = resultRole[0].map(role => role.title)

    const resultManager  = await connection.execute('SELECT * FROM employee WHERE manager_id IS NULL')
    const managers = resultManager[0].map(manager => manager.first_name)
    managers.push("NONE")

    inquirer.prompt([{
        type: 'input',
        name: 'fname',
        message: 'Please insert employee first name',
        validate: employeeInput => {
            if (employeeInput) {
                return true;
            } else {
                throw new Error('Please insert non-empty first employee name');
            }
        }
    },
    {
        type: 'input',
        name: 'lname',
        message: 'Please insert employee last name',
        validate: employeeInput => {
            if (employeeInput) {
                return true;
            } else {
                throw new Error('Please insert non-empty last employee name');
            }
        }
    },
    {
        type: 'list',
        name: 'role',
        message: 'Please select role of employee',
        choices: roles
    },
    {
        type: 'list',
        name: 'manager',
        message: 'Please select manager of the employee (if not select NONE)',
        choices: managers
    },
    ]).then(async answers => {
        const role = resultRole[0].find(item => item.title === answers.role)
        let manager = resultManager[0].find(item => item.first_name === answers.manager)
        manager = manager ? manager : ""
        await connection.query(`INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)`, [answers.fname, answers.lname, role.id, manager.id])
        console.log(`${answers.fname} hase been added in database`)
        callback()
    })
}

export {addDeparment, addRoles, addEmployee}