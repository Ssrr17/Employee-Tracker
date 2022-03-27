const inquirer = require("inquirer");
const cTable = require("console.table");
const sql = require("./db/query_lib");
const cHelper = require("./lib/choiceHelper");

const db = require("./db/connection");

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
            allDepts();
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
