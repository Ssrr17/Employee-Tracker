const inquirer = require("inquirer");
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
      queries.addDept(result).then(() => {
        console.log(`Department ${result.name} has been successfully added!`);
      })
      .then(() => {
        mainMenu();
      });
    })
    
}
