// Author : Jy Alexander
// Student ID : 100902103
// Due Date : April 19th, 2024

require('dotenv').config();
const express = require('express');
const pug = require('pug');
const path = require('path');
const animalRouter = require('./routes/animal.router');



const app = express();

// Set the view engine to pug
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use('/animals', animalRouter);

// Define a route
app.get('/', (req, res) => {
  res.render('index', { title: 'Home' });
});


// Listen on a port
const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
