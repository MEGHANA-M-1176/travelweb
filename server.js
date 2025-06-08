const express = require('express');
const cors = require('cors');
const fs = require('fs');
const USERS_FILE = './users.json';

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('public')); // Serve frontend files

// Basic test endpoint
app.get('/api/test', (req, res) => {
  res.json({ message: "Backend connected!" });
});

// Search endpoint
app.post('/api/search', (req, res) => {
  const { from, to, departure } = req.body;
  // Mock search results
  const results = [
    {
      id: 1,
      airline: "TravelEase Airways",
      from,
      to,
      departure,
      price: "₹45,999",
      duration: "2h 30m"
    },
    {
      id: 2,
      airline: "SkyHigh Airlines",
      from,
      to,
      departure,
      price: "₹52,499",
      duration: "2h 15m"
    }
  ];
  res.json(results);
});

// Registration endpoint
app.post('/api/register', (req, res) => {
  const { name, email, password } = req.body;
  let users = [];
  if (fs.existsSync(USERS_FILE)) {
    users = JSON.parse(fs.readFileSync(USERS_FILE));
  }
  if (users.find(u => u.email === email)) {
    return res.status(400).json({ message: 'Email already registered' });
  }
  users.push({ name, email, password });
  fs.writeFileSync(USERS_FILE, JSON.stringify(users, null, 2));
  res.json({ message: 'Registration successful' });
});

// Admin endpoint to view all users
app.get('/api/admin/users', (req, res) => {
  if (fs.existsSync(USERS_FILE)) {
    const users = JSON.parse(fs.readFileSync(USERS_FILE));
    res.json(users);
  } else {
    res.json([]);
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
