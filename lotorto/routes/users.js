const express = require('express');
const fs = require('fs');
const router = express.Router();

// Legge il file JSON con i dati degli utenti
const users = JSON.parse(fs.readFileSync('users.json', 'utf-8'));

// Route per ottenere tutti gli utenti
router.get('/rest', (req, res) => {
  res.json(users);
});

module.exports = router;
