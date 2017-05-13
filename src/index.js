

// imports
const path = require('path');
const express = require('express');



const app = express();
// view engine setup

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));


module.exports = app;
