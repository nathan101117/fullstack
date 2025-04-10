const express = require('express');
const path = require('path');
const User = require('./models/user');
const userDao = require('./dao/userDao');

const app = express();
const PORT = process.env.PORT || 3000;  // Use environment variable for port

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

// Route to save user
app.post('/api/users', async (req, res) => {
  try {
    const { name, email, phone } = req.body;
    const user = new User(name, email, phone);
    const id = await userDao.save(user);
    res.send(`User saved with ID: ${id}`);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error saving user');
  }
});

// Route to get all users
app.get('/api/users', async (req, res) => {
  try {
    const users = await userDao.findAll();
    res.json(users);  // Return users as a JSON response
  } catch (err) {
    console.error(err);
    res.status(500).send('Error fetching users');
  }
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
