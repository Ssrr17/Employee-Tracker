const inquirer = require("inquirer");
const { listenerCount } = require("./db/connection");
require("console.table");
const queries = require("./lib/queries");

const mainMenu = () => {
  inquirer
    .prompt([
      {
        type: "list",
        name: "request",
        message: "What would you like to do?",
        choices: [
          "Add a Department",
          "Add an Employee",
          "Add a Role",
          "Update Employees Role",
          "View All Departments",
          "View All Employees",
          "View All Roles",
        ],
        loop: false,
      },
    ])

    .then((data) => {
      const { request } = data;
      console.log(request);
      //   Switch case
      switch (request) {
        case "View All Departments":
          allDept();
          break;
        case "View All Employees":
          allEmps();
          break;
        case "View All Roles":
          allRoles();
          break;
        case "Add a Department":
          addDept();
          break;
        case "Add a Role":
          addRole();
          break;
        case "Add an Employee":
          addEmp();
          break;
        case "Update Employees Role":
          updateEmp();
          break;
      }
    });
};

mainMenu();

function allDept() {
  queries
    .allDept()
    .then(([rows]) => {
      console.table(rows);
    })
    .then(() => {
      mainMenu();
    });
}

function allEmps() {
  queries
    .allEmps()
    .then(([rows]) => {
      console.table(rows);
    })
    .then(() => {
      mainMenu();
    });
}

function allRoles() {
  queries
    .allRoles()
    .then(([rows]) => {
      console.table(rows);
    })
    .then(() => {
      mainMenu();
    });
}
function addDept() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "Enter department name",
        name: "name",
      },
    ])
    .then((result) => {
      queries
        .addDept(result)
        .then(() => {
          console.log(`Department ${result.name} has been successfully added!`);
        })
        .then(() => {
          mainMenu();
        });
    });
}
function addRole() {
  let deptChoices;
  queries.allDept().then(([rows]) => {
    deptChoices = rows.map((row) => {
      return { name: row.name, value: row.id };
    });

    inquirer
      .prompt([
        {
          type: "input",
          message: "Enter role title",
          name: "title",
        },
        {
          type: "input",
          message: "Enter role salary",
          name: "salary",
        },
        {
          type: "list",
          name: "department_id",
          message: "Choose a department to add role",
          choices: deptChoices,
        },
      ])
      .then((result) => {
        queries
          .addRole(result)
          .then(() => {
            console.log(`Role ${result.title} has been successfully added!`);
          })
          .then(() => {
            mainMenu();
          });
      });
  });
}

function addEmp() {
  let empChoices;
  queries.allRoles().then(([rows]) => {
    empChoices = rows.map((row) => {
      return { name: row.name, value: row.id };
    });
    inquirer
      .prompt([
        {
          type: "input",
          message: "Enter employee first name",
          name: "first_name",
        },
        {
          type: "input",
          message: "Enter employee last name",
          name: "last_name",
        },
        {
          type: "list",
          name: "role_id",
          message: "Choose a role for new employee",
          choices: empChoices,
        },
      ])
      .then((result) => {
        queries
          .addEmp(result)
          .then(() => {
            console.log(
              `${result.first_name} ${result.last_name} has been successfully added as a new employee!`
            );
          })
          .then(() => {
            mainMenu();
          });
      });
  });
}

function updateEmp() {
  let empChoices;
  queries.allEmps().then(([rows]) => {
    empChoices = rows.map((row) => {
      return { name: row.name, value: row.id };
    });
    let roleChoices;
    queries.allRoles().then(([rows]) => {
      roleChoices = rows.map((row) => {
        return { name: row.name, value: row.id };
      });
      inquirer
        .prompt([
          {
            type: "list",
            name: "employee_id",
            message: "Choose a employee to update",
            choices: empChoices,
          },
          {
            type: "list",
            name: "role_id",
            message: "Choose a new role for employee",
            choices: roleChoices,
          },
        ])
        .then((result) => {
          queries
            .updateEmp(result)
            .then(() => {
              console.log(
                `${result.employee_id} has been successfully updated!`
              );
            })
            .then(() => {
              mainMenu();
            });
        });
    });
  });
}
