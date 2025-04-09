require('dotenv').config(); // Load variables from .env file
const mysql = require('mysql2/promise');

const db = mysql.createPool({
  host: process.env.MYSQL_HOST,  // Use the host from environment variables
  port: process.env.MYSQL_PORT,  // Use the port from environment variables
  user: process.env.MYSQL_USER,  // Use the user from environment variables
  password: process.env.MYSQL_PASSWORD,  // Use the password from environment variables
  database: process.env.MYSQL_DATABASE,  // Use the database from environment variables
});

module.exports = db;
