const mysql = require('mysql2/promise');

const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '1234', // password 
  database: 'user_data',
});

module.exports = db;
