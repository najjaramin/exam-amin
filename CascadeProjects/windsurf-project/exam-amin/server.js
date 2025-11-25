const express = require('express');
const cors = require('cors');

// Initialisation de l'application Express
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Données des posts
const posts = [
  { id: '1', titre: "Premier post", contenu: 'détails premier post' },
  { id: '2', titre: "Deuxième post", contenu: 'détails deuxième post' },
  { id: '3', titre: "Troisième post", contenu: 'détails troisième post' },
];

// Route pour récupérer la liste des posts
app.get('/api/posts', (req, res) => {
  try {
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la récupération des posts', error });
  }
});

// Démarrer le serveur
const server = app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
  console.log(`Accédez à l'API : http://localhost:${PORT}/api/posts`);
  console.log(`Appuyez sur Ctrl+C pour arrêter le serveur`);
});

// Gestion de la fermeture propre du serveur
process.on('SIGINT', () => {
  console.log('\nArrêt du serveur...');
  server.close(() => {
    console.log('Serveur arrêté avec succès');
    process.exit(0);
  });
});

// Gestion des erreurs 404
app.use((req, res) => {
  res.status(404).json({ message: 'Route non trouvée' });
});

// Gestion des erreurs globales
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Une erreur est survenue', error: err.message });
});

module.exports = server;
