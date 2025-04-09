const db = require('../db');

class UserDAO {
  // Save user to DB
  async save(user) {
    const sql = 'INSERT INTO users (name, email, phone) VALUES (?, ?, ?)';
    const [result] = await db.execute(sql, [user.name, user.email, user.phone]);
    return result.insertId;
  }

  // Get all users from DB
  async findAll() {
    const [rows] = await db.query('SELECT * FROM users');
    return rows;  // Returns the result from the query
  }
}

module.exports = new UserDAO();
