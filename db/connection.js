const mysql = require("mysql2");

// Connect to database
const db = mysql.createConnection(
    {
      host: "localhost",
      // Your MySQL username,
      user: "root",
      // Your MySQL password
      password: "gambit17",
      database: "Jersey_FC",
    },
    console.log("Connected to the Jersey_FC database.")
  );

 
  

  module.exports = db;