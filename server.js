const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Stockage temporaire des données (remplace par une base de données dans un projet réel)
let users = [];

// Route pour gérer les soumissions de formulaires
app.post('/submit', (req, res) => {
    const { name, phone } = req.body;
    users.push({ name, phone });
    console.log(users); // Affiche les utilisateurs dans la console
    res.json({ message: 'Données reçues !' });
});

// Lancement du serveur
app.listen(PORT, () => {
    console.log(`Serveur démarré sur http://localhost:${PORT}`);
});
