require('dotenv').config();  // Load environment variables from .env file

const mysql = require('mysql2/promise');

// Use the MYSQL_URL to configure the connection pool
const db = mysql.createPool({
  uri: process.env.MYSQL_URL  // Use MYSQL_URL for connection
});

// Test the connection to the database
db.getConnection()
  .then((connection) => {
    console.log('Connected to database');
    connection.release();
  })
  .catch((err) => {
    console.error('Database connection failed:', err);
  });

module.exports = db;  // Export the db connection
