const db = require('../db');  // Assuming db.js is in the parent folder

class UserDAO {
  async save(user) {
    const sql = 'INSERT INTO users (name, email, phone) VALUES (?, ?, ?)';
    const [result] = await db.execute(sql, [user.name, user.email, user.phone]);
    return result.insertId;  // Return the inserted user's ID
  }

  // Method to find all users
  async findAll() {
    const [rows] = await db.query('SELECT * FROM users');
    return rows;  // Return the result from the query
  }
}

// Exporting an instance of UserDAO
module.exports = new UserDAO();
