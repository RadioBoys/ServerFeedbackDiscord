const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const db = require('./src/connection/connection');
const router = require('./src/router/index');

const app = express();
const port = 3030;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

router(app);

// Connect to MongoDB
db.connect();

// Start the Express server
app.listen(port, () => console.log('Server listening on port 3030!'));
