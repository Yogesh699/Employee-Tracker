
async function viewDeparment(connection, callback){
    const result  = await connection.execute(`SELECT * FROM department`)
    console.log("Viewing All Departments: ");
    console.table(result[0]);
    callback()
}

async function viewRoles(connection, callback){
    const result = await connection.execute(`SELECT * FROM role`)
    console.log("Viewing All Roles: ");
    console.table(result[0]);
    callback()
}

async function viewEmployee(connection, callback){
    const result = await connection.execute(`SELECT * FROM employee`)
    console.log("Viewing All Employees: ");
    console.table(result[0]);
    callback()
}

export {viewDeparment, viewRoles, viewEmployee}