const fs = require('fs');
const axios = require('axios');

const url = 'https://randomuser.me/api/?results=5&inc=gender,name,nat,id,city,picture,nat';

axios.get(url)
  .then(response => {
    const users = response.data.results;
    fs.writeFileSync('users.json', JSON.stringify(users, null, 2), 'utf-8');
    console.log('File users.json creato con successo!');
  })
  .catch(error => {
    console.error('Errore nel recupero dei dati:', error);
});
