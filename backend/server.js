const express = require('express');
const cors = require('cors');
const commercialProjects = require('./data/commercial-projects.json');
const hobbieProjects = require('./data/hobbie-projects.json');
const app = express();
const PORT = 5000;

app.use(cors());

// Route to return project data
app.get('/api/commercial-projects', (req, res) => {
  res.json(commercialProjects);
});

// Route to return hobbie data
app.get('/api/hobbie-projects', (req, res) => {
  res.json(hobbieProjects);
});

app.listen(PORT, () => {
  console.log(`API running on http://localhost:${PORT}`);
});