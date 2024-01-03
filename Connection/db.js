import mysql from 'mysql2/promise';

const connection = await mysql.createConnection(
    {
        host:'localhost',
        user: 'root',
        password: '',
        database: 'employee_tracker'
    }
);

export default connection;
