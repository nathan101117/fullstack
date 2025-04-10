require('dotenv').config();  // Load environment variables from .env

const mysql = require('mysql2/promise');  // Import mysql2

const db = mysql.createPool({
  host: process.env.DB_HOST,  // Use DB_HOST from .env
  user: process.env.DB_USER,  // Use DB_USER from .env
  password: process.env.DB_PASSWORD,  // Use DB_PASSWORD from .env
  database: process.env.DB_NAME,  // Use DB_NAME from .env
  port: process.env.DB_PORT,  // Use DB_PORT from .env
});

db.getConnection()
  .then((connection) => {
    console.log('Connected to database');
    connection.release();  // Release the connection
  })
  .catch((err) => {
    console.error('Database connection failed:', err);  // Log any errors
  });

module.exports = db;  // Export the connection pool
