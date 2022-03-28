const connection = require("../db/connection");

class DB {
  constructor(connection) {
    this.connection = connection;
  }

  allDept() {
    return this.connection.promise().query("SELECT * FROM department");
  }

  allEmps() {
    return this.connection
      .promise()
      .query(
        "SELECT employee.id,employee.first_name,employee.last_name, role.title AS role FROM employee LEFT JOIN role ON employee.role_id = role.id"
      );
  }

  allRoles() {
    return this.connection
      .promise()
      .query(
        "SELECT role.id, role.title, role.salary, department.name AS department_name FROM role LEFT JOIN department ON role.department_id = department.id"
      );
  }

  addDept(department) {
    return this.connection
      .promise()
      .query("INSERT INTO department SET ?", department);
  }
  addRole(role) {
    return this.connection.promise().query("INSERT INTO role SET ?", role);
  }
  addEmp(employee) {
    return this.connection
      .promise()
      .query("INSERT INTO employee SET ?", employee);
  }

  updateEmp(data) {
    const values = [data.role_id, data.employee_id];
    return this.connection
      .promise()
      .query(
        `UPDATE employee
         SET role_id = ?
         WHERE id = ?`,
        values
      )
  }
}

module.exports = new DB(connection);

// updateEmpRoleById(data) {
//     const values = [data.role_id, data.employee_id];
//     return this.db
//       .promise()
//       .query(
//         `UPDATE employee
//          SET role_id = ?
//          WHERE id = ?`,
//         values
//       )
//   }
