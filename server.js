const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors());

let userProfile = {
  name: 'John Doe',
  email: 'john@example.com',
  password: '123456',
};

// Get user profile
app.get('/api/profile', (req, res) => {
  res.json(userProfile);
});

// Update user profile
app.put('/api/profile', (req, res) => {
  userProfile = req.body;
  res.json({ message: 'Profile updated successfully' });
});

// Update user password
app.put('/api/password', (req, res) => {
  const { currentPassword, newPassword } = req.body;
  // Check if current password matches
  if (currentPassword === userProfile.password) {
    userProfile.password = newPassword;
    res.json({ message: 'Password updated successfully' });
  } else {
    res.status(400).json({ error: 'Current password is incorrect' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
