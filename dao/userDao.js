const db = require('../db');  // Import database connection

class UserDAO {
  // Method to save a user
  async save(user) {
    const sql = 'INSERT INTO users (name, email, phone) VALUES (?, ?, ?)';
    const [result] = await db.execute(sql, [user.name, user.email, user.phone]);  // Execute insert query
    return result.insertId;  // Return the ID of the inserted user
  }

  // Method to find all users
  async findAll() {
    const [rows] = await db.query('SELECT * FROM users');  // Select all users from the database
    return rows;  // Return the users
  }
}

module.exports = new UserDAO();  // Export an instance of UserDAO
