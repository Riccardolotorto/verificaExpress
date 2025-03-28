const express = require('express');
const fs = require('fs');
const router = express.Router();

const users = JSON.parse(fs.readFileSync('users.json', 'utf-8'));

router.get('/pages/people/:email', (req, res) => {
  const user = users.find(u => u.email === req.params.email);
  
  if (!user) {
    return res.status(404).send('Utente non trovato');
  }

  res.render('people', { user });
});

module.exports = router;
