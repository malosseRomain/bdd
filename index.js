const express = require('express');
const { resolve } = require('path');

const app = express();
const port = 3010;

app.use(express.static('static'));

const UserRouter = express.Router();
app.use('/new', UserRouter);

app.get('/', (req, res) => {
  res.redirect('/new');
});

UserRouter.get('/', (req, res) => {
  res.send('pages/index.html');
});

app.get('/', (req, res) => {
  res.send('coucou');
});

app.listen(port, () => {
  console.log(`Serveur en cours d'exécution sur le port ${port}`);
});

// dans crud    create = post    read = get    update = put    delete = delete
