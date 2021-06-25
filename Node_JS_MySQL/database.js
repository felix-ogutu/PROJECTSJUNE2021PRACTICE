const mysql = require("mysql2");
const connection = mysql.createConnection({
  host: "localhost",
  user: "felix",
  password: "password",
});
//to connect to the database to create connection
connection.connect(function (err) {
  if (err) throw err;
  console.log("Connected");
  //create the database
  connection.query("CREATE DATABASE mySchool", function (err, result) {
    if (err) throw err;
    console.log("Database created");
  });
});
