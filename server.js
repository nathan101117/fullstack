const express = require('express');
const path = require('path');
const User = require('./models/user');
const userDao = require('./dao/userDao');  // UserDAO file to handle database operations

const app = express();
const PORT = process.env.PORT || 8080;  // Use environment PORT or fallback to 8080

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

// Route to save a user
app.post('/api/users', async (req, res) => {
  try {
    const { name, email, phone } = req.body;
    const user = new User(name, email, phone);
    const id = await userDao.save(user);  // Call save method from UserDAO
    res.send(`User saved with ID: ${id}`);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error saving user');
  }
});

// Route to get all users
app.get('/api/users', async (req, res) => {
  try {
    const users = await userDao.findAll();  // Get all users from database
    res.json(users);  // Send the users as a JSON response
  } catch (err) {
    console.error(err);
    res.status(500).send('Error fetching users');
  }
});

// Route to handle the main page request
app.get('/', (req, res) => {
  res.send('Welcome to the user form page');  // Home page
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
