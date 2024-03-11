
require('dotenv').config();

const mysql = require('mysql2');

// Here we create the connection to the database
const connection = mysql.createConnection({
  host: process.env.host,
  user: process.env.user,
  port: process.env.port,
  password: process.env.password,
  database: process.env.database
});

// Connect to the database
connection.connect(function (err) {
  if (err) {
    console.error('Login error:', err);
    return;
  }
  console.log('Successfully connected to MySQL database!');

  // Execute query
  connection.query('SELECT * FROM users', function (error, results, fields) {
    if (error) {
      console.error('Error executing the query:', error);
      return;
    }
    console.log('Query results:', results);
  });

  // Close the connection when done
  connection.end();
});
