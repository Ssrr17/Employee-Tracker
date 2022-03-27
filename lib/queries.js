const connection = require('../db/connection');

class DB {
    constructor(connection){
        this.connection = connection;
    }

    allDept(){
        return this.connection.promise().query('SELECT * FROM department')
    }

    allEmps(){
        return this.connection.promise().query('SELECT * FROM employee')
    }

    allRoles(){
        return this.connection.promise().query('SELECT * FROM role')
    }

    addDept(department){
        return this.connection.promise().query('INSERT INTO department SET ?', department)
    }
}

module.exports = new DB(connection)